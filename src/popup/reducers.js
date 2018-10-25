import * as actions from "./actions";

export const reducer = (state = { tabs: [] }, action) => {


    switch (action.type) {
        case actions.PUSH_TAB_COMPLETED:
            return {
                tabs: [
                action.tab,
                ...state.tabs,
                ],
            };
        case actions.DELETE_TAB:
            return {
                tabs: state.tabs.filter((tab) => tab.id !== action.tab.id),
            };
        default:
            return state;
    }
};
