import useDarkSide from 'hooks/Themes/useDarkSide'
import { useState } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

const ThemeSwitcher = () => {
  const [colorTheme, setTheme] = useDarkSide()
  const [darkSide, setDarkSide] = useState<boolean>(colorTheme === 'light' ? true : false)

  const toggleDarkMode = (checked: boolean) => {
    setTheme(checked ? 'dark' : 'light')
    setDarkSide(checked)
  }

  return (
    <>
      <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={20} />
    </>
  )
}

export default ThemeSwitcher
