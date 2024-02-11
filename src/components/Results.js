import React from 'react';

function Results  (props) {
  return (
    <div className='Results'>
     <h1>Quiz Results</h1>
      <div className="rslt">
      <h5> Your Score: {props.score} </h5> <h5>  Total Score: {props.totalScore}</h5>
      </div>
      <button className='restart' onClick={props.tryAgain}>Restart Quiz</button>
    </div>
  );
};

export default Results;
