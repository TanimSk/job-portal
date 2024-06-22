import React from 'react'
import HeroHome from './HeroHome.jsx/HeroHome'
import FeaturedJobs from './FeaturedJobs/FeaturedJobs'
import AboutUs from './AboutUs/AboutUs'
import PostJobs from './PostJobs/PostJobs'
import Card from './Card/Card'

const LandingPAge = () => {
  return (
    <div className="space-y-3" >
      <HeroHome/>
      <Card/>
      <PostJobs/>
      <AboutUs/>
    </div>
  )
}

export default LandingPAge