import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider, ThemeToggle } from '../components/ThemeProvider'

beforeEach(() => {
  localStorage.clear()
  document.documentElement.classList.remove('dark')
})

test('toggles dark class on html element', async () => {
  render(
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>
  )

  const button = screen.getByRole('button')
  expect(document.documentElement.classList.contains('dark')).toBe(false)

  await userEvent.click(button)
  expect(document.documentElement.classList.contains('dark')).toBe(true)
  expect(localStorage.getItem('theme')).toBe('dark')

  await userEvent.click(button)
  expect(document.documentElement.classList.contains('dark')).toBe(false)
  expect(localStorage.getItem('theme')).toBe('light')
})
