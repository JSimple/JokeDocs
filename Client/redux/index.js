import { combineReducers } from 'redux';
import associationsReducer from './associations';

const appReducer = combineReducers({
    associations: associationsReducer
});

export default appReducer;