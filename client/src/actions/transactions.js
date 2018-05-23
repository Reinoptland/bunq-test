import * as request from 'superagent'
import { isExpired } from '../jwt'
import { logout } from './users'

const baseUrl = 'http://localhost:4000'

export const FETCH_CONTRACTS = "FETCH_CONTRACTS"
export const FETCH_CONTRACTS_FAILED = "FETCH_CONTRACTS_FAILED"

export const FETCH_TRANSACTIONS = "FETCH_TRANSACTIONS"
export const FETCH_TRANSACTIONS_FAILED = "FETCH_TRANSACTIONS_FAILED"
export const ADD_TRANSACTIONS = "ADD_TRANSACTIONS"
export const DELETE_TRANSACTION = "DELETE_TRANSACTION"
export const DELETE_CONTRACT = "DELETE_CONTRACT"

export const fetchTransactions = (id) => (dispatch, getState) => {
  const state = getState()
  if (!state.currentUser) return null
  const jwt = state.currentUser.jwt

  if (isExpired(jwt)) return dispatch(logout())
  
  request
    .get(`${baseUrl}/users/${id}/transactions`)
    .set(`Authorization`, `Bearer ${jwt}`)
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

  if (isExpired(jwt)) return dispatch(logout())

  request
    .post(`${baseUrl}/users/${id}/transactions`)
    .set(`Authorization`, `Bearer ${jwt}`)
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

  if (isExpired(jwt)) return dispatch(logout())

  request
    .get(`${baseUrl}/users/${id}/contracts`)
    .set(`Authorization`, `Bearer ${jwt}`)
    .send(id)
    .then(result => dispatch({
      type: FETCH_CONTRACTS,
      payload: result.body
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

export const deleteContract = (id, contractName) => (dispatch, getState) => {
  const state = getState()
  if (!state.currentUser) return null
  const jwt = state.currentUser.jwt

  if (isExpired(jwt)) return dispatch(logout())

  request
    .delete(`${baseUrl}/users/${id}/contracts`)
    .set(`Authorization`, `Bearer ${jwt}`)
    .send({contractName})
    .then(result =>{
      dispatch({
        type: DELETE_CONTRACT,
        payload: result.body
      })})
    .catch(err => {
      console.error(err)
    }
  )
}