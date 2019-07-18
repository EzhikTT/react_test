import {createStore} from 'redux';
import app from '../store/reducers';

const store = createStore(app);

export default store;