import { useEffect, useState } from 'react'
import { getCountry } from '../service/getSingleCountry'

export function useCountryData () {
  const [data, setData] = useState()
  const [name, setName] = useState('belgium')
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
      // nativeName: country.name.nativeName,
      population: country.population,
      region: country.region,
      subregion: country.subregion,
      capital: country.capital[0],
      topLevelDomain: country.tld[0],
      currency: Object.values(country.currencies)[0].name,
      languages: Object.values(country.languages).join(','),
      borders: country.borders,
      flag: country.flags.svg,
      imageAlt: country.flags.alt
    }
  })

  return { data: mappedCountry, updateName }
}