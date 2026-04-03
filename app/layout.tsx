import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Groupe Imperium',
  description: "Une histoire de famille. Une vision d'excellence.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
