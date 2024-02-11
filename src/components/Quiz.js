import React, { useState } from 'react';
import { QuizData } from '../Data/QuizData';
import Results from './Results';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const changeQuestion = (next = true) => {
    updateScore();
    if (next) {
      if (currentQuestion < QuizData.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setClickedOption(0);
      } else {
        setShowResult(true);
      }
    } else {
      if (currentQuestion > 0) {
        setCurrentQuestion(currentQuestion - 1);
        setClickedOption(0);
      }
    }
  };

  const updateScore = () => {
    if (clickedOption === QuizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setClickedOption(0);
    setScore(0);
  };

  return (
    <div className='MainQuestion'>
      <div className='QuestionPage'>
        {showResult ? (
          <Results score={score} totalScore={QuizData.length} tryAgain={resetAll} />
        ) : (
          <>
            <div className='Questions'>
              <div className='ques'>
                <span id='question-number'>{currentQuestion + 1}. </span>
                <span id='question-txt'>{QuizData[currentQuestion].question}</span>
              </div>
            </div>
            <div className='opts'>
  {QuizData[currentQuestion].options.map((option, i) => {
    return (
      <button
        className={`option-btn ${clickedOption === i + 1 ? 'checked' : ''}`}
        key={i}
        onClick={() => setClickedOption(i + 1)}
      >
        <span className={`dot ${clickedOption === i + 1 ? 'show-dot' : ''}`}></span>
        {option}
      </button>
    );
  })}
</div>
            <div className='btns'>
              <input type='button' value='Previous' id='prev-button' onClick={() => changeQuestion(false)} />
              <input type='button' value='Next' id='next-button' onClick={() => changeQuestion()} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
