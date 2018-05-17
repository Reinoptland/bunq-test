import { USER_FEEDBACK } from '../actions/users'

export default function (state = {}, { type, payload }) {
    switch (type) {
       
        case USER_FEEDBACK:
        console.log('reducer feedback')
        return {
            ...state,
            [payload.id]: payload
          }
            

        default:
            return state
    }
}
