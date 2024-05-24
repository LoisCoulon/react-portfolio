import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../../components/AnimatedLetters/animatedLetters'
import roundprofile from '../../assets/images/round-profile.jpg'
import Loader from 'react-loaders'
import resume from '../../assets/pdf/resume-en.pdf'
import cv from '../../assets/pdf/resume-fr.pdf'
import { GlobalContext } from '../../context'

export default function Home() {
   const [letterClass, setLetterClass] = useState('text-animate')
   const { language, setLanguage, handleLanguageChange } =
      useContext(GlobalContext)

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
                     <AnimatedLetters
                        letterClass={letterClass}
                        strArray={' Loïs'.split('')}
                        index={14}
                     />
                     <br />
                     <AnimatedLetters
                        letterClass={letterClass}
                        strArray={'Web developer'.split('')}
                        index={25}
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
                     <span className={`${letterClass}`}>B</span>
                     <span className={`${letterClass} _7`}>o</span>
                     <span className={`${letterClass} _8`}>n</span>
                     <span className={`${letterClass} _9`}>j</span>
                     <span className={`${letterClass} _10`}>o</span>
                     <span className={`${letterClass} _11`}>u</span>
                     <span className={`${letterClass} _12`}>r,</span>

                     <br />
                     <span className={`${letterClass} _13`}>J</span>
                     <span className={`${letterClass} _14`}>e&nbsp;</span>
                     <span className={`${letterClass} _15`}>s</span>
                     <span className={`${letterClass} _16`}>u</span>
                     <span className={`${letterClass} _17`}>i</span>
                     <span className={`${letterClass} _18`}>s</span>
                     <AnimatedLetters
                        letterClass={letterClass}
                        strArray={' Loïs'.split('')}
                        index={19}
                     />
                     <br />
                     <AnimatedLetters
                        letterClass={letterClass}
                        strArray={'Développeur web'.split('')}
                        index={25}
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
