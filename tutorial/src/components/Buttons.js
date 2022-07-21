import React from 'react'

export default function Buttons(props) {
  return (
    <button 
      className='quiz--button' 
      style={ 
        {backgroundColor: props.isCorrect? "#94D7A2" : props.isFalse? "#F8BCBC" : "",
        border: props.isCorrect || props.isFalse? "none" : ""} 
      }
      onClick={props.selectButton}
      >{props.ans}
    </button>
  )
}
