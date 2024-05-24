import Loader from 'react-loaders'
import AnimatedLetters from '../../components/AnimatedLetters/animatedLetters'
import { useContext, useEffect, useState } from 'react'
import portfolioData from './data.json'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context'

export default function Portfolio() {
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
         <img src="../../../" alt="" />
         <div className="container portfolio-page">
            <h1 className="page-title">
               <AnimatedLetters
                  letterClass={letterClass}
                  index={15}
                  strArray={'Portfolio'.split('')}
               />
            </h1>
            {language === 'en' ? (
               <h2>Study projects</h2>
            ) : (
               <h2>Projets d'études</h2>
            )}

            <div className="images-container">
               {language === 'en'
                  ? portfolioData.portfolioEn.map((portfolio, index) => (
                       <div key={index} className="images-card">
                          <img
                             src={portfolio.cover}
                             alt="portfolio"
                             className="portfolio-image"
                          />
                          <div className="image-text">
                             <h3 className="title">{portfolio.title}</h3>
                             <button className="portfolio-button">
                                <Link to={portfolio.url}>
                                   {' '}
                                   Lien vers le projet
                                </Link>
                             </button>
                             <div className="description">
                                <p>{portfolio.description}</p>
                                <p>{portfolio.technos}</p>
                             </div>
                          </div>
                       </div>
                    ))
                  : portfolioData.portfolioFr.map((portfolio, index) => (
                       <div key={index} className="images-card">
                          <img
                             src={portfolio.cover}
                             alt="portfolio"
                             className="portfolio-image"
                          />
                          <div className="image-text">
                             <h3 className="title">{portfolio.title}</h3>
                             <button className="portfolio-button">
                                <Link to={portfolio.url}>
                                   {' '}
                                   Lien vers le projet
                                </Link>
                             </button>
                             <div className="description">
                                <p>{portfolio.description}</p>
                                <p>{portfolio.technos}</p>
                             </div>
                          </div>
                       </div>
                    ))}
            </div>
         </div>
         <Loader type="pacman" />
      </>
   )
}
