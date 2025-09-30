import { useState } from 'react'
import './Section4.css'
import sectionImg from '../../../assets/images/section-4-img.png'

function Section4() {

  return (
    <>
     <section>
      <div style={{display:"flex", alignItems:"center", justifyContent:"center", gap:"50px"}} className="bobo">
      <div className="left">
       <img src={sectionImg} alt="" />
      </div>

      <div className="right">
          <p style={{fontFamily:'"Montserra", sans-serif', fontWeight:"700", fontSize:"24px", color:" #FA4A0C"}}>Checkout</p>
          <h3 style={{fontFamily:'"Montserra", sans-serif', fontWeight:"700", fontSize:"40px", lineHeight:"57px", width:"489px", color:"#252B42"}}>When you done check out
          and get it delivered.</h3>
          <p style={{fontFamily:'"Montserra", sans-serif', fontWeight:"500", fontSize:"24px", color:"#737373", lineHeight:"38px", width:"460px"}}>When you done check out and get it 
          delivered with ease.</p>
        </div>

      </div>
    </section>
    </>
  )
}

export default Section4