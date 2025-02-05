import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      submissionList: [],
      playerNum: 1,
      complete: false,
      recentSubmission: ''
    }
  }

  addSubmission = (submission) => {
    const submissionList = [...this.state.submissionList]
    const recent = `The ${submission.adj1} ${submission.noun1} ${submission.adv} ${submission.verb} the ${submission.adj2} ${submission.noun2}.`
    submissionList.push(recent);
    const newPlayerNum = this.state.playerNum + 1;

    this.setState({ 
      submissionList, 
      playerNum: newPlayerNum,
      recentSubmission: recent
    });
  }

  onDisplayPoem = () => {
    this.setState({complete: true})
  }

  render() {

    const exampleFormat = FIELDS.map((field) => {
      if (field.key) {
        return field.placeholder;
      } else {
        return field;
      }
    }).join(" ");

    return (
      <div className="Game">
        <h2>Game</h2>

        <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

        <p>Please follow the following format for your poetry submission:</p>

        <p className="Game__format-example">
          { exampleFormat }
        </p>

        {
          !this.state.complete &&   
          <RecentSubmission recentSubmission={this.state.recentSubmission} complete={this.state.complete}/>
        }

        {
          !this.state.complete &&         
          <PlayerSubmissionForm addSubmissionCallback={this.addSubmission} playerNum={this.state.playerNum} complete={this.state.complete}/>
        }

        <FinalPoem onDisplayPoem={this.onDisplayPoem} submissions={this.state.submissionList} complete={this.state.complete} />

      </div>
    );
  }
}

const FIELDS = [
  "The",
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  "the",
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  ".",
];

export default Game;
