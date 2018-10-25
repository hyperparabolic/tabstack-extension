

export const PUSH_TAB_STARTING = Symbol("PUSH_TAB_STARTING");
export const PUSH_TAB_COMPLETED = Symbol("PUSH_TAB_COMPLETED");

export const DELETE_TAB = Symbol("DELETE_TAB");

export const POP_ID_STARTING = Symbol("POP_ID_STARTING");
export const POP_ID_COMPLETED = Symbol("POP_ID_COMPLETED");


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

export const deleteTab = (tab) => {
    return {
        type: DELETE_TAB,
        tab,
    };
};
