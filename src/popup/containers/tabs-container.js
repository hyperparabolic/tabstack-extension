import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteTab, popTab } from "../actions";
// import { reducer } from "../reducers";
import Tab from "../components/tab";
import TabsList from "../components/tabs-list";

const TabsContainer = ({ tabs, popTab, deleteTab }) => (
    <div>
        <TabsList>
            {
                tabs.map(tab =>
                    <Tab
                        key={tab.id}
                        tab={tab}
                        onPopClicked={() => popTab(tab)}
                        onDeleteClicked={() => deleteTab(tab)} />
                )
            }
        </TabsList>
    </div>
);

TabsContainer.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
    })).isRequired,
    popTab: PropTypes.func.isRequired,
    deleteTab: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
    return { tabs: state.tabs };
};

export default connect(
    mapStateToProps,
    { popTab, deleteTab }
)(TabsContainer);
