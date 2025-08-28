import React from 'react'
import HeroSection from '../components/HeroSection'
import Features from '../components/Features'
import BlogPosts from '../components/BlogPosts'
import HomeResources from '../components/homeComponents/HomeResources'

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Features />
      <BlogPosts />
      <HomeResources />
      </div>
  )
}

export default HomePage