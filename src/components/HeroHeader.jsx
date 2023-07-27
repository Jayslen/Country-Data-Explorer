import { IconSunFilled, IconMoonFilled } from '@tabler/icons-react'

export function Header({ elmColor, elmText, handleTheme, darkMode }) {
  return (
    <header
      className="flex justify-between items-center px-5 shadow-xl h-[10vh]"
      style={{ backgroundColor: elmColor, color: elmText }}
    >
      <h1 className="text-xl font-bold">Where in the wordl?</h1>
      <div className="flex gap-1">
        {darkMode ? <IconSunFilled /> : <IconMoonFilled />}
        <p className="font-semibold cursor-pointer" onClick={handleTheme}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </p>
      </div>
    </header>
  )
}
