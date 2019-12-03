function createClue(url, clue, huntId) {
  clue.hunt_id = huntId;
  return dispatch => {
    dispatch({ type: 'CREATING_CLUE' });
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": sessionStorage.getItem('jwtToken'),
      },
      body: JSON.stringify(clue)
    }
    console.log(configurationObject);
    fetch(`${url}/clues`, configurationObject)
      .then(response => response.json())
      .then(json => {
        if(json.status === "success") {
          dispatch({ type: 'ADD_CLUE', clue: clue });
        }

      });
  }
}

export default createClue;
