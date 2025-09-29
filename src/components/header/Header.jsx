import { useState } from 'react'
import './Header.css'
import webLogo from '../../assets/icons/logo.png'

function Header() {

  return (
    <>
    <header>
      <img src={webLogo} alt="web-logo" />

      <nav>
        <a href="#">Home</a>
        <a href="#">Product</a>
        <a href="#">Faq</a>
        <a href="#">Contact</a>
      </nav>
    </header>
    </>
  )
}

export default Header