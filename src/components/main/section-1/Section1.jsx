import { useState } from 'react'
import './Section1.css'
import section1Background from '../../../assets/backgrounds/section-1-bg.png'
import section1Img from '../../../assets/images/section-1-img.png'

function Section1() {

  return (
    <>
    <section className='section-1'>
  <h3>Food app</h3>
  <h1>Why stay hungry when <br/> you can order form Bella Onojie</h1>
  <p>Download the bella onoje’s food app now on</p>
  <div className="section-1__buttons">
    <button className='playstore--btn'>Playstore</button>
    <button className='appstore--btn'>App store</button>
  </div>


  <img className='section-1--img' src={section1Img} alt="section-1--img" />
    </section>
    </>
  )
}

export default Section1