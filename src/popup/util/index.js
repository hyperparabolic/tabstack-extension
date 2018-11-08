/**
 * Given a tabs.Tab, returns a new object containing only
 * properties important to tabstack state.
 *
 * @param {tabs.Tab} tab
 */
export const sanitizeTab = (tab) => {
    return {
        browserID: tab.id,
        title: tab.title,
        url: tab.url,
    };
};
