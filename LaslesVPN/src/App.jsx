import Feature from "./components/Features/Features.jsx"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Info from "./components/Info/Info"
import Features from "./components/Features/Features.jsx"
import Plan from "./components/Plan/Plan.jsx"
import Global from "./components/Global/Global.jsx"
import Reviews from "./Reviews/Reviews.jsx"


function App() {

  return (
    <div>
      <Header />
      <Hero />
      {/* <Info /> */}
      <Features />
      <Plan />
      <Global />
      <Reviews />
    </div>
  )
}

export default App
