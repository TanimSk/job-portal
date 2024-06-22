import React from 'react'
import HeroHome from './HeroHome.jsx/HeroHome'
import AboutUs from './AboutUs/AboutUs'
import PostJobs from './PostJobs/PostJobs'
import Card from './Card/Card'
const LandingPAge = () => {
  return (
    <div className="space-y-10" >
      <HeroHome/>
      <Card/>
      <PostJobs/>
      <AboutUs/>
    </div>
  )
}

export default LandingPAge