import {
  SET_WHARE_PENDING
} from '../actions'

const initialState = false

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WHARE_PENDING:
      return true
    default:
      return state
  }
}

export default reducer
