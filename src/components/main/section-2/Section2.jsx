import { useState } from 'react'
import './Section2.css'
import sectionImg from '../../../assets/images/section-2-img.png'

function Section2() {

  return (
    <>
     <section style={{margin:"0 auto"}}>
      <h2 style={{textAlign:"center", marginTop:"72px", marginBottom:"39px", fontSize:"44px", fontWeight:"600", borderTop:"3px solid silver", width:"884px", margin:"0 auto", padding:"50px 0px 0px 0px"}}>How the app works</h2>
      <div style={{display:"flex", alignItems:"center", justifyContent:"center", gap:"50px"}} className="bobo">
      <div className="left">
       <img src={sectionImg} alt="" />
      </div>

        <div className="right">
          <p style={{fontFamily:'"Montserra", sans-serif', fontWeight:"700", fontSize:"24px", color:" #FA4A0C"}}>Create an account</p>
          <h3 style={{fontFamily:'"Montserra", sans-serif', fontWeight:"700", fontSize:"40px", lineHeight:"57px", width:"561px", color:"#252B42"}}>Create/login to an existing
          account to get started</h3>
          <p style={{fontFamily:'"Montserra", sans-serif', fontWeight:"500", fontSize:"24px", color:"#737373", lineHeight:"38px", width:"467px"}}>An account is created with your email
          and a desired password</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default Section2