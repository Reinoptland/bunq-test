import { FETCH_TRANSACTIONS, FETCH_CONTRACTS } from '../actions/transactions'

export default function(state = null, {type, payload}){
  switch(type){
    case FETCH_TRANSACTIONS:
    return payload

    case FETCH_CONTRACTS:
    return payload

    default:
    return state
  }
}