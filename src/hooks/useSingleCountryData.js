import { useEffect, useMemo, useState } from 'react'
import { getCountry } from '../service/getSingleCountry'

export function useCountryData ({ open }) {
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

  const mappedCountry = useMemo(() => {
    return data?.map((country) => {
      return {
        name: country.name.common,
        // nativeName: country.name.nativeName,
        population: country.population.toLocaleString(),
        region: country.region,
        subregion: country.subregion,
        capital: country.capital[0],
        topLevelDomain: country.tld[0],
        currency: Object.values(country.currencies)[0].name,
        languages: Object.values(country.languages).join(', '),
        borders: country.borders,
        flag: country.flags.svg,
        imageAlt: country.flags.alt
      }
    }, [open])
  })

  return { data: mappedCountry, updateName }
}
