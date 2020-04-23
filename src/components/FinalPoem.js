import React, { useState } from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {
  // PROPS
  //  <FinalPoem 
  //   // PROPS
  //   poemList={poemList}
  //  callback={call}
  // />
  // props.poemList
  // props.callback

    const poemsHtml = props.poemList.map((poem, i) => {
      return (
        <p> 
          The {poem.adj1} {poem.noun1} {poem.adv} {poem.verb} the {poem.adj2} {poem.noun2}.
        </p>
      );
    });
  
    console.log(poemsHtml)

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        

      </section>
      <div> 
       {/* <div className="poems_list">{showFinalPoem ? poemsHtml : ""}</div>  */}
      {props.showFinalPoem && (<div className="poems_list">{poemsHtml}</div>) }
      </div>
      <div className="FinalPoem__reveal-btn-container">
        {/* input type properties: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/button */}
        <input type="button" onClick={props.onFinalPoemButtonClick} value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>
    </div>
  );
}

export default FinalPoem;
