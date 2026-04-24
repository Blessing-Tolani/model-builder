import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: new URL('https://modelbuilder-demo.example'),
  title:
    'Project Financial Model Builder for ROI & Business Cases | Proconomics',
  description:
    'Build structured financial models to define costs, forecast benefits, and evaluate ROI. Create business cases that hold up under executive scrutiny.',
  keywords: [
    'financial model builder',
    'business case software',
    'project finance tool',
    'executive-ready modeling',
  ],
  openGraph: {
    title:
      'Project Financial Model Builder for ROI & Business Cases | Proconomics',
    description:
      'Build structured financial models to define costs, forecast benefits, and evaluate ROI. Create business cases that hold up under executive scrutiny.',
    url: 'https://modelbuilder-demo.example',
    siteName: 'Proconomics',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Project Financial Model Builder for ROI & Business Cases | Proconomics',
    description:
      'Build structured financial models to define costs, forecast benefits, and evaluate ROI. Create business cases that hold up under executive scrutiny.',
  },
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-full flex-col">
        {/* GA SCRIPT */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />

        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
        </Script>

        {children}
      </body>
    </html>
  )
}
