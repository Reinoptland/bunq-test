import { USER_LOGIN_SUCCESS, USER_LOGOUT, UPDATE_USER, DELETE_USER } from '../actions/users'
import { localStorageJwtKey } from '../constants'
import { ADD_USER, FETCH_USER_PROFILE  } from '../actions/users'






let initialState = null

try {
  const jwt = localStorage.getItem(localStorageJwtKey)
  const id = Number(localStorage.getItem('user'))
  if (jwt) {
    initialState = { jwt, id }
  }
}
catch (e) {
  console.log(`Error retrieving data from local storage`, e)
}

export default function (state = initialState, { type, payload }) {
  switch (type) {
    
    case USER_LOGIN_SUCCESS:
      return payload

    
      case USER_LOGOUT:
      return null

    
      case "UPDATE_USER":
      // state.user = payload
      return {...state, user: payload}
    
    
      case DELETE_USER:
      return delete payload.id
      console.log("delete user case in reducer", payload.id)

     
      case UPDATE_USER:
      console.log("reducer update user", type, payload)
      return {
        ...state,
         payload
      } 

      case ADD_USER:
      return {
        ...state,
        [payload.id]: payload
      }
      

      case FETCH_USER_PROFILE:
console.log("reducer FETCH PROFILE", type, payload)

      return payload


    default:
      return state
  }
}
// export default (state = null, { type, payload }) => {
//   switch (type) {
//     case ADD_USER:
//       return {
//         ...state,
//         [payload.id]: payload
//       }

//     default:
//       return state
//   }
// }

// export default (state = null, { type, payload }) => {
//   switch (type) {
// case UPDATE_USER:
// console.log("reducer update user", type, payload)
//       return {
//         ...state,
//          payload
//       } 

// case FETCH_USER_PROFILE:
// console.log("reducer FETCH PROFILE", type, payload)

//       return payload
      
//       default:
//       return state
//   } 
// }
