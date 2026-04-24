import Header from '@/components/header'
import FAQS from '@/components/faqs'
import FeatureCapabilities from '@/components/home/features'
import HeroSection from '@/components/home/hero-section'
import { FAQ_ITEMS } from '@/constants'
import Script from 'next/script'
import CTA from '@/components/cta'
import Footer from '@/components/footer'
import { ToastProvider } from '@/components/ui/toast-provider'
import dynamic from 'next/dynamic'

const Testimonials = dynamic(() => import('@/components/home/testimonials'))

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

export default function ModelBuilderLandingPage() {
  return (
    <>
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
