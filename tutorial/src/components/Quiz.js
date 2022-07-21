import React from 'react'
import Questions from './Questions'
import { nanoid } from 'nanoid'

export default function Quiz(props) {
  console.log(props.quiz)

  const quizContent = props.quiz.map(item => 
    <Questions 
        key={nanoid()}
        {...item}
      />
  )

  return (
    <div className='quizPage'>
      {quizContent}
      <button 
        className='quiz--check'
        onClick={props.counter}
        >Check answers
      </button>
    </div>
  )
}
