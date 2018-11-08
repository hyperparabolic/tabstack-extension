import idb from "idb";

let dbPromise = idb.open("tabstack-tabs", 1, (upgradeDB) => {
    switch (upgradeDB.oldVersion) {
        case 0:
            // first time creation
            upgradeDB.createObjectStore("tabs", {keyPath: "id", autoIncrement: true});
        case 1:
            // current version, do nothing
    }
});

export const addTab = async (tab) => {
    return dbPromise.then((db) => {
        let tx = db.transaction("tabs", "readwrite");
        let store = tx.objectStore("tabs");
        return store.add(tab);
    });
};

export const deleteTab = async (tabID) => {
    return dbPromise.then((db) => {
        let tx = db.transaction("tabs", "readwrite");
        let store = tx.objectStore("tabs");
        return store.delete(tabID);
    });
};

export const getAllTabs = async () => {
    return dbPromise.then((db) => {
        let tx = db.transaction("tabs", "readonly");
        let store = tx.objectStore("tabs");
        return store.getAll();
    });
};
