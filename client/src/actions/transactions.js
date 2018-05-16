import * as request from 'superagent'
// import { baseUrl } from '../constants'
// import { isExpired } from '../jwt'

const baseUrl = 'http://localhost:4000'

export const FETCH_TRANSACTIONS = "FETCH_TRANSACTIONS"
export const FETCH_TRANSACTIONS_FAILED = "FETCH_TRANSACTIONS_FAILED"

export const fetchTransactions = (id) => (dispatch, getState) => {
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