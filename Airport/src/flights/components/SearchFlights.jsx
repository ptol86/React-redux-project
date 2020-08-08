import React from 'react';
import {connect} from "react-redux";
import SearchForm from "./SearchForm";
import Navigation from "./Navigation";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import * as flightsActions from "../flights.actions";
import {flightsListSelector} from "../flights.selectors";

class SearchFlight extends React.Component {

    componentDidMount() {
        this.props.getFlightsList();
    }

    render() {
        return (
        <>
        <div className="search-flights" >
            <h2 className="search-flights__title">SEARCH FLIGHT</h2>
            <SearchForm/>
            <div className="search-results">
                <Navigation/>
                <div className="tabs-container">
                    <table className="table">
                        <TableHead/>
                        <TableBody/>
                    </table>
                </div>
            </div>
        </div>
        </>
        )
    }
}

const mapState = state => {
    return {
      tasks: flightsListSelector(state),
    }
}
const mapDispatch = {
    getFlightsList: flightsActions.getFlightsList,
   
}
export default connect(mapState, mapDispatch)(SearchFlight);