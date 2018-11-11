import * as cache from "./cache";
import {sanitizeTab} from "./util";

const BLACKLISTED_URLS = /^(about:|chrome:|data:|file:|javascript:)/;

export const PUSH_TAB_STARTING = Symbol("PUSH_TAB_STARTING");
export const PUSH_TAB_COMPLETED = Symbol("PUSH_TAB_COMPLETED");

export const DELETE_TAB_STARTING = Symbol("DELETE_TAB_STARTING");
export const DELETE_TAB_COMPLETED = Symbol("DELETE_TAB_COMPLETED");

export const POP_TAB_STARTING = Symbol("POP_TAB_STARTING");
export const POP_TAB_COMPLETED = Symbol("POP_TAB_COMPLETED");


export const pushTab = () => {
    return async (dispatch) => {
        dispatch(pushTabStarting());

        let tab = sanitizeTab((await browser.tabs.query({
            currentWindow: true,
            active: true,
        }))[0]);
        tab.date = new Date().toLocaleString();

        // do not push blacklisted tabs
        if (tab.url.match(BLACKLISTED_URLS)) {
            console.log("skip push, blacklisted tab");
            return;
        }

        let tabs = (await browser.tabs.query({
            currentWindow: true,
        }));

        let pushPromise = cache.addTab(tab).then((id) => {
            tab.id = id;
            return Promise.resolve(tab);
        });

        // open newtab if last tab
        if (tabs.length === 1) {
            let props = { active: true, index: 0 };
            pushPromise.then(() => browser.tabs.create(props));
        }
        pushPromise.then(() => browser.tabs.remove(tab.browserID))
            .then(() => dispatch(pushTabCompleted(tab)));
    };
};

const pushTabStarting = () => {
    return {
        type: PUSH_TAB_STARTING,
    };
};

const pushTabCompleted = (tab) => {
    return {
        type: PUSH_TAB_COMPLETED,
        tab,
    };
};

export const popTab = (tab) => {
    return async (dispatch) => {
        dispatch(popTabStarting());

        let currentTab = (await browser.tabs.query({
            currentWindow: true,
            active: true,
        }))[0];

        let props = {
            active: true,
            index: currentTab.index + 1,
            url: tab.url,
        };

        browser.tabs.create(props)
            .then(() => cache.deleteTab(tab.id))
            .then(() => dispatch(popTabCompleted(tab)));
    };
};

const popTabStarting = () => {
    return {
        type: POP_TAB_STARTING,
    };
};

const popTabCompleted = (tab) => {
    return {
        type: POP_TAB_COMPLETED,
        tab,
    };
};

export const deleteTab = (tab) => {
    return async (dispatch) => {
        dispatch(deleteTabStarting());

        cache.deleteTab(tab.id).then(() => dispatch(deleteTabCompleted(tab)));
    };
};

const deleteTabStarting = () => {
    return {
        type: DELETE_TAB_STARTING,
    };
};

const deleteTabCompleted = (tab) => {
    return {
        type: DELETE_TAB_COMPLETED,
        tab,
    };
};
