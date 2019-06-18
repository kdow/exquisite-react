import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adjective1: "",
      noun1: "",
      adverb: "",
      verb: "",
      adjective2: "",
      noun2: ""
    };
  }

  onInputChange = (event) => {
    const updatedState = {};
  
    const field = event.target.name;
    const value = event.target.value;
  
    updatedState[field] = value;
    this.setState(updatedState);
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">

            The
            <input
              placeholder="adjective"
              value={this.state.adjective1}
              onChange={this.onInputChange}
              type="text" />
            <input
              placeholder="noun"
              value={this.state.noun1}
              onChange={this.onInputChange}
              type="text" />
            <input
              placeholder="adverb"
              value={this.state.adverb}
              onChange={this.onInputChange}
              type="text" />
            <input
              placeholder="verb"
              value={this.state.verb}
              onChange={this.onInputChange}
              type="text" />
            the
            <input
              placeholder="adjective"
              value={this.state.adjective2}
              onChange={this.onInputChange}
              type="text" />
            <input
              placeholder="noun"
              value={this.state.noun2}
              onChange={this.onInputChange}
              type="text" />
            .
          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
