import React from 'react';
import { connect } from 'react-redux';
import Clue from '../../components/Clue';
import ClueInput from '../../components/ClueInput';

class CluesContainer extends React.Component {
  state = {
    newClueDesired: false
  }

  showNewClueInput = () => {
    if(this.state.newClueDesired) {
      return <ClueInput />
    }
  }

  renderClues = () => {
    if(this.props.hunt) {
      const clues = this.props.hunt.clues;
      return clues.map((clue, index) => <li key={index} ><Clue clue={clue} /></li>);
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
        {this.showNewClueInput()}
        <button onClick={ () => this.setState({newClueDesired: true}) }>
          Add a Clue...
        </button>
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
