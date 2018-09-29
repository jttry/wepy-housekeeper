import { combineReducers } from 'redux';
import counter from './counter';
import weather from './weather';
import user from './user';


export default combineReducers({
  counter,
  weather,
  user
})