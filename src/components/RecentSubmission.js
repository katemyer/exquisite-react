import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {
  //Props


  //check if poem exists by checking the hash
  let poemHtml = '';
  if (typeof props.recentPoem !== "undefined" && props.recentPoem.hasOwnProperty('adj1')) { 
    //true, then display the recent submission
    poemHtml = `The ${props.recentPoem.adj1} ${props.recentPoem.noun1} ${props.recentPoem.adv} ${props.recentPoem.verb} the ${props.recentPoem.adj2} ${props.recentPoem.noun2}.`
  } 
  
//HTML
  return (
    <div className="RecentSubmission">
      
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{poemHtml}</p>
    </div>
  );
}

export default RecentSubmission;
