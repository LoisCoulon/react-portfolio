import { NavLink } from 'react-router-dom'
import {
   FaBars,
   FaEnvelope,
   FaGithub,
   FaHome,
   FaLinkedin,
   FaSuitcase,
   FaUser,
   FaWindowClose,
} from 'react-icons/fa'
import frenchFlag from '../../assets/images/frenchFlag.png'
import usaFlag from '../../assets/images/usaFlag.jpg'
import { useContext } from 'react'
import { GlobalContext } from '../../context'
import logo from '../../assets/images/LC-light.png'

export default function Sidebar() {
   const { language, setLanguage, handleLanguageChange, showNav, setShowNav } =
      useContext(GlobalContext)

   return (
      <div className="nav-bar">
         <div
            className={showNav ? 'flags mobile-show' : 'flags'}
            title="Select your language preference"
         >
            <img
               onClick={language === 'en' ? handleLanguageChange : null}
               src={frenchFlag}
               alt="french flag"
               title="Voir la page en français"
            />
            <img
               onClick={language === 'fr' ? handleLanguageChange : null}
               src={usaFlag}
               alt="american flag"
               title="See the page in english"
            />
         </div>
         <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink onClick={() => setShowNav(false)} to="/">
               <FaHome color="#4d4d4e" />
            </NavLink>
            <NavLink
               onClick={() => setShowNav(false)}
               to="/about"
               className="about-link"
            >
               <FaUser color="#4d4d4e" />
            </NavLink>
            <NavLink
               onClick={() => setShowNav(false)}
               to="/portfolio"
               className="portfolio-link"
            >
               <FaSuitcase color="#4d4d4e" />
            </NavLink>
            <NavLink
               onClick={() => setShowNav(false)}
               to="/contact"
               className="contact-link"
            >
               <FaEnvelope color="#4d4d4e" />
            </NavLink>
            <FaWindowClose
               className="close-icon"
               color="#ffd700"
               size="2.5rem"
               onClick={() => setShowNav(false)}
            />
         </nav>
         <ul>
            <li>
               <a
                  href="https://www.linkedin.com/in/lo%C3%AFs-coulon/"
                  rel="noref"
               >
                  <FaLinkedin color="#4d4d4e" />
               </a>
            </li>
            <li>
               <a href="https://github.com/LoisCoulon" rel="noref">
                  <FaGithub color="#4d4d4e" />
               </a>
            </li>
         </ul>
         <div className="top-nav">
            <NavLink to="/">
               <img src={logo} alt="logo" />
            </NavLink>

            <FaBars
               onClick={() => setShowNav(true)}
               color="#ffd700"
               size="3rem"
               className="hamburger-icon"
            />
         </div>
      </div>
   )
}
