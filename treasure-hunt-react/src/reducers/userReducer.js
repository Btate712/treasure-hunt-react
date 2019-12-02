const userReducer = (state = { name: "temp", password: "temp", token: "", inProgress: false }, action) => {
  switch(action.type) {
    case 'LOGGING_IN':
      return {
        ...state,
        inProgress: true
      }

    case 'LOGGED_IN':
      return {
        ...state,
        inProgress: false,
        token: action.token
      }

    default:
      return state;
  }
}

export default userReducer;
