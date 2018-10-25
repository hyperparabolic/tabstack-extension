import PropTypes from "prop-types";
import React from "react";

const TabDetails = ({id, url, date}) => (
    <div>
        {id} - {url} - {date}
    </div>
);

TabDetails.propTypes = {
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
};

export default TabDetails;
