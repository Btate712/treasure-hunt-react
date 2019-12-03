import React from 'react';
import { connect } from 'react-redux';
import Clue from '../../components/Clue';
import ClueInput from '../../components/ClueInput';
import createClue from '../../actions/createClue';
import URL from '../../appData/URL';

class CluesContainer extends React.Component {
  state = {
    newClueDesired: false
  }

  renderClues = () => {
    if(this.props.hunt) {
      const clues = this.props.hunt.clues;
      return clues.map((clue, index) => <li key={index} ><Clue clue={clue} /></li>);
    } else {
      return ( <span>Loading...</span> );
    }
  }

  createClue = (clue, huntId) => {
    this.props.createClue(URL, clue, huntId, this.props.token);
    this.setState({ newClueDesired: false })
  }

  showNewClueInput = () => {
    if(this.state.newClueDesired) {
      console.log(this.props)
      return <ClueInput createClue={this.createClue} huntId={this.props.hunt.hunt.id}/>
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

const mapStateToProps = state => {
  return ({
    token: state.user.token
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    createClue: (url, clue, huntId, authToken) => dispatch(createClue(url, clue, huntId, authToken))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(CluesContainer);
