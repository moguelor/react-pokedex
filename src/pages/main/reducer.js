import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import sidebarList from '../sidebarList'
import details from '../details'

const rootReducer = combineReducers({
  router: routerReducer,
  [sidebarList.NAME] : sidebarList.reducer,
  [details.NAME] : details.reducer,
});

export default rootReducer;