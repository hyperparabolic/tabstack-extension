/**
 * Given a tabs.Tab, returns a new object containing only
 * properties important to tabstack state.
 *
 * @param {tabs.Tab} tab
 */
export const sanitizeTab = (tab) => {
    console.log(tab.favIconUrl);
    return {
        browserID: tab.id,
        displayDetails: false,
        favIconUrl: tab.favIconUrl,
        title: tab.title,
        url: tab.url,
    };
};
