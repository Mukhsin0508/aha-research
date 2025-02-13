import { Route, Routes } from "react-router-dom"
import Footer from "./layout/Footer"
import Navbar from "./layout/Navbar"
import Home from "./Pages/Home/Home"
import AnalysisDeteil from "./Pages/Analysis/AnalysisDeteil/AnalysisDeteil"


function App() {

  return (
    <div className=" w-full  bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="analysdeteil" element={<AnalysisDeteil />}/>
      </Routes>

      <Footer />

    </div>
  )
}

export default App
