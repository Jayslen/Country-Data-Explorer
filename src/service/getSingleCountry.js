const API_NAME_ENDPOINT = 'https://restcountries.com/v3.1/name/'
export const getCountry = async ({ countryName }) => {
  const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
  const data = await res.json()
  return data
}
