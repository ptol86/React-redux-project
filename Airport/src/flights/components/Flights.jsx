import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import  qs from 'qs';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import FlightsList from './FlightsList';
import { flightsListSelector } from '../flights.selectors';
import * as flightsActions from  '../flights.actions';
import Spinner from './Spinner'



const Flights = ({ getFlightsList, flightsList, isFetching }) => {
    
    useEffect(()=> {
        getFlightsList();
    }, []);

    let { direction } = useParams();
    let  { search }  = useLocation();
    // const history = useHistory();
    // let {searchInput, setInput} = useState(search)
    // console.log(search)

    // useEffect(()=> {
    //     console.log(search);
    // }, [history]);
    
    const flightsListDirection =
        flightsList[direction === 'arrivals' ? 'arrival' : 'departure'] || [];
    
    const filterText = qs.parse(search, { ignoreQueryPrefix: true }).search;
   
    const filteredFlights = filterText
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
    };
};

const mapDispatch = {
    getFlightsList: flightsActions.getFlightsList
}
export default connect(mapState, mapDispatch)(Flights);