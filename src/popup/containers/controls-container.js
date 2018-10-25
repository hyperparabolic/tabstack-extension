import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { pushTab } from "../actions";
import Controls from "../components/controls";

const ControlsContainer = ({ tabs, pushTab }) => (
    <div>
        <Controls onPushClicked={() => pushTab()} />
    </div>
);

ControlsContainer.propTypes = {
    pushTab: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
    return { tabs: state.tabs };
};

export default connect(
    mapStateToProps,
    { pushTab }
)(ControlsContainer);
