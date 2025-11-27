import type { Metadata } from 'next'
import Script from 'next/script'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/layout/theme-provider'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://antesobiomedical.com'),
  title: {
    default: 'ANTESO Biomedical - Advanced Medical Imaging Solutions',
    template: '%s | ANTESO Biomedical'
  },
  description: 'Leading provider of advanced diagnostic imaging equipment and quality assurance solutions for medical institutions. AERB certified radiation safety verification, CT Scan, X-Ray, Mammography, and comprehensive quality assurance services.',
  keywords: [
    'medical imaging equipment',
    'diagnostic imaging solutions',
    'AERB certified',
    'radiation safety verification',
    'CT Scan equipment',
    'X-Ray systems',
    'Mammography',
    'quality assurance medical equipment',
    'biomedical equipment',
    'healthcare technology',
    'medical device quality testing',
    'radiation equipment verification',
    'New Delhi medical equipment',
    'India biomedical solutions'
  ],
  authors: [{ name: 'ANTESO Biomedical' }],
  creator: 'ANTESO Biomedical (OPC) Pvt Ltd',
  publisher: 'ANTESO Biomedical',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: 'ANTESO Biomedical',
    title: 'ANTESO Biomedical - Advanced Medical Imaging Solutions',
    description: 'Leading provider of advanced diagnostic imaging equipment and quality assurance solutions for medical institutions. AERB certified radiation safety verification services.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'ANTESO Biomedical Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ANTESO Biomedical - Advanced Medical Imaging Solutions',
    description: 'Leading provider of advanced diagnostic imaging equipment and quality assurance solutions for medical institutions.',
    images: ['/logo.png'],
    creator: '@antesobiomedical',
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      {
        url: '/logo1.png',
        type: 'image/png',
      },
      {
        url: '/logo.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/logo.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    apple: '/logo.png',
    shortcut: '/logo.png',
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  category: 'Medical Equipment',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'ANTESO Biomedical (OPC) Pvt Ltd',
    description: 'Leading provider of advanced diagnostic imaging equipment and quality assurance solutions for medical institutions',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://antesobiomedical.com',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://antesobiomedical.com'}/logo.png`,
    image: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://antesobiomedical.com'}/logo.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Flat No. 290, 2nd Floor, D Block, Pocket 7, Sector 6',
      addressLocality: 'Rohini',
      addressRegion: 'New Delhi',
      postalCode: '110085',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-847-090-9720',
      contactType: 'Customer Service',
      email: 'info@antesobiomedicalopc.com',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
    sameAs: [
      'https://www.facebook.com/profile.php?id=100069402677347',
      'https://www.linkedin.com/company/antesobiomedical/',
    ],
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    serviceType: [
      'Medical Imaging Equipment',
      'Quality Assurance Testing',
      'Radiation Safety Verification',
      'AERB Compliance Services',
      'CT Scan Equipment',
      'X-Ray Systems',
      'Mammography Equipment',
    ],
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
        {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
