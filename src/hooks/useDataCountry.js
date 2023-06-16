import { useEffect, useState } from 'react'
import { getCountryList } from '../service/getCountries.js'

function useGetData ({ value, region }) {
  const [countries, setCountries] = useState()
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
      capital: country.capital
    }
  })
//   passing the filter data with the input value and the regions
  const filter = mappedList?.filter((item) => {
    if (region === 'All') {
      return item.name.toLowerCase().includes(value.toLowerCase())
    } else {
      return item.region === region && item.name.toLowerCase().includes(value.toLowerCase())
    }
  })
  return { countries: filter, setCountries }
}
export default useGetData
