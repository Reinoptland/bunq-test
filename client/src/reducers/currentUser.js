import { USER_LOGIN_SUCCESS, USER_LOGOUT, UPDATE_USER, DELETE_USER, USER_ACCEPT_PRIVACY } from '../actions/users'
import { localStorageJwtKey } from '../constants'

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

    case USER_ACCEPT_PRIVACY:
      return {
        user: {
          permission: payload.user.permission
        }
      }

    case USER_LOGOUT:
      return null

    case UPDATE_USER:
      // state.user = payload
      return {...state, user: payload}
    
    case DELETE_USER:
      return delete payload.id
      console.log("delete user case in reducer", payload.id)

    default:
      return state
  }
}
