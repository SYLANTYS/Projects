import Info from "./components/Info"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="main_content">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}