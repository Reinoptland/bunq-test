import { USER_LOGIN_SUCCESS, USER_LOGOUT } from './actions/users'
import { localStorageJwtKey } from './constants'

export const storeJwt = store => next => action => {
  try {
    if (action.type === USER_LOGIN_SUCCESS) {
      localStorage.setItem(localStorageJwtKey, action.payload.jwt)
      localStorage.setItem('user', action.payload.user.id)

    }
    if (action.type === USER_LOGOUT) {
      localStorage.removeItem(localStorageJwtKey)
      localStorage.removeItem('user')
    }
  }
  catch (e) {
    console.log(`Interaction with LocalStorage went wrong`, e)
  }

  next(action)
}