import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteTab, popTab, toggleDisplayDeails } from "../actions";
// import { reducer } from "../reducers";
import Tab from "../components/tab";
import TabsList from "../components/tabs-list";

const TabsContainer = ({ tabs, popTab, deleteTab, toggleDisplayDeails }) => (
    <div>
        <TabsList>
            {
                tabs.map((tab, i) =>
                    <Tab
                        key={tab.id}
                        tab={tab}
                        bgClassName={i % 2 ? "tab-even" : "tab-odd"}
                        onPopClicked={() => popTab(tab)}
                        onDeleteClicked={() => deleteTab(tab)}
                        onHeaderClicked={() => toggleDisplayDeails(tab)} />
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
        displayDetails: PropTypes.bool.isRequired,
    })).isRequired,
    popTab: PropTypes.func.isRequired,
    deleteTab: PropTypes.func.isRequired,
    toggleDisplayDeails: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
    return { tabs: state.tabs };
};

export default connect(
    mapStateToProps,
    { popTab, deleteTab, toggleDisplayDeails }
)(TabsContainer);
