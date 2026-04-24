import { TrackedLink } from './ui/tracked-link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function CTA() {
  return (
    <div className="font-satoshi relative overflow-hidden bg-[#1b2434] px-4 py-10 sm:px-6 sm:py-20 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(130,95,255,0.45),transparent_48%),radial-gradient(circle_at_25%_52%,rgba(255,92,161,0.18),transparent_24%)]" />
      <div className="relative mx-auto max-w-6xl text-center">
        <div className="text-brand mx-auto flex h-14 w-14 items-center justify-center rounded-full">
          <img src="/svg/star.svg" alt="" />
        </div>
        <h2 className="mx-auto mt-10 max-w-5xl text-4xl leading-[1.19] font-bold text-balance text-white sm:text-5xl lg:text-6xl">
          Your Next Business Case Deserves <br className="max-lg:hidden" />
          <span className="bg-[linear-gradient(90deg,#6495ED_0%,#6B91E8_7.14%,#728EE2_14.29%,#788ADD_21.43%,#7D86D8_28.57%,#8283D2_35.71%,#877FCD_42.86%,#8B7BC8_50%,#9A75BA_57.14%,#A76EAC_64.29%,#B4669E_71.43%,#BF5D90_78.57%,#CA5282_85.71%,#D54473_92.86%,#DF3064_100%)] bg-clip-text font-medium text-transparent">
            a Better Foundation.
          </span>
        </h2>
        <p className="mx-auto mt-4 text-lg leading-[1.8] text-white sm:text-2xl lg:mt-1">
          Stop building models that get approved and forgotten. Start building
          models that are defensible on day one and validated every month after.
        </p>
        <p className="sr-only mx-auto mt-4 max-w-4xl text-sm text-balance text-[#e7dcff] sm:mt-5 sm:text-xl sm:leading-9">
          Build, analyze, and validate project ROI using a structured financial
          model.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <TrackedLink
            href="#newsletter-card"
            eventName="final_cta_click"
            eventPayload={{ location: 'final_primary' }}
            className="inline-flex items-center gap-3 rounded-full bg-[#d9bcff] px-6 py-3 font-medium text-[#6074ff] sm:px-8 sm:py-5 sm:text-2xl"
          >
            Start building for free
            <ArrowRight className="h-6 w-6" />
          </TrackedLink>
          <TrackedLink
            href="#newsletter-card"
            eventName="final_cta_click"
            eventPayload={{ location: 'final_secondary' }}
            className="inline-flex items-center gap-3 rounded-full border border-[#6074ff] px-11 py-3 font-medium text-[#6b86ff] sm:px-8 sm:py-5 sm:text-2xl"
          >
            See a live demo
            <ArrowRight className="h-6 w-6" />
          </TrackedLink>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-xs text-[#99A1AF] sm:gap-x-10 sm:gap-y-4 sm:text-sm">
          {[
            'SOC 2 Type II',
            'No credit card required',
            'Setup in minutes',
            'Connect to Value Tracker on day one',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-[#6b86ff]" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
