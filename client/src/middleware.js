import {USER_ACCEPT_PRIVACY, USER_LOGIN_SUCCESS, USER_LOGOUT, UPDATE_USER} from './actions/users'
import { localStorageJwtKey } from './constants'

export const storeJwt = store => next => action => {
  try {
    if (action.type === USER_LOGIN_SUCCESS) {
      localStorage.setItem(localStorageJwtKey, action.payload.jwt)

    }
    if (action.type === USER_LOGOUT) {
      localStorage.removeItem(localStorageJwtKey)
        localStorage.removeItem('permission')
    }
    if(action.type === USER_ACCEPT_PRIVACY) {
        localStorage.setItem('permission', action.payload.permission)

    }
    if(action.type === UPDATE_USER) {
      localStorage.setItem(localStorageJwtKey, action.payload.jwt)
    }
  }
  catch (e) {
    console.log(`Interaction with LocalStorage went wrong`, e)
  }

  next(action)
}