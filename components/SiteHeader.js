"use client"
import { ThemeToggle } from './ThemeProvider'

export default function SiteHeader() {
  return (
    <header className="w-full py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Hearing Dog Training</h1>
      <ThemeToggle />
    </header>
  )
}
