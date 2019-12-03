const huntReducer = (state = { hunt: {} , inProgress: false } , action) => {

  switch(action.type) {
    case 'LOADING_HUNT':
      return {
        ...state,
        inProgress: true
      }

    case 'ADD_HUNT':
      return {
        inProgress: false,
        hunt: action.hunt
      }

    default:
      return state;
  }
}


export default huntReducer
