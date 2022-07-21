import React from 'react'
import Buttons from './Buttons'
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
  console.log(correctID)

  function selectButton(id) {
    console.log(id)
    setAnswersArray(oldSelect => 
      oldSelect.map(answer => {
        return (
          {...answer, isCorrect: answer.isCorrect=false},
          {...answer, isFalse: answer.isFalse=false},
          id === correctID && answer.id === id ?
          {...answer, isCorrect: answer.isCorrect=true} :
          answer.id === id ? 
          {...answer, isFalse: answer.isFalse=true} :
          answer
        )
      }


        // return (
        //   {...answer, isSelected: answer.isSelected=false},
        //   answer.id === id ? 
        //   {...answer, isSelected: !answer.isSelected} :
        //   answer
        //   )
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
