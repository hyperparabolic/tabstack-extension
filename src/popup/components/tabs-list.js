import React from "react";
import PropTypes from "prop-types";

const TabsList = ({ children }) => (
    <div>
        <div>{children}</div>
    </div>
);

TabsList.propTypes = {
    children: PropTypes.node,
};

export default TabsList;
