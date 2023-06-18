import { useState } from 'react'

export function useTheme () {
  const [darkMode, setDarkMode] = useState(true)
  window.document.body.style.backgroundColor = darkMode ? '#202d36' : '#fafafa'
  const elmColor = darkMode ? '#2b3743' : '#fff'
  const elmText = darkMode ? '#fff' : '#1A1F21'
  const bodyBg = darkMode ? '#202d36' : '#fafafa'
  const changeTheme = () => {
    setDarkMode(!darkMode)
  }
  return { changeTheme, elmColor, elmText, darkMode, bodyBg }
}

export default useTheme
