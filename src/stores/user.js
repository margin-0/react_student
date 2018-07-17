import { mergeState } from 'commonLib'

const initialState = {
  title: 'user页面',
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_NAME' :
      return mergeState(state, action)
    default: return state
  }
}

export default user
