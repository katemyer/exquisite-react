import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = (props ) => {
  // PROPS


  // Helper Functions/Variables
  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(" ");

  //STATES
  const [poemList, setPoemList] = useState([]);

  //CALLBACKS
  //create poem list here to pass down to finalpoem
  const onAddPoem = (poem) => {
    const newPoemList = [...poemList];

    newPoemList.push(poem);
    //console.log(newPoemList);

    setPoemList(newPoemList);
  }


  // HTML: This is the html gets injected to  <Game />
  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>

      <RecentSubmission 
        // PROPS
        //recentPoem={recentPoem}
        recentPoem={poemList[poemList.length - 1]}
        
        
      
      />
        
      <PlayerSubmissionForm 
        // PROPS
        //{this.state.submissions.length + 1}
        index= "1" 
        //sendSubmission={ this.addPlayerSubmission }
        onAddPoem={onAddPoem}
      />
      
      <FinalPoem 
        // PROPS
        poemList={poemList}
      
      />

    </div>
  );
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
