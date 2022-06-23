import Navbar from "./components/Navbar"
import Main from "./components/Main"
import data from "./data.js"

export default function App() {
  const places = data.map(item => 
      <Main 
        key={item.id}
        {...item}
      />
    )

  return (
    <div>
      <Navbar />
      {places}
    </div>
  )
}
