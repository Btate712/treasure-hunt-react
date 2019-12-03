import React from 'react';
import { Link } from 'react-router-dom';

const Clue = props => {
  return (
    <div className="clue-div" id={props.clue.id}>
      <Link className="clue-show-link link" key={props.clue.id} to={`/clues/${props.clue.id}`}>
        {props.clue.text}
      </Link>
    </div>
  );
}


export default Clue;
