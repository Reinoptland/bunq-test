import * as request from 'superagent'
// import { baseUrl } from '../constants'
import { isExpired } from '../jwt'
import { logout } from './users'

const baseUrl = 'http://localhost:4000'

export const FETCH_CONTRACTS = "FETCH_CONTRACTS"
export const FETCH_CONTRACTS_FAILED = "FETCH_CONTRACTS_FAILED"

export const FETCH_TRANSACTIONS = "FETCH_TRANSACTIONS"
export const FETCH_TRANSACTIONS_FAILED = "FETCH_TRANSACTIONS_FAILED"
export const ADD_TRANSACTIONS = "ADD_TRANSACTIONS"
export const DELETE_TRANSACTION = "DELETE_TRANSACTION"

export const fetchTransactions = (id) => (dispatch, getState) => {
  console.log(id)
  request
    .get(`${baseUrl}/users/${id}/transactions`)
    .send(id)
    .then(result => dispatch({
      type: FETCH_TRANSACTIONS,
      payload: result.body.transactions
    }))
    .catch(err => {
      if (err.status === 400) {
        dispatch({
          type: FETCH_TRANSACTIONS_FAILED,
          payload: err.response.body.message || 'Unknown error'
        })
      }
      else {
        console.error(err)
      }
    })
}

export const addTransactions = (data, id) => (dispatch, getState) =>{
  const state = getState()
  if (!state.currentUser) return null
  const jwt = state.currentUser.jwt

  console.log('in action!!')

  if (isExpired(jwt)) return dispatch(logout())
  request
    .post(`${baseUrl}/users/${id}/transactions`)
    .send(data)
    .then(response => {
      console.log('response')
      dispatch({
        type: ADD_TRANSACTIONS,
        payload: response.body
      })
    })
    .catch(err => {
        console.error(err)
      }
    )
}

export const fetchContracts = (id) => (dispatch, getState) => {
  const state = getState()
  if (!state.currentUser) return null
  const jwt = state.currentUser.jwt

  request
    .get(`${baseUrl}/users/${id}/contracts`)
    .send(id)
    .then(result => dispatch({
      type: FETCH_CONTRACTS,
      payload: result.body.contracts
    }))
    .catch(err => {
      if (err.status === 400) {
        dispatch({
          type: FETCH_CONTRACTS_FAILED,
          payload: err.response.body.message || 'Unknown error'
        })
      }
      else {
        console.error(err)
      }
    })
}

export const deleteTransaction = (id) => (dispatch, getState) => {
  const state = getState()
  request
  .delete(`${baseUrl}/transactions/${id}`)
  .then(result =>{
  console.log(result.body, id)
  dispatch({
    type: DELETE_TRANSACTION,
    payload: id
  })})
}