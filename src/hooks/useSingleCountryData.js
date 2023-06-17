import { useEffect, useState } from 'react'
import { getCountry } from '../service/getSingleCountry'

export function useCountryData () {
  const [data, setData] = useState()
  const [name, setName] = useState('')
  const updateName = (name) => {
    setName(name)
  }
  useEffect(() => {
    if (name === '') {
      setData(null)
      return
    }
    getCountry({ countryName: name }).then((json) => setData(json))
  }, [name])


  const mappedCountry = data?.map((country) => {
    return {
      name: country.name.common,
      nativeName: country.nativeName,
      population: country.population,
      region: country.region,
      subregion: country.subregion,
      capital: country.capital[0],
      topLevelDomain: country.tld[0],
      currency: country.currencies,
      languages: country.languages,
      borders: country.borders,
      flag : country.flags.png,
      imageAlt : country.flags.alt
    }
  })

  return { data:mappedCountry , updateName }
}
