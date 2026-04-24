import type { Metadata } from 'next'
import './globals.css'

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
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
