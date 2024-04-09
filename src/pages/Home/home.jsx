import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../../components/AnimatedLetters/animatedLetters'
import profile from '../../assets/images/profile.jpg'
import roundprofile from '../../assets/images/round-profile.png'
// import logo from '../../assets/images/LC-light.png'

export default function Home() {
   const [letterClass, setLetterClass] = useState('text-animate')
   const nameArray = [
      ' ',
      'L',
      'o',
      'ï',
      's',
      ' ',
      'C',
      'o',
      'u',
      'l',
      'o',
      'n',
   ]
   const jobArray = [
      'W',
      'e',
      'b',
      ' ',
      'd',
      'e',
      'v',
      'e',
      'l',
      'o',
      'p',
      'e',
      'r',
   ]

   useEffect(() => {
      setTimeout(() => {
         setLetterClass('text-animate-hover')
      }, 5000)
   }, [])

   return (
      <div className="container home-page">
         <div className="text-zone">
            <h1>
               <span className={`${letterClass}`}>H</span>
               <span className={`${letterClass} _11`}>i,</span>
               <br />
               <span className={`${letterClass} _12`}>I</span>
               <span className={`${letterClass} _13`}>'m</span>
               {/* <img src={logo} alt="developer" /> */}
               <AnimatedLetters
                  letterClass={letterClass}
                  strArray={nameArray}
                  index={14}
               />
               <br />
               <AnimatedLetters
                  letterClass={letterClass}
                  strArray={jobArray}
                  index={30}
               />
            </h1>
            <h2>Frontend Developer / Javascript / React</h2>
            <Link to="/contact" className="flat-button">
               Contact me
            </Link>
         </div>
         <div className="picture">
            <img src={roundprofile} alt="profile" />
         </div>
      </div>
   )
}
