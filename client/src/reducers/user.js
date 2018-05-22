
import { UPDATE_USER, FETCH_USER_PROFILE } from '../actions/users'


export default (state = null, { type, payload }) => {
    switch (type) {
  case UPDATE_USER:
  console.log("reducer update user", type, payload)
        return {
          ...state,
           payload
        } 

  case FETCH_USER_PROFILE:
  console.log("reducer FETCH PROFILE", type, payload)

        return payload
        
        default:
        return state
    } 
  }
