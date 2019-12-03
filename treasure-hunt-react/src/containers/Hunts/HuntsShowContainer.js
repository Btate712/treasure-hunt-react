import React from 'react';
import { connect } from 'react-redux';
import getHunt from '../../actions/getHunt';
import Hunt from '../../components/Hunt';
import CluesContainer from '../Clues/CluesContainer';
import URL from '../../appData/URL';
import { Link } from 'react-router-dom';

class HuntsShowContainer extends React.Component {

  componentDidMount = () => {
    this.props.getHunt(URL, this.props.huntId, this.props.token);
  }

  showCluesWhenAvailable = () => {
    if (this.props.hunt.hunt.clues) {
      return <CluesContainer hunt={this.props.hunt.hunt} />
    } else {
      return <span>Loading...</span>
    }
  }

  render() {
    const hunt = this.props.hunt.hunt;
    return (
      <div>
        <Hunt hunt={hunt.hunt} />
        {this.showCluesWhenAvailable()}
      <Link to="/hunts"><button>Back to Hunts...</button></Link>
        <button onClick={() => console.log(this.props)}>Show Props</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    hunt: state.huntData,
    token: state.user.token
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    getHunt: (url, id, authToken) => dispatch(getHunt(url, id, authToken))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(HuntsShowContainer);
