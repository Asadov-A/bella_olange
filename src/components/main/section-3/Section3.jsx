import { useState } from 'react'
import './Section3.css'
import sectionImg from '../../../assets/images/section-3-img.png'

function Section3() {

  return (
    <>
    <section>
      <div style={{display:"flex", alignItems:"center", justifyContent:"center", gap:"50px"}} className="bobo">
      <div className="right">
          <p style={{fontFamily:"Montserrat", fontWeight:"700", fontSize:"24px", color:" #FA4A0C"}}>Explore varieties</p>
          <h3 style={{fontFamily:"Montserrat", fontWeight:"700", fontSize:"40px", lineHeight:"57px", width:"480px", color:"#252B42"}}>Shop for your favorites
          meal as e dey hot.</h3>
          <p style={{fontFamily:"Montserrat", fontWeight:"500", fontSize:"24px", color:"#737373", lineHeight:"38px", width:"462px"}}>Shop for your favorite meals or drinks
          and enjoy while doing it.</p>
        </div>

      <div className="left">
       <img src={sectionImg} alt="" />
      </div>

      </div>
    </section>
    </>
  )
}

export default Section3