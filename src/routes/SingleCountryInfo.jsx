import { Borders, List } from '../components/fullpage/CountryDataLists'
import { Link } from 'react-router-dom'
import { Header } from '../components/HeroHeader'
import { useContext, useEffect, useState } from 'react'
import { getCountry } from '../service/getSingleCountry'
import { Loading } from '../components/Loading'
import { countryContext } from '../context/CountryContext'

export function CountryInfo() {
  const [country, setCountry] = useState()
  const { countryName } = useContext(countryContext)
  useEffect(() => {
    getCountry({ countryName: countryName }).then((data) => setCountry(data[0]))
  }, [])
  const mappedCountry = country
    ? {
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
        imageAlt: country.flags.alt,
      }
    : undefined
  return (
    <>
      <Header />
      <main className="h-[90vh] grid place-content-center">
        {country ? (
          <section
            className="flex flex-col md:flex-row md:justify-center md:gap-20"
            key={mappedCountry.name}
          >
            <div className="max-w-[400px]">
              <Link to={'/'}>
                <div className="px-4 py-2 cursor-pointer transition-all hover:brightness-75">
                  Go back
                </div>
              </Link>
              <img
                src={mappedCountry.flag}
                alt={mappedCountry.imageAlt}
                className="w-full"
              />
            </div>

            <div className="max-w-[400px] md:w-[500px]">
              <h2 className="text-3xl font-bold md:mb-3">
                {mappedCountry.name}
              </h2>
              <List data={mappedCountry} />
              <Borders data={mappedCountry} />
            </div>
          </section>
        ) : (
          <Loading />
        )}
      </main>
    </>
  )
}
