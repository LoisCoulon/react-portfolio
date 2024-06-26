import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, HashRouter } from 'react-router-dom'
import Layout from './components/Layout/layout'
import About from './pages/About/about'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import './main.scss'
import Home from './pages/Home/home'
import Contact from './pages/Contact/contact'
import GlobalState from './context'
import Portfolio from './pages/Porfolio/portfolio'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <GlobalState>
            <Routes>
               <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="portfolio" element={<Portfolio />} />
               </Route>
            </Routes>
         </GlobalState>
      </BrowserRouter>
   </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
