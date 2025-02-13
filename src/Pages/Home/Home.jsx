// import React from 'react'

import Footer from "../../layout/Footer"
import Analysis from "../Analysis/Analysis"
import Banner from "../Banner/Banner"
import Carusel from "../Carusel/Carusel"
import Development from "../Development/Development"
import FeedbackClients from "../FeedbackClients/FeedbackClients"
import TargetAudience from "../TargetAudience/TargetAudience"
// import FeedbackClients from "../FeedbackClients/FeedbackClients"

function Home() {
  return (
    <div className=" flex flex-col items-center w-full">
      <Banner />
      <Carusel />
      <Development />
      <Analysis />
      <FeedbackClients />
      <TargetAudience />

    </div>
  )
}

export default Home
