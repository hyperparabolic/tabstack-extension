import React from "react";
import PropTypes from "prop-types";
import TabDetails from "./tab-details";

import "./tab.styl";

const Tab = ({ tab, bgClassName, onPopClicked, onDeleteClicked, onHeaderClicked }) => (
    <div className={bgClassName}>
        <div className="tab-favicon">
            <img onClick={onHeaderClicked} className="favicon" src={tab.favIconUrl} alt="favicon"></img>
        </div>
        <div className="tab-info">
            <h2 onClick={onHeaderClicked}>{tab.title}</h2>
            <TabDetails
                url={tab.url}
                date={tab.date}
                displayDetails={tab.displayDetails}
                onPopClicked={onPopClicked} />
        </div>
        <div className="tab-delete">
            <button className="delete-button" aria-label="Delete Tabstack Tab" onClick={onDeleteClicked}>&times;</button>
        </div>
    </div>
);

Tab.propTypes = {
    tab: PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        displayDetails: PropTypes.bool.isRequired,
    }).isRequired,
    bgClassName: PropTypes.string.isRequired,
    onPopClicked: PropTypes.func.isRequired,
    onDeleteClicked: PropTypes.func.isRequired,
    onHeaderClicked: PropTypes.func.isRequired,
};

export default Tab;
