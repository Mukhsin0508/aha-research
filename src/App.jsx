import { Route, Routes } from "react-router-dom"
import Footer from "./layout/Footer"
import Navbar from "./layout/Navbar"
import Home from "./Pages/Home/Home"
import Aos from "aos"
import 'aos/dist/aos.css'; 
import ServiceDetail from "./Pages/ServiceDetail"


function App() {
  Aos.init({
    duration: 1000
  })

  return (
    <div className=" w-full  bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/service/:id" element={<ServiceDetail />}/>
      </Routes>

      <Footer />

    </div>
  )
}

export default App
