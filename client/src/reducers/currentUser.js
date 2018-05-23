import { USER_LOGIN_SUCCESS, USER_LOGOUT, UPDATE_USER, DELETE_USER, USER_ACCEPT_PRIVACY } from '../actions/users'
import {jwtSecret, localStorageJwtKey} from '../constants'
import { ADD_USER, FETCH_USER_PROFILE  } from '../actions/users'
import * as jwt from 'jsonwebtoken'

let initialState = null

try {
  const jwtToken = localStorage.getItem(localStorageJwtKey)
    const user = jwt.verify(jwtToken, jwtSecret)
    const permission = localStorage.getItem('permission')

    if(permission !== null) user.permission = permission

    if (jwt) {
    initialState = { jwt: jwtToken, user }
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
      return {...state, ...payload }

    case UPDATE_USER:
      // state.user = payload
      return {...state, ...payload}
    
    case DELETE_USER:
      return delete payload.id

    case ADD_USER:
      return {
        ...state,
        [payload.id]: payload
      }

    case FETCH_USER_PROFILE:
      return {...state, ...payload}

    default:
      return state
  }
}