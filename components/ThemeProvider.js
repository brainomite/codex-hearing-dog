"use client"
import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light'
  return localStorage.getItem('theme') || 'light'
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const stored = localStorage.getItem('theme') || 'light'
    setTheme(stored)
    document.documentElement.classList.toggle('dark', stored === 'dark')
  }, [])

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.classList.toggle('dark', next === 'dark')
    localStorage.setItem('theme', next)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <button className="px-2 py-1 border rounded" onClick={toggleTheme}>
      {theme === 'light' ? 'Dark' : 'Light'}
    </button>
  )
}
