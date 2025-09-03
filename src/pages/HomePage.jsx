import React from 'react'
import HeroSection from '../components/HeroSection'
import Features from '../components/Features'
import BlogPosts from '../components/BlogPosts'
import HomeResources from '../components/homeComponents/HomeResources'
import Review from '../components/homeComponents/Review'

const HomePage = () => {
  return (
    <div className='font-inter'>
      <HeroSection />
      <Features />
      <BlogPosts />
      <HomeResources />
      <Review />
      </div>
  )
}

export default HomePage