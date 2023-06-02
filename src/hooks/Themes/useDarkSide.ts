import { useEffect, useState } from 'react'

const useDarkSide = (): [string, (theme: string) => void] => {
  const [theme, setTheme] = useState<string>(localStorage.theme)
  const colorTheme: string = theme === 'dark' ? 'light' : 'dark'

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(colorTheme)
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme, colorTheme])

  return [colorTheme, setTheme]
}

export default useDarkSide
