import { useContext, useEffect, useState } from 'react'
import AnimatedLetters from '../../components/AnimatedLetters/animatedLetters'

import {
   FaAngular,
   FaCss3,
   FaGithub,
   FaHtml5,
   FaJsSquare,
   FaReact,
   FaWordpress,
} from 'react-icons/fa'
import Loader from 'react-loaders'
import { GlobalContext } from '../../context'

export default function About() {
   const [letterClass, setLetterClass] = useState('text-animate')
   const { language, setLanguage, handleLanguageChange } =
      useContext(GlobalContext)

   useEffect(() => {
      setTimeout(() => {
         setLetterClass('text-animate-hover')
      }, 3000)
   }, [])

   return (
      <>
         <div className="container about-page">
            {language === 'en' ? (
               <div className="text-zone">
                  <h1>
                     <AnimatedLetters
                        letterClass={letterClass}
                        strArray={'About me'.split('')}
                        index={15}
                     />
                  </h1>
                  <p>
                     After a successful reconversion in web development, I
                     managed to specialize my skills in front end development. I
                     have two years of cumulative professional experiences in
                     this field.{' '}
                  </p>
                  <p>
                     I would define myself as a calm and patient human being but
                     I can use my leadership when the situation needs it. I can
                     work independently and I also have good relational to
                     easily integrate a working team. Naturally curious, I like
                     discovering and progressing on new technologies.
                  </p>
                  <h2>My degrees</h2>
                  <p>
                     Profesional title in web development and web mobile (BTEC
                     HND equivalent)
                  </p>
                  <p>
                     Profesional title of application designer developer
                     (Bachelor's equivalent)
                  </p>
               </div>
            ) : (
               <div className="text-zone">
                  <h1>
                     <AnimatedLetters
                        letterClass={letterClass}
                        strArray={'A propos'.split('')}
                        index={15}
                     />
                  </h1>
                  <p>
                     Après une reconversion réussie dans le web en 2020, je me
                     suis spécialisé côté front end et dispose de 2 ans
                     d’expérience professionnelle cumulée dans ce domaine.
                  </p>
                  <p>
                     Je me définis comme quelqu'un de calme et patient mais je
                     sais faire preuve de leadership quand la situation se
                     présente. Je peux travailler en toute autonomie mais j'ai
                     également un bon relationnel et m'intègre facilement dans
                     une équipe. De nature curieuse, j'aime découvrir et
                     progresser sur de nouvelles technologies.
                  </p>
                  <h2>Mes diplomes</h2>
                  <p>
                     Titre professionnel de développeur web et web mobile (Bac+
                     2)
                  </p>
                  <p>
                     Titre professionnel de concepteur développeur
                     d'applications (Bac+ 3)
                  </p>
               </div>
            )}

            <div className="stage-cube-cont">
               <div className="cubespinner">
                  <div className="face1">
                     <FaJsSquare color="#EFD81D" />
                  </div>
                  <div className="face2">
                     <FaHtml5 color="#F06529" />
                  </div>
                  <div className="face3">
                     <FaCss3 color="#28A4D9" />
                  </div>
                  <div className="face4">
                     <FaReact color="#5ED4F4" />
                  </div>
                  <div className="face5">
                     <FaWordpress color="#000" />
                  </div>
                  <div className="face6">
                     <FaGithub color="#000" />
                  </div>
               </div>
            </div>
         </div>
         <Loader type="pacman" />
      </>
   )
}
