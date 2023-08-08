import { Footer, Navbar } from '@/components'
import './globals.css'

export const metadata = {
  title: 'Gara',
  description: 'Tìm kiếm những chiếc xe ô tô tốt nhất trên thị trường hiện nay',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
