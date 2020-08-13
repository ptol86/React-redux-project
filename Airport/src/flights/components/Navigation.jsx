import React from "react";
import { BrowserRouter, NavLink, Route, Switch, Redirect, useLocation } from "react-router-dom";
import Flights from "./Flights"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaneDeparture, faPlaneArrival } from "@fortawesome/free-solid-svg-icons";
import qs from "qs";

const Navigation = () => {
    const  { search }  = useLocation();
    const value = qs.parse(search, { ignoreQueryPrefix: true }).search;
    return (
        <div className="nav-container">
                <BrowserRouter>
                <NavLink 
                to={`/departure${value ? `?search=${value}` : ''}`}
                className='nav-item' 
                activeClassName='nav-item__selected'
                >
                <div className='plane'> 
                <FontAwesomeIcon icon={faPlaneDeparture} />
                </div>
                DEPARTURES
                </NavLink>
                <NavLink 
                to={`/arrivals${value ? `?search=${value}` : ''}`}
                className='nav-item' 
                activeClassName='nav-item__selected'
                >
                <div className='plane'>
                <FontAwesomeIcon icon={faPlaneArrival} />
                </div>
                ARRIVALS
                </NavLink>                     
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/arrivals"/> : <Flights />
                    </Route>
                    <Route path={`/:direction`} >
                        <Flights />
                    </Route>
                </Switch>
                </BrowserRouter>
        </div> 
    )
}


export default Navigation;