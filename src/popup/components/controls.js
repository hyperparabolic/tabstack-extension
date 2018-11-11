import React from "react";
import PropTypes from "prop-types";

import "./controls.styl";

const Controls = ({ onPushClicked, onPopClicked }) => (
    <div className="tabstack-controls">
        <button className="push-control" onClick={onPushClicked}>Push Tab</button>
        <button className="pop-control" onClick={onPopClicked}>Pop Tab</button>
    </div>
);

Controls.propTypes = {
    onPushClicked: PropTypes.func.isRequired,
    onPopClicked: PropTypes.func.isRequired,
};

export default Controls;
