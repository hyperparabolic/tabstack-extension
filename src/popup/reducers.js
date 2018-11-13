import * as actions from "./actions";

export const reducer = (state = { tabs: [], top: undefined }, action) => {


    switch (action.type) {
        case actions.PUSH_TAB_COMPLETED: {
            return {
                tabs: [
                action.tab,
                ...state.tabs,
                ],
                top: action.tab,
            };
        }
        case actions.POP_TAB_COMPLETED: {
            let newTabs = state.tabs.filter((tab) => tab.id !== action.tab.id);
            return {
                tabs: newTabs,
                top: newTabs[0],
            };
        }
        case actions.DELETE_TAB_COMPLETED: {
            let newTabs = state.tabs.filter((tab) => tab.id !== action.tab.id);
            return {
                tabs: newTabs,
                top: newTabs[0],
            };
        }
        case actions.TOGGLE_DISPLAY_DETAILS: {
            let newTabs = state.tabs.map((tab) => {
                if (tab.id === action.tab.id) {
                    tab.displayDetails = !tab.displayDetails;
                }
                return tab;
            });
            return {
                tabs: newTabs,
                top: newTabs[0],
            };
        }
        default:
            return state;
    }
};
