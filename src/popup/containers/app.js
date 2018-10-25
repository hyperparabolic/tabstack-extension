import React from "react";
import TabsContainer from "./tabs-container";
import ControlsContainer from "./controls-container";

const App = () => (
    <div className={styles.app}>
        <h1>TabStack</h1>
        <ControlsContainer />
        <TabsContainer />
    </div>
);

export default App;