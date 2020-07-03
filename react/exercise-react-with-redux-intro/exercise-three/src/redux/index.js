import { createStore, combineReducers } from 'redux';
import carReducer from './carReducer';
import trafficSignalReducer from './trafficSignalReducer';

const reducer = combineReducers({
  carReducer,
  trafficSignalReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
