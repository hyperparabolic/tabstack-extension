import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { pushTab, popTab } from "../actions";
import Controls from "../components/controls";

const ControlsContainer = ({ top, pushTab, popTab }) => (
    <div>
        <Controls
            onPushClicked={() => pushTab()}
            onPopClicked={() => popTab(top)} />
    </div>
);

ControlsContainer.propTypes = {
    top: PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        date: PropTypes.number.isRequired,
    }),
    pushTab: PropTypes.func.isRequired,
    popTab: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
    return { top: state.top };
};

export default connect(
    mapStateToProps,
    { pushTab, popTab }
)(ControlsContainer);
