function getHunts(url) {
  return dispatch => {
    dispatch({ type: 'LOADING_HUNTS' });
    const configurationObject = {
      headers: { "Content-type": "application/json", "Authorization": sessionStorage.getItem('jwtToken')},
    }
    fetch(`${url}/hunts`, configurationObject)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        dispatch({ type: 'ADD_HUNTS', hunts: json });
      });
  }
}

export default getHunts;
