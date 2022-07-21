import React from 'react'

export default function StartPage(props) {
  return (
    <div className='startPage'>
      <h3 className='start--title'>VideoGame Quizzical</h3>
      <p className='start--description'>Answer 5 video game trivia questions!</p>
      <button className='start--button' onClick={props.togglePage}>Start quiz</button>
    </div>
  )
}
