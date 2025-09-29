import { useState } from 'react'
import './App.css'
import HeaderSection from './components/header/Header'
import Section1 from './components/main/section-1/Section1'
import Section2 from './components/main/section-2/Section2'
import Section3 from './components/main/section-3/Section3'
import Section4 from './components/main/section-4/Section4'
import Section5 from './components/main/section-5/Section5'
import FooterSection from './components/footer/Footer'

function App() {

  return (
    <>
    <HeaderSection></HeaderSection>

    <Section1></Section1>

    <Section2></Section2>

    <Section3></Section3>

    <Section4></Section4>

    <Section5></Section5>

    <FooterSection></FooterSection>
    </>
  )
}

export default App
