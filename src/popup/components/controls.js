import React from "react";
import PropTypes from "prop-types";

const Controls = ({ onPushClicked, onPopClicked }) => (
    <div>
        <button onClick={onPushClicked}>Push Tab</button>
        <button onClick={onPopClicked}>Pop Tab</button>
    </div>
);

Controls.propTypes = {
    onPushClicked: PropTypes.func.isRequired,
    onPopClicked: PropTypes.func.isRequired,
};

export default Controls;
