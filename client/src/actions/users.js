import * as request from 'superagent'
import { baseUrl } from '../constants'
import { isExpired } from '../jwt'

export const ADD_USER = 'ADD_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const UPDATE_USERS = 'UPDATE_USERS'

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'

export const USER_LOGOUT = 'USER_LOGOUT'

export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED'

export const USER_BUNQ_SUCCESS = 'USER_BUNQ_SUCCESS'
export const USER_BUNQ_FAILED = 'USER_BUNQ_FAILED'

export const logout = () => ({
    type: USER_LOGOUT
})

export const signup = (email, password) => (dispatch) =>
    request
        .post(`${baseUrl}/users`)
        .send({ firstName: email, lastName: email, email, password })
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
        .send({key})
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