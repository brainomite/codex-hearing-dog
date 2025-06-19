"use client"
import { ThemeToggle } from './ThemeProvider'

export default function SiteHeader() {
  return (
    <header className="w-full py-4 flex justify-between items-center bg-white dark:bg-gray-900 text-black dark:text-white">
      <h1 className="text-xl font-semibold">Hearing Dog Training</h1>
      <ThemeToggle />
    </header>
  )
}
