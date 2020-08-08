import React from 'react';
import SearchFlight from "./flights/components/SearchFlights"
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
    return (
        <Provider store={store}>
            <SearchFlight/>
        </Provider>
    );
};

export default App;