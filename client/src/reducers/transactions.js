import { FETCH_TRANSACTIONS, FETCH_CONTRACTS, DELETE_TRANSACTION } from '../actions/transactions'

export default function(state = null, {type, payload}){
  switch(type){
    case FETCH_TRANSACTIONS:
    return payload

    case FETCH_CONTRACTS:
    return payload

    case DELETE_TRANSACTION:
      return state.filter(transaction => transaction.id !== payload)

    default:
    return state
  }
}