import * as request from 'superagent'
// import { baseUrl } from '../constants'
import { isExpired } from '../jwt'

const baseUrl = 'http://localhost:4000'

export const ADD_USER = 'ADD_USER'
export const UPDATE_USER = 'UPDATE_USER'

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED'

export const USER_LOGOUT = 'USER_LOGOUT'

export const USER_FEEDBACK = 'USER_FEEDBACK'
export const USER_FEEDBACK_ERROR = 'USER_FEEDBACK_ERROR'

export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED'

export const USER_ACCEPT_PRIVACY = 'USER_ACCEPT_PRIVACY'
export const USER_DECLINE_PRIVACY = 'USER_DECLINE_PRIVACY'

export const FETCH_USER_PROFILE = "FETCH_USER_PROFILE"
export const FETCH_USER_PROFILE_FAILED = "FETCH_USER_PROFILE_FAILED"

export const DELETE_USER = "DELETE_USER"


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
        payload: {
          jwt: result.body.jwt,
          user: result.body.user
        }
      })
    })
    .catch(err => {
      if (err.status === 404) {
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

export const privacy = (id) => (dispatch, getState) =>{
  const state = getState()
  if (!state.currentUser) return null
  const jwt = state.currentUser.jwt

  
  if (isExpired(jwt)) return dispatch(logout())
  console.log(id)
  request
    .put(`${baseUrl}/users/${id}`)
    .send({id, permission: true})
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
    })}

export const feedback = (data, id) => (dispatch, getState) =>{
  const state = getState()
  if (!state.currentUser) return null
  const jwt = state.currentUser.jwt

  if (isExpired(jwt)) return dispatch(logout())
  request
    .post(`${baseUrl}/users/${id}/feedback`)
    .send(data)
    .then(response => {
      console.log('response')
      dispatch({
        type: USER_FEEDBACK,
        payload: response.body
      })
    })
    .catch(err => {
      if (err.status === 400) {
        dispatch({
          type: USER_FEEDBACK_ERROR,
          payload: err.response.body.message || 'Unknown error'
        })
      }
      else {
        console.error(err)
      }
    })
}

export const fetchProfile = (id) => (dispatch) => {
  console.log("console loggind acxtion id", id)
  request
    .get(`${baseUrl}/users/${id.id}/`)
    .then(result => dispatch({
      type: FETCH_USER_PROFILE,
      payload: result.body
    }))
    .catch(err => {
      if (err.status === 400) {
        dispatch({
          type: FETCH_USER_PROFILE_FAILED,
          payload: err.response.body.message || 'Unknown error'
        })
      }
      else {
        console.error(err)
      }
    })}


    export const updateProfile = (id, updates) => (dispatch) => {
      // console.log(id, updates)
      request
        .put(`${baseUrl}/users/${id}`)
        .send(updates)
        .then(result => {
          console.log("console logging delete action", result)
          dispatch({
            type: UPDATE_USER,
            payload: result.body
          })
        })
        .catch(err => console.error(err))
    }

    export const deleteUser = (id) => (dispatch) => {
      console.log("console logging user id in actions", id)
      request
        .delete(`${baseUrl}/users/${id}`)
        .then(response => dispatch({
          type: DELETE_USER,
          payload: id
        }))
    }
    
    export const deleteUserTransactions = (id) => (dispatch) => {
      request
        .delete(`${baseUrl}/users/${id}/transactions`) 
        .then(response => dispatch({
          type: DELETE_USER,
          payload: id
        }))
    }

    export const deleteUserFeedback = (id) => (dispatch) => {
      console.log("console logging user id in actions", id)
      request
        .delete(`${baseUrl}/users/${id}/feedback`) 
        .then(response => dispatch({
          type: DELETE_USER,
          payload: id
        }))
    }

