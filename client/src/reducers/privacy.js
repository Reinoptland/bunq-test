import { USER_DECLINE_PRIVACY, USER_ACCEPT_PRIVACY } from '../actions/users'

export default function (state = {}, { type, payload }) {
    switch (type) {
        case USER_DECLINE_PRIVACY:
            return {
                error: payload
            }

        default:
            return state
    }
}
