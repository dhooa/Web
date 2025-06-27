import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Green Coffee Shelter - Penginapan & Coffee Experience',
  description: 'Nikmati pengalaman menginap yang tak terlupakan di tengah perkebunan kopi hijau. Kombinasi sempurna antara kenyamanan modern dan keindahan alam yang menenangkan.',
  keywords: 'penginapan, kopi, shelter, malang, perkebunan kopi, hotel, resort',
  authors: [{ name: 'Green Coffee Shelter' }],
  openGraph: {
    title: 'Green Coffee Shelter - Penginapan & Coffee Experience',
    description: 'Pengalaman menginap unik di tengah perkebunan kopi hijau',
    type: 'website',
    locale: 'id_ID',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Green Coffee Shelter',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Green Coffee Shelter - Penginapan & Coffee Experience',
    description: 'Pengalaman menginap unik di tengah perkebunan kopi hijau',
    images: ['https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=630&fit=crop'],
  },
  themeColor: '#059669',
  metadataBase: new URL('https://YOUR-VERCEL-DOMAIN.vercel.app'),
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
    }
