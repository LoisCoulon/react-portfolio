import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../../components/AnimatedLetters/animatedLetters'
import roundprofile from '../../assets/images/round-profile.png'
import Loader from 'react-loaders'
import resume from '../../assets/pdf/resume-en.pdf'
import cv from '../../assets/pdf/resume-fr.pdf'
import { GlobalContext } from '../../context'

export default function Home() {
   const [letterClass, setLetterClass] = useState('text-animate')
   const { language, setLanguage, handleLanguageChange } =
      useContext(GlobalContext)
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
      <>
         {language === 'en' ? (
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
               <div className="resume">
                  You can download my resume{' '}
                  <a href={resume} download="LoisCoulon-front-end-developer">
                     Here
                  </a>
               </div>
            </div>
         ) : (
            <div className="container home-page">
               <div className="text-zone">
                  <h1>
                     <span className={`${letterClass}`}>H</span>
                     <span className={`${letterClass} _11`}>e</span>
                     <span className={`${letterClass} _12`}>y,</span>
                     <br />
                     <span className={`${letterClass} _13`}>J</span>
                     <span className={`${letterClass} _14`}>e&nbsp;</span>
                     <span className={`${letterClass} _15`}>s</span>
                     <span className={`${letterClass} _16`}>u</span>
                     <span className={`${letterClass} _17`}>i</span>
                     <span className={`${letterClass} _18`}>s</span>
                     <AnimatedLetters
                        letterClass={letterClass}
                        strArray={nameArray}
                        index={19}
                     />
                     <br />
                     <AnimatedLetters
                        letterClass={letterClass}
                        strArray={[
                           'D',
                           'é',
                           'v',
                           'e',
                           'l',
                           'o',
                           'p',
                           'p',
                           'e',
                           'u',
                           'r',
                           ' ',
                           'w',
                           'e',
                           'b',
                        ]}
                        index={30}
                     />
                  </h1>
                  <h2>Développeur front end / Javascript / React</h2>
                  <Link to="/contact" className="flat-button">
                     Contactez moi
                  </Link>
               </div>
               <div className="picture">
                  <img src={roundprofile} alt="profile" />
               </div>
               <div className="resume">
                  Vous pouvez télécharger mon CV{' '}
                  <a href={cv} download="LoisCoulon-front-end-developer">
                     ici
                  </a>
               </div>
            </div>
         )}
         <Loader type="pacman" />
      </>
   )
}
