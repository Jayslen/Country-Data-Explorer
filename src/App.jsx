import { IconSunFilled, IconMoonFilled } from '@tabler/icons-react'
import { Country } from './components/CountryInfo'
import useGetData from './hooks/useDataCountry'
import { useState } from 'react'
import { Filter } from './components/RegionFilters'
import { Loading } from './components/Loading'
import { useTheme } from './hooks/useTheme'

window.document.body.style.backgroundColor = '#202d36'
function App () {
  const [value, setValue] = useState('')
  const [region, setRegion] = useState('All')
  const { countries } = useGetData({ value, region })
  const { changeTheme, elmColor, elmText, darkMode } = useTheme()

  // update the input value in order to filter
  const handleChange = (event) => {
    setValue(event.target.value)
  }
  // update the region in order to filter
  const handleClick = (value) => {
    setRegion(value)
  }
  // change theme
  const handleTheme = () => {
    changeTheme()
  }
  return (
    <>
      <header className='flex justify-between items-center p-5 shadow-xl' style={{ backgroundColor: elmColor, color: elmText }}>
        <h1 className='text-xl font-bold'>Where in the wordl?</h1>
        <div className='flex gap-1'>
          {darkMode ? <IconSunFilled /> : <IconMoonFilled />}
          <p className='font-semibold cursor-pointer' onClick={handleTheme}>{darkMode
            ? 'Light Mode'
            : 'Dark Mode'}
          </p>
        </div>
      </header>
      <main className='px-14 mt-6' style={{ color: elmText }}>
        <header className='flex flex-col gap-4 justify-between items-center md:gap-0 md:flex-row'>
          <input type='text' placeholder='Search for a country' className='font-Nunito p-2 rounded-sm' style={{ backgroundColor: elmColor }} onChange={handleChange} />
          <Filter update={handleClick} color={elmColor} />
        </header>
        <section className='mt-6 w-full'>
          {countries ? <Country countries={countries} color={elmColor} /> : <Loading />}
        </section>
      </main>
    </>
  )
}

export default App
