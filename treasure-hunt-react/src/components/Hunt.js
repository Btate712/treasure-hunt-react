import React from 'react';
import { Link } from 'react-router-dom';

const Hunt = props => {
  const showHuntWhenLoaded = () => {
    if(props.hunt) {
      return (
        <Link className="hunt-show-link link" key={props.hunt.id} to={`/hunts/${props.hunt.id}`}>
          <h1>{props.hunt.title}</h1>
        </Link>
      );
    } else {
      return ( <span>Loading...</span> );
    }
  }
  return (
    <div>
      {showHuntWhenLoaded()}
    </div>
  );
}


export default Hunt;
