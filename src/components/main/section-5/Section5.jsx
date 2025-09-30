import { useState } from 'react'
import './Section5.css'
import sectionImg from '../../../assets/backgrounds/section-5-bg.png'

function Section5() {

  return (
    <>
     <section className='section-5'>
      <main>
        <h1>Download the app now.</h1>
        <p>
          Available on your favorite store. Start your premium experience now
        </p>
        <div className="btn-container">
          <a
            href="https://youtu.be/VOjTicBBGps?si=mOA2vUoH-x54KOUf"
            target="_blank"
            className="btn playstore"
            >Playstore</a
          >
          <a
            href="https://youtu.be/88ZWvQ6Sj4w?si=VotoZ6N5rljaMTx5"
            target="_blank"
            className="btn appstore"
            >App store</a
          >
        </div>
      </main>
    </section>
    </>
  )
}

export default Section5