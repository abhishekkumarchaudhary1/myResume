import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <h1 className='myName'>Abhishek Kumar Chaudhary</h1>
      <h5 className='summaryHeader'>Summary</h5>
      <p className='summary'>An aspiring job seeker in web development ready to use the respective skills and learn to work 
        towards the shared goal. 
      </p>
      <ul className="contacts">
        <li className="contInner">abhishek.chaudhary33@gmail.com</li>
        <li className="contInner">+91 9973964367, +91 9304595386</li>
        <li className="contInner">Noida, UP, India</li>
        <li className="contInner"><a href="https://www.linkedin.com/in/abhishek-kumar-chaudhary-516431164">LinkedIn</a></li>
        <li className="contInner"><a href="https://github.com/abhishekkumarchaudhary1">GitHub</a></li>
      </ul>
      <div className="para">

      <section className="card" id='lang'>
        <h4>LANGUAGES</h4>
        <br />
        <p>ENGLISH</p>
        <p className='italic'>Full Professional Proficiency</p>
        <br />
        <p>HINDI</p>
        <p className='italic'>Full Professional Proficiency</p>
        <br />
        <p>MAITHILI</p>
        <p className='italic'>Native or Bilingual Proficiency</p>
      </section>

      <section className="card" id='skills'>
        <h4>SKILLS</h4>
        <p className="skills">HTML5</p>
        <p className="skills">CSS3</p>
        <p className="skills">JAVASCRIPT</p>
        <p className="skills">REACT JS</p>
        <p className="skills">mySQL</p>
      </section>
      </div>


    </>
  )
}

export default App
