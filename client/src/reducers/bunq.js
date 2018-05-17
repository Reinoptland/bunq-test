import { USER_BUNQ_FAILED, USER_BUNQ_ADDED } from '../actions/users'

export default function (state = {}, { type, payload }) {
    switch (type) {
        case USER_BUNQ_FAILED:
            return {
                error: payload
            }

        case USER_BUNQ_ADDED:
        return state

        default:
            return state
    }
}