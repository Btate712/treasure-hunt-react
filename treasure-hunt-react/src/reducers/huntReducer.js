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

    case 'CREATING_CLUE':
      return {
        ...state,
        inProgress: true
      }

    case 'ADD_CLUE':
      return {
        ...state,
        inProgress: false,
        hunt: {
          ...state.hunt,
          clues: state.hunt.clues.concat(action.clue)
        }
      }

    default:
      return state;
  }
}


export default huntReducer
