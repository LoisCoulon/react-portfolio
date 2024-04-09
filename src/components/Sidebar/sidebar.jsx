import { Link, NavLink } from 'react-router-dom'
import logolc from '../../assets/images/LC-light.png'
import {
   FaEnvelope,
   FaGithub,
   FaHome,
   FaLinkedin,
   FaUser,
} from 'react-icons/fa'

export default function Sidebar() {
   return (
      <div className="nav-bar">
         <Link className="logo" to="/">
            <img src={logolc} alt="logo" />
         </Link>
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
