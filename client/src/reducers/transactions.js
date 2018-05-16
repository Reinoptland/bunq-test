import { FETCH_TRANSACTIONS } from '../actions/transactions'

export default function(state = null, {type, payload}){
  switch(type){
    case FETCH_TRANSACTIONS:
    return payload

    default:
    return state
  }
}