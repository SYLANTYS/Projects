import { useState, useEffect } from "react"
import StartPage from "./components/StartPage"
import Quiz from "./components/Quiz"

export default function App() {

  const [quiz, setQuiz] = useState({})
  const [counter, setCounter] = useState(0)

  function counterAPI() {
    setCounter(prevCount => prevCount+1);
  }

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=15&difficulty=medium&type=multiple")
      .then(res => res.json())
      .then(data => setQuiz(data.results))
  }, [counter])
 
  const [switchPage, setSwitchPage] = useState(false)

  function togglePage() {
    setSwitchPage(prevPage => !prevPage)
  }

  return (
    <div>
      {switchPage? <Quiz quiz={quiz} counter={counterAPI} /> : <StartPage togglePage={togglePage} /> }
    </div>
  )
}
