import { FETCH_CONTRACTS } from '../actions/transactions'

export default function (state = null, { type, payload }) {
    switch (type) {
        case FETCH_CONTRACTS:
            return payload

        default:
            return state
    }
}