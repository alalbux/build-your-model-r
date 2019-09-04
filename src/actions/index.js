export const REQUEST_CAR_INFOS = 'REQUEST_CAR_INFOS'
export const RECEIVE_CAR_INFOS = 'RECEIVE_CAR_INFOS'

export const requestCarInfos = () => ({
  type: REQUEST_CAR_INFOS
})

export const receiveCar = (json) => ({
  type: RECEIVE_CAR_INFOS,
  data: json.data
})

const fetchCar = () => dispatch => {
  dispatch(requestCarInfos())
  return fetch(`https://next.json-generator.com/api/json/get/41ORKNZDU`)
    .then(response => response.json())
    .then(json => dispatch(receiveCar(json)))
}

export const fetchCarIfNeeded = () => (dispatch, getState) => dispatch(fetchCar())
