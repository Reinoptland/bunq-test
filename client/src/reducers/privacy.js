import { USER_DECLINE_PRIVACY, USER_ACCEPT_PRIVACY } from '../actions/users'

export default function (state = {}, { type, payload }) {
    switch (type) {
        case USER_DECLINE_PRIVACY:
            return {
                error: payload
            }

        case USER_ACCEPT_PRIVACY:
            return {
                permission: payload
        }   

        default:
            return state
    }
}
