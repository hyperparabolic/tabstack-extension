import React from "react";
import PropTypes from "prop-types";

const Controls = ({ onPushClicked }) => (
    <div>
        <button onClick={onPushClicked}>Push Tab</button>
    </div>
);

Controls.propTypes = {
    onPushClicked: PropTypes.func.isRequired,
};

export default Controls;
