import React from 'react';
import { connect } from 'react-redux';
import getHunts from '../../actions/getHunts';
import URL from '../../appData/URL';
import Hunt from '../../components/Hunt';

class HuntsIndexContainer extends React.Component {

  componentDidMount = () => {
    this.props.getHunts(URL, this.props.token);
  }

  renderHunts = () => {
    const hunts = this.props.hunts.hunts;
    return hunts.map((hunt, index) => <Hunt key={index} hunt={hunt} />);
  }

  render() {
    return (
      <div>
        <h1>Hunts:</h1>
        {this.renderHunts()}
        <button onClick={() => console.log(this.props.hunts)}>Show Props</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    hunts: state.huntsData,
    token: state.user.token
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    getHunts: (url, authToken) => dispatch(getHunts(url, authToken))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(HuntsIndexContainer);
