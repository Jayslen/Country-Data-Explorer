const API = 'https://restcountries.com/v3.1/all'
export const getCountryList = async () => {
  const res = await fetch(API)
  const json = await res.json()
  return json
}
