import React from "react";
import PropTypes from "prop-types";
import TabDetails from "./tab-details";

const Tab = ({ tab, onPopClicked, onDeleteClicked }) => (
    <div>
        <h1>{tab.title}</h1>
        <TabDetails
            id={tab.id}
            url={tab.url}
            date={tab.date} />
        <button onClick={onPopClicked}>Pop</button>
        <button onClick={onDeleteClicked}>Delete</button>
    </div>
);

Tab.propTypes = {
    tab: PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        date: PropTypes.number.isRequired,
    }).isRequired,
    onPopClicked: PropTypes.func.isRequired,
    onDeleteClicked: PropTypes.func.isRequired,
};

export default Tab;
