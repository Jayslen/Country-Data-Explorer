import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CountryProvider } from './context/CountryContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CountryProvider>
    <App />
  </CountryProvider>
)
