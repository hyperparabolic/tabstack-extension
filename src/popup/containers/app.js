import React from "react";
import TabsContainer from "./tabs-container";
import ControlsContainer from "./controls-container";

import "./app.styl";

const App = () => (
    <div>
        <header><h1>TabStack</h1></header>
        <ControlsContainer />
        <TabsContainer />
    </div>
);

export default App;
