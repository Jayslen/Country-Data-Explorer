import { useEffect, useMemo, useState } from 'react'
import { getCountryList } from '../service/getCountries.js'

function useGetData () {
  const [countries, setCountries] = useState()
  const [value, setValue] = useState('')
  const [region, setRegion] = useState('All')

  const updateValue = (newValue) => {
    setValue(newValue)
  }

  const updateRegion = (newRegion) => {
    setRegion(newRegion)
  }

  useEffect(() => {
    getCountryList()
      .then((data) => setCountries(data))
      .catch((e) => setCountries('error'))
  }, [])

  const list = countries
  const mappedList = list?.map((country) => {
    return {
      name: country.name.common,
      flag: country.flags.png,
      population: country.population,
      region: country.region,
      capital: country.capital,
      flagAlt: country.flags.alt
    }
  })

  //   passing the filter data with the input value and the regions
  const filter = useMemo(() => {
    return mappedList?.filter((item) => {
      if (region === 'All') {
        return item.name.toLowerCase().includes(value.toLowerCase())
      } else {
        return item.region === region && item.name.toLowerCase().includes(value.toLowerCase())
      }
    })
  }, [value, region])

  // const filter = mappedList?.filter((item) => {
  //   console.log('render filter')
  //   if (region === 'All') {
  //     return item.name.toLowerCase().includes(value.toLowerCase())
  //   } else {
  //     return item.region === region && item.name.toLowerCase().includes(value.toLowerCase())
  //   }
  // })
  return { countries: filter, updateValue, updateRegion }
}
export default useGetData
