import { useEffect, useState } from 'react'
import AnimatedLetters from '../../components/AnimatedLetters/animatedLetters'
import {
   FaAngular,
   FaCss3,
   FaGithub,
   FaHtml5,
   FaJsSquare,
   FaReact,
} from 'react-icons/fa'
import Loader from 'react-loaders'

export default function About() {
   const [letterClass, setLetterClass] = useState('text-animate')

   useEffect(() => {
      setTimeout(() => {
         setLetterClass('text-animate-hover')
      }, 3000)
   }, [])

   return (
      <>
         <div className="container about-page">
            <div className="text-zone">
               <h1>
                  <AnimatedLetters
                     letterClass={letterClass}
                     strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                     index={15}
                  />
               </h1>
               <p>Mes qualités, mes ambitions</p>
               <p>my soft skills</p>
               <p>Ce qui me défini</p>
            </div>
            <div className="stage-cube-cont">
               <div className="cubespinner">
                  <div className="face1">
                     <FaAngular color="#DD0031" />
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
                     <FaJsSquare color="#EFD81D" />
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
