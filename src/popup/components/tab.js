import React from "react";
import PropTypes from "prop-types";
import TabDetails from "./tab-details";

import "./tab.styl";

const Tab = ({ tab, bgClassName, onPopClicked, onDeleteClicked }) => (
    <div className={bgClassName}>
        <div className="tab-favicon">
            <img className="favicon" src={tab.favIconUrl} alt="favicon"></img>
        </div>
        <div className="tab-info">
            <h2>{tab.title}</h2>
            <TabDetails
                id={tab.id}
                url={tab.url}
                date={tab.date} />
            <button onClick={onPopClicked}>Pop</button>
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
    }).isRequired,
    bgClassName: PropTypes.string.isRequired,
    onPopClicked: PropTypes.func.isRequired,
    onDeleteClicked: PropTypes.func.isRequired,
};

export default Tab;
