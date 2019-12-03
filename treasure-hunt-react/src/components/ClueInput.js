import React from 'react';

class ClueInput extends React.Component {
  state = {
    text: "Enter your clue here",
    location: "",
    passcode: Math.floor(Math.random() * 100000),
    index: "",
    hunt_id: this.props.huntId,
    image_id: 1
  }

  handleTextInputChange = event => {
    this.setState({
      ...this.state,
      text: event.target.value
    })
  }

  handleLocationInputChange = event => {
    this.setState({
      ...this.state,
      location: event.target.value
    })
  }

  handlePasscodeInputChange = event => {
    this.setState({
      ...this.state,
      passcode: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.createClue(this.state, this.props.huntId);
  }

  render() {
    return (
      <div className="clue-input">
        <form onSubmit={this.handleSubmit}>
          <label id="clue-text-label">Text for Clue:</label>
          <textarea rows="8" cols="50" onChange={this.handleTextInputChange} value={this.state.text} />
          <br />
          <label id="clue-location-label">Location (be specific):</label>
          <input type="text" onChange={this.handleLocationInputChange} value={this.state.location} />
          <br />
          <label id="clue-passcode-label">Enter a passcode (optional):</label>
          <input type="text" onChange={this.handlePasscodeInputChange} value={this.state.passcode} />
          <br />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default ClueInput;
