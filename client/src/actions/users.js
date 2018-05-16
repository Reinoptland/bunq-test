import * as request from 'superagent'
// import { baseUrl } from '../constants'
import { isExpired } from '../jwt'

const baseUrl = 'http://localhost:4000'

export const ADD_USER = 'ADD_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const UPDATE_USERS = 'UPDATE_USERS'

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED'

export const USER_LOGOUT = 'USER_LOGOUT'

export const USER_FEEDBACK = 'USER_FEEDBACK'

export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED'

export const USER_BUNQ_SUCCESS = 'USER_BUNQ_SUCCESS'
export const USER_BUNQ_FAILED = 'USER_BUNQ_FAILED'

export const USER_ACCEPT_PRIVACY = 'USER_ACCEPT_PRIVACY'
export const USER_DECLINE_PRIVACY = 'USER_DECLINE_PRIVACY'

export const logout = () => ({
  type: USER_LOGOUT
})


export const login = (email, password) => (dispatch) =>
  request
    .post(`${baseUrl}/logins`)
    .send({ email, password })
    .then(result => {
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: result.body
      })
    })
    .catch(err => {
      if (err.status === 400) {
        dispatch({
          type: USER_LOGIN_FAILED,
          payload: err.response.body.message || 'Unknown error'
        })
      }
      else {
        console.error(err)
      }
    })

export const signup = (data) => (dispatch) =>
  request
    .post(`${baseUrl}/users`)
    .send({ firstName: data.firstName, lastName: data.lastName, email: data.email, password: data.password })
    .then(result => {
      dispatch({
        type: USER_SIGNUP_SUCCESS
      })
    })
    .catch(err => {
      if (err.status === 400) {
        dispatch({
          type: USER_SIGNUP_FAILED,
          payload: err.response.body.message || 'Unknown error'
        })
      }
      else {
        console.error(err)
      }
    })

export const getUsers = () => (dispatch, getState) => {
  const state = getState()
  if (!state.currentUser) return null
  const jwt = state.currentUser.jwt

  if (isExpired(jwt)) return dispatch(logout())

  request
    .get(`${baseUrl}/users`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch({
        type: UPDATE_USERS,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const bunqLogin = (key) => (dispatch) =>
  request
    .post(`${baseUrl}/logins`)
    .send({ key })
    .then(result => {
      dispatch({
        type: USER_BUNQ_SUCCESS,
        payload: result.body
      })
    })
    .catch(err => {
      if (err.status === 400) {
        dispatch({
          type: USER_BUNQ_FAILED,
          payload: err.response.body.message || 'Unknown error'
        })
      }
      else {
        console.error(err)
      }
    })

export const privacy = () => (dispatch) =>
  request
    .post(`${baseUrl}/privacy`)
    .then(result => {
      dispatch({
        type: USER_ACCEPT_PRIVACY,
        payload: result.body
      })
    })
    .catch(err => {
      if (err.status === 400) {
        dispatch({
          type: USER_DECLINE_PRIVACY,
          payload: err.response.body.message || 'Unknown error'
        })
      }
      else {
        console.error(err)
      }
    })

export const feedback = () => (dispatch) =>
  request
    .post(`${baseUrl}/feedback`)
    .then(result => {
      dispatch({
        type: USER_FEEDBACK,
        payload: result.body
      })
    })
