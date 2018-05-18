import { USER_LOGIN_SUCCESS, USER_LOGOUT, UPDATE_USER } from '../actions/users'
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

    case USER_LOGOUT:
      return null

    case 'UPDATE_USER':
      // state.user = payload
      return {...state, user: payload}

    default:
      return state
  }
}
