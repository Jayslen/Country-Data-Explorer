import useGetData from './hooks/useDataCountry'
import { useCountryData } from './hooks/useSingleCountryData'
import { Country } from './components/CountryInfo'
import { Filter } from './components/RegionFilters'
import { Loading } from './components/Loading'
import { useTheme } from './hooks/useTheme'
import { FullPage } from './components/FullPageCountry'
import { useState } from 'react'
import { Header } from './components/HeroHeader'

window.document.body.style.backgroundColor = '#202d36'
function App () {
  const { countries, updateRegion, updateValue } = useGetData()
  const { changeTheme, elmColor, elmText, darkMode,bodyBg } = useTheme()
  const { data, updateName } = useCountryData()
  const [open, setOpen] = useState(false)

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
  // getCountryName
  const getName = (name) => {
    updateName(name)
    setOpen(!open)
  }
  // goBack funtion
  const closeWindow = () => {
    setOpen(!open)
  }

  return (
    <>
  <Header elmColor={elmColor} handleTheme={handleTheme} elmText={elmText} darkMode={darkMode}/>
      <main className='px-14 mt-6' style={{ color: elmText , height:`${open ? '50vh' : 'full'}`, overflow: `${open ? 'hidden': 'visible'}` }}>
        <header className='flex flex-col gap-4 justify-between items-center md:gap-0 md:flex-row'>
          <input type='text' placeholder='Search for a country' className='font-Nunito p-2 rounded-sm' style={{ backgroundColor: elmColor }} onChange={handleChange} />
          <Filter update={handleClick} color={elmColor} />
        </header>
        <section className='mt-6 w-full'>
          {countries ? <Country countries={countries} color={elmColor} name={getName} /> : <Loading />}
        </section>
        {open && <FullPage bgColor={elmColor} textColor={elmText} country={data} bodyColor={bodyBg} goBack={closeWindow} />}
      </main>
    </>
  )
}

export default App
