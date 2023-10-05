'use client'
import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import ProductDescription from './ProductDescription'
import CuratedCollection from './CuratedCollection'
import Hero from './Hero'
import AOS from 'aos'
import 'aos/dist/aos.css';
import LatestProduct from './LatestProduct'

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in milliseconds
      easing: 'ease-in-out-sine', // default easing for AOS animations
      once: false, // whether animation should happen only once
      anchorPlacement: 'top-center' // defines which position of the element regarding the browser window should trigger the animation
  });
  }, []);
  
  return (
    <div>

    
<div data-aos="fade-up">
  <Hero/>
</div>

<div data-aos="fade-in" data-aos-delay="200">
  <CuratedCollection/>
</div>

<div>
  <LatestProduct/>
</div>

<div data-aos="slide-up" data-aos-delay="400">
  <ProductDescription/>
  </div>
      <Footer/>
        </div>
  )
}

export default HomePage