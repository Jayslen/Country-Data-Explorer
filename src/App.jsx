import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from './routes/Root'
import { CountryInfo } from './routes/SingleCountryInfo'

window.document.body.style.backgroundColor = '#202d36'
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/country/:countryName',
      element: <CountryInfo />,
    },
  ])
  return <RouterProvider router={router} />
}

export default App
