import { combineReducers } from 'redux'
import {
  REQUEST_CAR_INFOS, RECEIVE_CAR_INFOS
} from '../actions'

// const car = (state = {
//   items: []
// }, action) => {
//   switch (action.type) {
//     case REQUEST_CAR_INFOS:
//       return {
//         ...state
//       }
//     case RECEIVE_CAR_INFOS:
//       return {
//         ...state
//       }
//     default:
//       return state
//   }
// }

const buildCar = (state = { }, action) => {
  switch (action.type) {
    case RECEIVE_CAR_INFOS:
      console.log(action)
      return {
        ...state
      }
    case REQUEST_CAR_INFOS:
      console.log(action)
      return {
        ...state
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  buildCar
})

export default rootReducer
