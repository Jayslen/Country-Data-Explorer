import { createContext, useState } from 'react'

export const countryContext = createContext()

export function CountryProvider({ children }) {
  const [countryName, setCountryName] = useState()
  console.log(countryName)
  return (
    <countryContext.Provider
      value={{
        countryName,
        setCountryName,
      }}
    >
      {children}
    </countryContext.Provider>
  )
}
