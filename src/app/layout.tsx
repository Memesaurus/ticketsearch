import { roboto } from './Fonts/Fonts'
import './globals.css'

export const metadata = {
  title: 'Билетопоиск',
  description: 'Сайт для Шри',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
