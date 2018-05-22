import { USER_LOGIN_SUCCESS, USER_LOGOUT, UPDATE_USER, DELETE_USER, USER_ACCEPT_PRIVACY } from '../actions/users'
import { localStorageJwtKey } from '../constants'
import { ADD_USER, FETCH_USER_PROFILE  } from '../actions/users'

let initialState = null

try {
  const jwt = localStorage.getItem(localStorageJwtKey)
  const id = Number(localStorage.getItem('user'))
  if (jwt) {
    initialState = { jwt, id }
  }
}
catch (e) {
  console.log(`Error retrieving data from local storage`, e)
}

export default function (state = initialState, { type, payload }) {
  switch (type) {
    
    case USER_LOGIN_SUCCESS:
      return payload
    
    case USER_LOGOUT:
      return null
      
    case USER_ACCEPT_PRIVACY:
      return {...state, user: payload }

    case UPDATE_USER:
      // state.user = payload
      return {...state, user: payload}
    
    case DELETE_USER:
      return delete payload.id

    case ADD_USER:
      return {
        ...state,
        [payload.id]: payload
      }

    case FETCH_USER_PROFILE:
      return payload

    default:
      return state
  }
}