import Loader from 'react-loaders'
import AnimatedLetters from '../../components/AnimatedLetters/animatedLetters'
import { useContext, useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { GlobalContext } from '../../context'

export default function Contact() {
   const [letterClass, setLetterClass] = useState('text-animate')
   const refForm = useRef()
   const { language, setLanguage, handleLanguageChange } =
      useContext(GlobalContext)

   useEffect(() => {
      setTimeout(() => {
         setLetterClass('text-animate-hover')
      }, 3000)
   }, [])

   function sendEmail(e) {
      e.preventDefault()
      console.log(refForm.current)
      emailjs
         .sendForm('service_o6bmw5e', 'template_47imf2p', refForm.current, {
            publicKey: 'kMvrKmPAsvXOqpmsH',
         })
         .then(
            () => {
               if (language === 'en') {
                  alert('Message successfully sent!')
               } else {
                  alert('Message envoyé avec succès!')
               }

               window.location.reload(false)
            },
            () => {
               if (language === 'en') {
                  alert('Failed to send the message, please try again')
               } else {
                  alert("L'envoi du message a échoué. Veuillez réessayer")
               }
            }
         )
   }

   return (
      <>
         <div className="container contact-page">
            {language === 'en' ? (
               <div className="text-zone">
                  <h1>
                     <AnimatedLetters
                        strArray={'Contact me'.split('')}
                        letterClass={letterClass}
                        index={15}
                     />
                  </h1>
                  <p>
                     I'm interested in all kind of opportunities : freelance,
                     permanent/temporary contract. For any request or additional
                     information, you can contact me using the form below.
                  </p>
                  <div className="contact-form">
                     <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                           <li className="half">
                              <input
                                 type="text"
                                 name="name"
                                 placeholder="Name / Company"
                                 required
                              />
                           </li>
                           <li className="half">
                              <input
                                 type="email"
                                 name="email"
                                 placeholder="Email"
                                 required
                              />
                           </li>
                           <li>
                              <input
                                 placeholder="Subject"
                                 type="text"
                                 name="subject"
                                 required
                              />
                           </li>
                           <li>
                              <textarea
                                 name="message"
                                 cols="30"
                                 rows="5"
                                 placeholder="Please type your message here"
                                 required
                              ></textarea>
                           </li>
                           <li>
                              <input
                                 type="submit"
                                 className="flat-button"
                                 value="SEND"
                              />
                           </li>
                        </ul>
                     </form>
                  </div>
               </div>
            ) : (
               <div className="text-zone">
                  <h1>
                     <AnimatedLetters
                        strArray={'Contactez moi'.split('')}
                        letterClass={letterClass}
                        index={15}
                     />
                  </h1>
                  <p>
                     Je suis ouvert à toutes opportunités : freelance / CDI /
                     CDD. Pour toute demande ou informations complémentaires,
                     vous pouvez utiliser le formulaire de contact ci-dessous.
                  </p>
                  <div className="contact-form">
                     <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                           <li className="half">
                              <input
                                 type="text"
                                 name="name"
                                 placeholder="Nom / Entreprise"
                                 required
                              />
                           </li>
                           <li className="half">
                              <input
                                 type="email"
                                 name="email"
                                 placeholder="Email"
                                 required
                              />
                           </li>
                           <li>
                              <input
                                 placeholder="Sujet"
                                 type="text"
                                 name="subject"
                                 required
                              />
                           </li>
                           <li>
                              <textarea
                                 name="message"
                                 cols="30"
                                 rows="5"
                                 placeholder="Veuillez entrer votre message ici"
                                 required
                              ></textarea>
                           </li>
                           <li>
                              <input
                                 type="submit"
                                 className="flat-button"
                                 value="ENVOYER"
                              />
                           </li>
                        </ul>
                     </form>
                  </div>
               </div>
            )}
            <div className="info-map">
               Loïs Coulon <br /> Toulouse, France
               <br />
               <span>coulonlois@gmail.com</span>
            </div>
            <div className="map-wrapper">
               <MapContainer center={[43.604349, 1.443441]} zoom={13}>
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={[43.604349, 1.443441]}>
                     <Popup>Let's have a coffee around here &#128516; </Popup>
                  </Marker>
               </MapContainer>
            </div>
         </div>
         <Loader type="pacman" />
      </>
   )
}
