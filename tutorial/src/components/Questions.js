import React from 'react'
import { nanoid } from 'nanoid'

export default function Questions(props) {

  const [answersArray, setAnswersArray] = React.useState(ButtonsList())

  function ButtonsList() {
    const newAnswersArray = []
    newAnswersArray.push(
      {ans: props.correct_answer, id: 1, isCorrect: false, isFalse: false},
      {ans: props.incorrect_answers[0], id: 2, isCorrect: false, isFalse: false},
      {ans: props.incorrect_answers[1], id: 3, isCorrect: false, isFalse: false},
      {ans: props.incorrect_answers[2], id: 4, isCorrect: false, isFalse: false}
    )

    let currentIndex = newAnswersArray.length,  randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [newAnswersArray[currentIndex], newAnswersArray[randomIndex]] = [
        newAnswersArray[randomIndex], newAnswersArray[currentIndex]];
    }

    return newAnswersArray
  }

  const correctID = 1

  function selectButton(id) {
    setAnswersArray(oldSelect => 
      oldSelect.map(answer => {
        return (
          {...answer, isFalse: answer.isFalse=false},
          
          answer.id === correctID ? 
          {...answer, isCorrect: answer.isCorrect=true}
          :
          answer,
          
          id === correctID && answer.id === id ?
          {...answer, isCorrect: answer.isCorrect=true} :
          answer.id === id ? 
          {...answer, isFalse: answer.isFalse=true} 
          :
          answer
        )
      }
    ))
  }

  const buttons = answersArray.map(ans => 
    <Buttons 
        key={nanoid()}
        {...ans}
        selectButton={() => selectButton(ans.id)}
      />
  )

  return (
    <div className='quiz--content'>
      <h3 
        className='quiz--question'>
        {props.question.replace(/&quot;/g,'"').replace(/&#039;/g,"'")}
      </h3>
      <div className='quiz--buttonFlex'>
        {buttons}
      </div>
      <hr></hr>
    </div>
  )
}

class Buttons extends React.Component {
  render() {
    return (
      <button 
        className='quiz--button' 
        style={ 
          {backgroundColor: this.props.isCorrect? "#94D7A2" : this.props.isFalse? "#F8BCBC" : "",
          border: this.props.isCorrect || this.props.isFalse? "none" : ""} 
        }
        onClick={this.props.selectButton}
        >{this.props.ans}
      </button>
    )
  }
}