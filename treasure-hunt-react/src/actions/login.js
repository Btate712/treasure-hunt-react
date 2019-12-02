function login(username, password) {
  return dispatch => {
    dispatch({ type: 'LOGGING_IN' });
    const configurationObject = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ name: username, password: password })
    }
    fetch('http://localhost:3000/auth/login', configurationObject)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: 'LOGGED_IN', token: json.access_token });
      });
  }
}

export default login;