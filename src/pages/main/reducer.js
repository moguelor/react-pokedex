import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import sidebarList from '../sidebarList'

const rootReducer = combineReducers({
  routing: routerReducer,
  [sidebarList.NAME] : sidebarList.reducer
});

export default rootReducer;