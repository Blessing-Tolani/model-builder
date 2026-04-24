import { NewsletterForm } from './newsletter-form'

export default function Newsletter() {
  return (
    <div
      id="newsletter"
      className="font-satoshi left-1/2 mx-auto w-full max-w-7xl rounded-xl border border-[#e9e9ee] bg-white px-4 py-10 text-slate-900 sm:px-12 md:px-8 lg:grid lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:py-14 xl:absolute xl:-top-52 xl:-translate-x-1/2"
    >
      <div>
        <h3 className="text-black-100 max-w-2xl text-3xl leading-tight font-bold tracking-tighter text-balance sm:text-6xl md:text-5xl">
          Stay{' '}
          <span className="bg-linear-to-r from-[#8060e7] to-[#f14487] bg-clip-text text-transparent">
            ahead
          </span>{' '}
          of the curve
        </h3>
        <p className="mt-2.5 text-lg leading-[1.65] text-[#5F5F5F] md:text-2xl">
          Our monthly email newsletter keeps you up-to-date with project
          management insights.
        </p>
      </div>
      <div className="mt-10 lg:mt-0">
        <p className="text-black-100 max-w-2xl text-lg leading-[1.55] font-medium md:text-2xl">
          Subscribe to our newsletter and have these useful insights sent to
          your work email
        </p>
        <div className="mt-6">
          <NewsletterForm />
        </div>
      </div>
    </div>
  )
}
