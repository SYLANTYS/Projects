import { useState } from "react"
import Header from "./components/Header"
import Meme from "./components/Meme"

export default function App() {

  const [darkMode, setDarkMode] = useState(false)

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <div>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Meme darkMode={darkMode} />
    </div>
  )
}
