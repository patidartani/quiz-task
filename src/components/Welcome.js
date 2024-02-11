import React from 'react'
import { Link } from 'react-router-dom';


const Welcome = () => {
  return (
       <div className='WelcomeScreen'>
          <h1>Welcome to the Quiz App!</h1>
    <Link to='/quiz'>
        <button>Start Quiz</button>
      </Link>
       </div>
  )
}

export default Welcome