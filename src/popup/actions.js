

export const PUSH_TAB_STARTING = Symbol("PUSH_TAB_STARTING");
export const PUSH_TAB_COMPLETED = Symbol("PUSH_TAB_COMPLETED");

export const DELETE_TAB = Symbol("DELETE_TAB");

export const POP_TAB_STARTING = Symbol("POP_TAB_STARTING");
export const POP_TAB_COMPLETED = Symbol("POP_TAB_COMPLETED");

export const pushTab = () => {
    return async (dispatch) => {
        dispatch(pushTabStarting());

        let tab = (await browser.tabs.query({
            currentWindow: true,
            active: true,
        }))[0];
        tab.date = Date.now();
        browser.tabs.remove(tab.id).then(() => dispatch(pushTabCompleted(tab)));
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
            // TODO: +1?  have to feel this out
            index: currentTab.index,
            url: tab.url,
        };

        browser.tabs.create(props).then(() => dispatch(popTabCompleted(tab)));
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
    return {
        type: DELETE_TAB,
        tab,
    };
};
