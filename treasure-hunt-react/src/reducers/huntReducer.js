const huntReducer = (state = { hunts: [], inProgress: false } , action) => {

  switch(action.type) {
    case 'LOADING_HUNTS':
      return {
        ...state,
        inProgress: true
      }

    case 'ADD_HUNTS':
      return {
        inProgress: false,
        hunts: action.hunts
      }

    default:
      return state;
  }
}

export default huntReducer
