import useGetData from '../hooks/useDataCountry'
import useTheme from '../hooks/useTheme'
import { Header } from '../components/HeroHeader'
import { Filter } from '../components/RegionFilters'
import { Loading } from '../components/Loading'
import { Country } from '../components/CountryInfo'

export function HomePage() {
  const { countries, updateRegion, updateValue } = useGetData()
  const { changeTheme, elmColor, elmText, darkMode, bodyBg } = useTheme()

  // update the input value in order to filter
  const handleChange = (event) => {
    updateValue(event.target.value)
  }
  // update the region in order to filter
  const handleClick = (value) => {
    updateRegion(value)
  }
  // change theme
  const handleTheme = () => {
    changeTheme()
  }
  return (
    <>
      <Header
        elmColor={elmColor}
        handleTheme={handleTheme}
        elmText={elmText}
        darkMode={darkMode}
      />
      <main
        className="px-14 mt-6"
        style={{
          color: elmText,
        }}
      >
        <header className="flex flex-col gap-4 justify-between items-center md:gap-0 md:flex-row">
          <input
            type="text"
            placeholder="Search for a country"
            className="font-Nunito p-2 rounded-sm"
            style={{ backgroundColor: elmColor }}
            onChange={handleChange}
          />
          <Filter update={handleClick} color={elmColor} />
        </header>
        <section className="mt-6 w-full">
          {countries ? (
            <Country countries={countries} color={elmColor} />
          ) : (
            <Loading />
          )}
        </section>
      </main>
    </>
  )
}
