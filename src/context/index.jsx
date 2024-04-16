import { createContext, useState } from 'react'

export const GlobalContext = createContext(null)

export default function GlobalState({ children }) {
   const [language, setLanguage] = useState('fr')
   const [showNav, setShowNav] = useState(false)

   function handleLanguageChange() {
      if (language === 'fr') {
         setShowNav(false)
         setLanguage('en')
      } else {
         setShowNav(false)
         setLanguage('fr')
      }
   }

   return (
      <GlobalContext.Provider
         value={{
            language,
            setLanguage,
            handleLanguageChange,
            showNav,
            setShowNav,
         }}
      >
         {children}
      </GlobalContext.Provider>
   )
}
