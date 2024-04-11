import { Link, NavLink } from 'react-router-dom'
import {
   FaEnvelope,
   FaGithub,
   FaHome,
   FaLinkedin,
   FaUser,
} from 'react-icons/fa'
import frenchFlag from '../../assets/images/frenchFlag.png'
import usaFlag from '../../assets/images/usaFlag.jpg'
import { useContext } from 'react'
import { GlobalContext } from '../../context'

export default function Sidebar() {
   const { language, setLanguage, handleLanguageChange } =
      useContext(GlobalContext)

   return (
      <div className="nav-bar">
         <div className="flags" title="Select your language preference">
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
         <nav>
            <NavLink to="/">
               <FaHome color="#4d4d4e" />
            </NavLink>
            <NavLink to="/about" className="about-link">
               <FaUser color="#4d4d4e" />
            </NavLink>
            <NavLink to="/contact" className="contact-link">
               <FaEnvelope color="#4d4d4e" />
            </NavLink>
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
      </div>
   )
}
