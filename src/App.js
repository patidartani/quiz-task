import React from 'react'
import "./App.css"
import { Routes, Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import Quiz from './components/Quiz'

const App = () => {
  return (
    <div className='main'>
       <Routes>
        <Route path='/' element={<Welcome/>} />
        <Route path='/quiz' element={<Quiz />} />
       </Routes>
    </div>
  )
}

export default App