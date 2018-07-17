import { combineReducers } from 'redux'
// 引入reducers
import home  from './home'
import user from './user'

// 组合reducers
export default combineReducers({
  home,
  user,
})
