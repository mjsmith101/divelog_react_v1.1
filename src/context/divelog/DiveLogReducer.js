const divelogReducer = (state, action) => {
  switch (action.type) {
    case 'GET_DIVES':
      return {
        ...state,
        diveData: action.payload,
        loading: false,
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}

export default divelogReducer