import React, { useState, useEffect } from "react";
import { useHistory, useParams, useLocation } from "react-router-dom";
import qs from "qs";

const SearchForm = () => {

    const [input, setInput] = useState("");
    
    const history = useHistory();
    
    
    return (
        <>
        <h2 className="search-flights__title">SEARCH FLIGHT</h2>
        <form className="search-flights__form" onSubmit={(e) => {
            e.preventDefault();
           
            return history.push({
                ...history,
                pathname: history.location.pathname,
                search: qs.stringify({search: input}),
            });
        }}>
            <i className='fa fa-search' ></i>
            <input 
                className="search-flights__input" 
                name="search" 
                type="text" 
                placeholder="Airline, destination or fligth #"
                value={input}
                onChange={({target}) => setInput(target.value)}
            />
            <button className="search-flights__btn" >SEARCH</button>
        </form>
        </>
    )

    return (
        <>
            <h2 className="search-flights__title">SEARCH FLIGHT</h2>
            <form className="search-flights__form">
                    <i className='fa fa-search' ></i>
                    <input className="search-flights__input" name='search' type="text" placeholder="Airline, destination or fligth #"/>
                    <button className="search-flights__btn">SEARCH</button>
            </form>
        </>
    )
}

export default SearchForm;