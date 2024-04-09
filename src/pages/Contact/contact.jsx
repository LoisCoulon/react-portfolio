import Loader from 'react-loaders'
import AnimatedLetters from '../../components/AnimatedLetters/animatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

export default function Contact() {
   const [letterClass, setLetterClass] = useState('text-animate')
   const refForm = useRef()

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
               alert('Message successfully sent!')
               window.location.reload(false)
            },
            () => {
               alert('Failed to send the message, please try again')
            }
         )
   }

   return (
      <>
         <div className="container contact-page">
            <div className="text-zone">
               <h1>
                  <AnimatedLetters
                     strArray={[
                        'C',
                        'o',
                        'n',
                        't',
                        'a',
                        'c',
                        't',
                        ' ',
                        'm',
                        'e',
                     ]}
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
