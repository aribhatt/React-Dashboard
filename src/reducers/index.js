import { combineReducers } from 'redux';
import navItemReducer from './reducer_navitems';

const rootReducer = combineReducers({
  navItems: navItemReducer
});

export default rootReducer;
