import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adj1: "",
      noun1: "",
      adv: "",
      verb: "",
      adj2: "",
      noun2: ""
    };
  }

  addSubmission = (event) => {
    event.preventDefault();

    const submission = this.state;
    this.props.addSubmissionCallback(submission)
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

        <form className="PlayerSubmissionForm__form" onSubmit={this.addSubmission} >

          <div className="PlayerSubmissionForm__poem-inputs">

            The
            <input
              name="adj1"            
              placeholder="adjective"
              value={this.state.adj1}
              onChange={this.onInputChange}
              type="text" />
            <input
              name="noun1"
              placeholder="noun"
              value={this.state.noun1}
              onChange={this.onInputChange}
              type="text" />
            <input
              name="adv"
              placeholder="adverb"
              value={this.state.adv}
              onChange={this.onInputChange}
              type="text" />
            <input
              name="verb"
              placeholder="verb"
              value={this.state.verb}
              onChange={this.onInputChange}
              type="text" />
            the
            <input
            name="adj2"
              placeholder="adjective"
              value={this.state.adj2}
              onChange={this.onInputChange}
              type="text" />
            <input
            name="noun2"
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


PlayerSubmissionForm.propTypes = {
  addSubmissionCallback: PropTypes.func.isRequired,
};

export default PlayerSubmissionForm;
