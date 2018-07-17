import { mergeState } from 'commonLib'

const initialState = {
  title: 'home页面',
}

const home = (state = initialState, action) => {
  switch (action.type) {
    case 'LIST' :
    case 'TEST' :
      return mergeState(state, action)
    default: return state
  }
}

export default home
