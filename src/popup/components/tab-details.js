import PropTypes from "prop-types";
import React from "react";

import "./tab-details.styl";

const TabDetails = ({url, date, displayDetails, onPopClicked}) => {

    if (displayDetails) {

        return (
            <div className="tab-details">
                <ul>
                    <li className="hyperlink" onClick={onPopClicked}>
                        {/* suppress normal link click here, rely on onClick above */}
                        <a href={url} onClick={(e) => e.preventDefault()}>{url}</a>
                    </li>
                    <li>{date}</li>
                </ul>
            </div>
        );
    }
    return (<div className="tab-details"></div>);
};

TabDetails.propTypes = {
    url: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    displayDetails: PropTypes.bool.isRequired,
    onPopClicked: PropTypes.func.isRequired,
};

export default TabDetails;
