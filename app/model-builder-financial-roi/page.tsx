import Header from '@/components/header'
import FAQS from '@/components/faqs'
import FeatureCapabilities from '@/components/home/features'
import HeroSection from '@/components/home/hero-section'
import Testimonials from '@/components/home/testimonials'
import { FAQ_ITEMS } from '@/constants'
import Script from 'next/script'
import CTA from '@/components/cta'
import Footer from '@/components/footer'
import { ToastProvider } from '@/components/ui/toast-provider'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Proconomics Model Builder',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description:
    'Build structured financial models to define costs, forecast benefits, and evaluate ROI. Create business cases that hold up under executive scrutiny.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
}

export default function ModelBuilderLandingPage() {
  return (
    <>
      <Script
        id="ld-product"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Script
        id="ld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ToastProvider />
      <Header />
      <HeroSection />
      <FeatureCapabilities />
      <Testimonials />
      <FAQS />
      <CTA />
      <Footer />
    </>
  )
}
