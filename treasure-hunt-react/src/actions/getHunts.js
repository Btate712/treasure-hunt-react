function getHunts(authToken) {
  return dispatch => {
    dispatch({ type: 'LOADING_HUNTS' });
    const configurationObject = {
      headers: { "Content-type": "application/json", "Authorization": authToken},
    }
    fetch('http://localhost:3000/hunts', configurationObject)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: 'ADD_HUNTS', hunts: json.hunts });
      });
  }
}

export default getHunts;
