import { Borders, List } from '../components/fullpage/CountryDataLists'
import Mock from '../mocks/single-country.json'
import { Link } from 'react-router-dom'
import { Header } from '../components/HeroHeader'
import { useEffect, useState } from 'react'
import { getCountry } from '../service/getSingleCountry'
import { data } from 'autoprefixer'

export function CountryInfo() {
  const [country, setCountry] = useState([])
  useEffect(() => {
    getCountry({ countryName: 'spain' }).then((data) => setCountry(data))
  }, [])
  console.log(country)
  const mappedCountry = country?.map((item) => {
    return {
      name: item.name.common,
      population: item.population,
      region: item.region,
      subregion: item.subregion,
      capital: item.capital[0],
      topLevelDomain: item.tld,
      // currency: item.curren
      // languages: item.
    }
  })
  return (
    <>
      <Header />
      <section className="w-screen h-screen absolute grid place-content-center right-0 top-0 px-20">
        {country?.map((data) => {
          return (
            <div
              className="w-[90vw] h-auto flex flex-col mt-32 md:mt-0 md:flex-row md:justify-center md:gap-20 relative"
              key={data.name}
            >
              <figure className="max-w-[400px] relative">
                <img src={data.flag} alt={data.imageAlt} className="w-full" />
                <Link to={'/'}>
                  <div className="absolute -top-14 left-0 px-4 py-2 cursor-pointer transition-all hover:brightness-75">
                    Go back
                  </div>
                </Link>
              </figure>

              <div className="max-w-[400px] md:w-[500px]">
                <h2 className="text-3xl font-bold md:mb-3">{data.name}</h2>
                <List data={data} />
                <Borders data={data} />
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}
