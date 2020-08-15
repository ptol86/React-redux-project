import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import  qs from 'qs';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import FlightsList from './FlightsList';
import { flightsListSelector, spinnerSelector } from '../flights.selectors';
import * as flightsActions from  '../flights.actions';
import Spinner from './Spinner'

const Flights = ({ getFlightsList, flightsList, isFetching }) => {
    
const [ filter,  setFilter] = useState("");

    useEffect(()=> {
        getFlightsList();
    }, []);

    
    let { direction } = useParams();
    let  { search }  = useLocation();

    useEffect(()=> {
        setFilter(search)
    }, [search]);
    
    const history = useHistory();
    console.log(filter)

    const flightsListDirection =
        flightsList[direction === 'arrivals' ? 'arrival' : 'departure'] || [];
    
    // const filterText = qs.parse(search, { ignoreQueryPrefix: true }).search;
    const filterText = history.location.search;
    console.log(filterText);

    const filteredFlights = filter
        ? flightsListDirection.filter(flight => flight.codeShareData[0].codeShare
        .toLowerCase()
        .includes(filterText.toLowerCase()))
        : flightsListDirection;

        
    if (isFetching) {
        return <Spinner />
    }

    return (
        <main className="flights">
            <FlightsList  flights={filteredFlights}/>
        </main>
    );
    
}

const mapState = state => {
    return {
      flightsList: flightsListSelector(state),
      isFetching: spinnerSelector(state),
    };
};

const mapDispatch = {
    getFlightsList: flightsActions.getFlightsList
}
export default connect(mapState, mapDispatch)(Flights);