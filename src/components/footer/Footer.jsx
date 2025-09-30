import { useState } from 'react'
import './Footer.css'
import webLogo from '../../assets/icons/logo.png'

function Footer() {

  return (
    <>
        <footer>
      <img src={webLogo} alt="" />
      <div className="socilas">
        <a className="socilas-btn" href="https://x.com/?lang=ru"
          ><i className="fa-brands fa-twitter"></i
        ></a>
        <a className="socilas-btn" href="https://www.facebook.com/?locale=ru_RU"
          ><i className="fa-brands fa-square-facebook"></i
        ></a>
        <a className="socilas-btn" href="https://www.instagram.com/"
          ><i className="fa-brands fa-square-instagram"></i
        ></a>
      </div>
      <p>Copywright 2020 Bella Onojie.com</p>
    </footer>
    </>
  )
}

export default Footer