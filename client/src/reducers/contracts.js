import { FETCH_CONTRACTS, DELETE_CONTRACT } from '../actions/transactions'

export default function (state = null, { type, payload }) {
    switch (type) {
        case FETCH_CONTRACTS:
            return payload

        case DELETE_CONTRACT:
            return state.filter(contract => contract.contractName !== payload[0].contractName)

        default:
            return state
    }
}