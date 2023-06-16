const API = 'https://restcountries.com/v3.1/all'
// const API_NAME_ENDPOINT = 'https://restcountries.com/v3.1/name/jordan'
export const getCountryList = async () => {
  const res = await fetch(API)
  const json = await res.json()
  return json
}
