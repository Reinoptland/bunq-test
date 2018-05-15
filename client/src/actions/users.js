import * as request from 'superagent'
import { baseUrl } from '../constants'
import { isExpired } from '../jwt'

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'

export const USER_LOGOUT = 'USER_LOGOUT'

export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED'

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