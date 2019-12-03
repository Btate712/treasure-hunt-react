function getHunt(url, id) {
  return dispatch => {
    dispatch({ type: 'LOADING_HUNT' });
    const configurationObject = {
      headers: { "Content-type": "application/json", "Authorization": sessionStorage.getItem('jwtToken')},
    }
    fetch(`${url}/hunts/${id}`, configurationObject)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        dispatch({ type: 'ADD_HUNT', hunt: json });
      });
  }
}

export default getHunt;
