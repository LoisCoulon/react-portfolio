import { createContext, useState } from 'react'

export const GlobalContext = createContext(null)

export default function GlobalState({ children }) {
   const [language, setLanguage] = useState('fr')

   function handleLanguageChange() {
      if (language === 'fr') {
         setLanguage('en')
      } else {
         setLanguage('fr')
      }
   }

   return (
      <GlobalContext.Provider
         value={{ language, setLanguage, handleLanguageChange }}
      >
         {children}
      </GlobalContext.Provider>
   )
}
