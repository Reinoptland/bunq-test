import { FETCH_TRANSACTIONS, DELETE_TRANSACTION } from '../actions/transactions'

export default function(state = null, {type, payload}){
  switch(type){
    case FETCH_TRANSACTIONS:
    return payload

    case DELETE_TRANSACTION:
      return state.filter(transaction => transaction.id !== payload)

    default:
    return state
  }
}