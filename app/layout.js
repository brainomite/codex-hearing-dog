import "./globals.css"
import { ThemeProvider } from '../components/ThemeProvider'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Hearing Dog Training</title>
      </head>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <div className="flex flex-col items-center mx-auto w-full max-w-4xl min-h-screen">
            <SiteHeader />
            <main className="flex-1 w-full p-4">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
