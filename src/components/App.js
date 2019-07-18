import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import List from './List';
import ListItem from './ListItem';

import '../styles/App.css';

function App() {
    return (
        <BrowserRouter>
            <Route path='/' exact component={List}/>
            <Route path='/items/:id' exact component={ListItem}/>
        </BrowserRouter>
    );
}

export default App;
