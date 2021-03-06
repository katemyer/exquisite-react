import React, { useState } from 'react';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {
  //PROPS

  //STATES
  // varname of state,function to update = initial state data structure
  const [formFields, setFormFields] = useState({
    adj1: "",
    noun1: "",
    adv: "",
    verb: "",
    adj2: "",
    noun2: ""
  });

  //CALLBACKS
  // event handlers for each input
  const onAdjectiveChange1 = event => {
    console.log(`Adjective 1 Field updated ${event.target.value}`);
    setFormFields({
      ...formFields,
      adj1: event.target.value,
    });
  };

  const onNounChange1 = event => {
    console.log(`Noun 1 Field updated ${event.target.value}`);
    setFormFields({
      ...formFields,
      noun1: event.target.value,
    });
  };

  const onAdvChange = event => {
    console.log(`Adv Field updated ${event.target.value}`);
    setFormFields({
      ...formFields,
      adv: event.target.value,
    });
  };

  const onVerbChange = event => {
    console.log(`Verb Field updated ${event.target.value}`);
    setFormFields({
      ...formFields,
      verb: event.target.value,
    });
  };

  const onAdjectiveChange2 = event => {
    console.log(`Adjective 2 Field updated ${event.target.value}`);
    setFormFields({
      ...formFields,
      adj2: event.target.value,
    });
  };

  const onNounChange2 = event => {
    console.log(`Noun 2 Field updated ${event.target.value}`);
    setFormFields({
      ...formFields,
      noun2: event.target.value,
    });
  };

  //Submissions
  const onFormSubmit = (event) => {
    event.preventDefault(); 

    props.onAddPoem(formFields);

    //resets input fields
    setFormFields({
      adj1: "",
      noun1: "",
      adv: "",
      verb: "",
      adj2: "",
      noun2: ""
    });
  };

  //function to check if adj1 in formfields has data
  const hasAdjData1 = () => {
    if (formFields.adj1.length > 0) {
      //return true if there is data and false if there isn't
      return true
    } else {
      return false
    }
  }
  
  const hasNounData1 = () => {
    if (formFields.noun1.length > 0) {
      //return true if there is data and false if there isn't
      return true
    } else {
      return false
    }
  }
  const hasAdvData = () => {
    if (formFields.adv.length > 0) {
      //return true if there is data and false if there isn't
      return true
    } else {
      return false
    }
  }
  const hasVerbData = () => {
    if (formFields.verb.length > 0) {
      //return true if there is data and false if there isn't
      return true
    } else {
      return false
    }
  }
  const hasAdjData2 = () => {
    if (formFields.adj2.length > 0) {
      //return true if there is data and false if there isn't
      return true
    } else {
      return false
    }
  }
  const hasNounData2 = () => {
    if (formFields.noun2.length > 0) {
      //return true if there is data and false if there isn't
      return true
    } else {
      return false
    }
  }

  //HTML
  //https://www.w3schools.com/tags/ref_eventattributes.asp - onChange is an event attribute specific to form
  return (
    <div className="PlayerSubmissionForm" >
      <h3>Player Submission Form for Player #{ props.index }</h3>
                                          {/* prop specific to forms = attribute */}
      <form className="PlayerSubmissionForm__form" onSubmit={onFormSubmit}>

        <div className="PlayerSubmissionForm__poem-inputs">

        <label htmlFor="adj1">Adjective 1:</label>
        <input
          name="Adjective1"
          onChange={onAdjectiveChange1}
          value={formFields.adj1}
          type="text"
          className={hasAdjData1() ? "PlayerSubmissionFormt__input" : "PlayerSubmissionFormt__input--invalid"}
        />

        <label htmlFor="noun1">Noun 1:</label>
        <input
          name="Noun1"
          onChange={onNounChange1}
          value={formFields.noun1}
          type="text"
          className={hasNounData1() ? "PlayerSubmissionFormt__input" : "PlayerSubmissionFormt__input--invalid"}
        />

        <label htmlFor="adv">Adverb:</label>
        <input
          name="Adv"
          onChange={onAdvChange}
          value={formFields.adv}
          type="text"
          className={hasAdvData() ? "PlayerSubmissionFormt__input" : "PlayerSubmissionFormt__input--invalid"}
        />

        <label htmlFor="verb">Verb:</label>
        <input
          name="Verb"
          onChange={onVerbChange}
          value={formFields.verb}
          type="text"
          className={hasVerbData() ? "PlayerSubmissionFormt__input" : "PlayerSubmissionFormt__input--invalid"}
        />

        <label htmlFor="adj2">Adjective 2:</label>
        <input
          name="Adjective2"
          onChange={onAdjectiveChange2}
          value={formFields.adj2}
          type="text"
          className={hasAdjData2() ? "PlayerSubmissionFormt__input" : "PlayerSubmissionFormt__input--invalid"}
        />

        <label htmlFor="noun2">Noun 2:</label>
        <input
          name="Noun2"
          onChange={onNounChange2}
          value={formFields.noun2}
          type="text"
          className={hasNounData2() ? "PlayerSubmissionFormt__input" : "PlayerSubmissionFormt__input--invalid"}
        />
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}


export default PlayerSubmissionForm;
