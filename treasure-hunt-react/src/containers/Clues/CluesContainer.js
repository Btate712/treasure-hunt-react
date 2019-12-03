import React from 'react';
import { connect } from 'react-redux';
import URL from '../../appData/URL';
import Clue from '../../components/Clue';

class CluesContainer extends React.Component {

  renderClues = () => {
    if(this.props.hunt) {
      const clues = this.props.hunt.clues;
      return clues.map((clue, index) => <li><Clue key={index} clue={clue} /></li>);
    } else {
      return ( <span>Loading...</span> );
    }
  }

  render() {
    return (
      <div>
        <h1>Clues:</h1>
        <ol>
          {this.renderClues()}
        </ol>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    token: state.user.token
  })
}

export default connect(mapStateToProps)(CluesContainer);
