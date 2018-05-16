import { USER_FEEDBACK } from '../actions/users'

export default function (state = {}, { type, payload }) {
    switch (type) {
        case USER_FEEDBACK:
            return {
                error: payload
            }

        default:
            return state
    }
}
