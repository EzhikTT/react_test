import React from 'react';

import {Provider} from 'react-redux';

import store from '../store';

import App from './App';

export default class Root extends React.Component {

    render = () => (
        <Provider store={store}>
            <App/>
        </Provider>
    );
}