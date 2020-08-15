import React, { useState, useEffect } from "react";
import { useHistory, useParams, useLocation } from "react-router-dom";
import qs from "qs";

const SearchForm = () => {

    const [value, setValue] = useState("");

    const history = useHistory();

    const handleClick = () => {
        history.push({
            ...history,
            search: value,
        })
    }

    return (
        <>
        <h2 className="search-flights__title">SEARCH FLIGHT</h2>
        <div className="search-flights__form">
            <i className='fa fa-search' ></i>
            <input 
                className="search-flights__input" 
                name="search" 
                type="text" 
                placeholder="Airline, destination or fligth #"
                value={value}
                onChange={({target}) => setValue(target.value)}
            />
            <button className="search-flights__btn" onClick={handleClick}>SEARCH</button>
        </div>
        </>
    )
//     const  { search }  = useLocation();

//     const filterText = qs.parse(search, { ignoreQueryPrefix: true }).search;

//     const [value, setValue] = useState(filterText);
   
//     return (
//         <>
//             <h2 className="search-flights__title">SEARCH FLIGHT</h2>
//             <div className="search-flights__form" >
//                 <i className='fa fa-search' ></i>

//                 <input 
//                     className="search-flights__input"
//                     value={value}
//                     onChange={()=> setValue(event.target.value)}
//                     name='search'
//                     type="text" 
//                     placeholder="Airline, destination or fligth #" 
//                 />
//                 <button 
//                 className="search-flights__btn" 
//                 >SEARCH</button>
//             </div>
//         </>
//     )
}

export default SearchForm;