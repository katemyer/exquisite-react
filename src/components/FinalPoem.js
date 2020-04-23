import React from 'react';
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
        <li key={i}> 
          The {poem.adj1} {poem.noun1} {poem.adv} {poem.verb} the {poem.adj2} {poem.noun2}.
        </li>
      );
    });
  
    console.log(poemsHtml)

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        

      </section>
      <div> 
       <ul className="student-collection">{poemsHtml}</ul>
      </div>
      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>
    </div>
  );
}

export default FinalPoem;
