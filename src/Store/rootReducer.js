// Assuming you have a rootReducer that combines multiple reducers
import { combineReducers } from 'redux';
import dashboardReducer from './dashboard/dashbaord.reducer'

const rootReducer = combineReducers({
  dashboard: dashboardReducer, // Assuming you want to use "dashboard" as the slice name
  // ...other reducers
  
});

export default rootReducer;
