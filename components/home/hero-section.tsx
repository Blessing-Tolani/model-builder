import Image from 'next/image'
import { TrackedLink } from '../ui/tracked-link'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <div
      className="font-satoshi px-4 pt-10 pb-8 sm:px-6 md:pb-16 lg:px-8"
      style={{
        backgroundImage:
          'linear-gradient(180deg, rgba(100, 149, 237, 0.05) 39.39%, rgba(255, 255, 255, 0.15) 99.46%), url(/images/hero-background.png)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: '-2%',
      }}
    >
      <div className="flex flex-col items-center text-center sm:mx-auto">
        <div className="border-blue bg-blue/10 inline-flex items-center gap-x-2.5 rounded-full border-2 px-7.5 py-2.5 text-xs font-medium text-gray-100 uppercase sm:gap-3.5 md:text-sm">
          <Link href="/" className="underline underline-offset-4">
            Home
          </Link>
          <img src="/svg/slash.svg" alt="" />
          <span className="underline underline-offset-4">Proconomics</span>
          <img src="/svg/slash.svg" alt="" />
          <span className="text-blue font-bold">Model Builder</span>
        </div>

        <h1 className="mt-6 mb-7.5 text-4xl leading-[1.2] font-medium text-balance sm:text-6xl lg:text-[4.5rem]">
          Your <span className="text-blue">Business</span>{' '}
          <span className="text-pink-100">Case</span> Should Survive Long After
          the Meeting Ends.
        </h1>

        <p className="text-black-100 text-lg text-balance sm:text-2xl sm:leading-[1.45]">
          Proconomics Model Builder gives finance teams and project sponsors a
          structured, assumption-backed financial model that holds up under
          executive scrutiny, built in minutes, not days.
        </p>

        <p className="sr-only mt-5 max-w-4xl text-lg leading-8 font-medium text-balance text-slate-700 sm:text-[1.4rem] sm:leading-[1.7]">
          Build structured project financial models that define costs, forecast
          ROI, and hold up under executive scrutiny.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <TrackedLink
            href="#newsletter"
            eventName="hero_cta_click"
            eventPayload={{ location: 'hero_primary' }}
            className="bg-blue inline-flex items-center justify-center gap-4 rounded-full border-2 border-white px-6 py-3 text-xl font-medium text-white shadow-lg shadow-[#6c97f5]/20 sm:px-8 sm:py-4"
          >
            Build your first model
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-white">
              <img src="/svg/closed-track.svg" alt="" />
            </span>
          </TrackedLink>
          <TrackedLink
            href="#newsletter"
            eventName="hero_cta_click"
            eventPayload={{ location: 'hero_secondary' }}
            className="border-blue text-blue inline-flex items-center justify-center gap-4 rounded-full border-2 bg-white px-6 py-3 text-xl font-medium shadow-lg shadow-[#6c97f5]/20 sm:px-8 sm:py-4"
          >
            Book a demo
            <span className="bg-blue flex h-12 w-12 items-center justify-center rounded-full border">
              <img src="/svg/calendar.svg" alt="" />
            </span>
          </TrackedLink>
        </div>
      </div>

      <Image
        src="/images/model-builder-hero-dashboard.png"
        alt="project financial model dashboard showing ROI NPV IRR"
        priority
        width={1200}
        height={612}
        className="mx-auto py-10 md:pt-25 md:pb-16"
        sizes="(max-width: 768px) 100vw, 80vw"
      />

      <p className="sr-only mt-5 text-center text-lg leading-8 font-medium text-balance text-slate-700 sm:text-[1.4rem] sm:leading-[1.7]">
        Proconomics Model Builder is a project financial modeling tool designed
        to help teams build business cases, analyze costs and benefits, and
        evaluate return on investment before execution. It replaces fragmented
        spreadsheets with a structured system that keeps every model clear,
        consistent, and decision-ready.
      </p>

      <section id="templates">
        <h2 className="text-black-100 sr-only pt-5 text-center text-3xl font-medium tracking-[-0.04em] sm:text-5xl">
          Why Teams Use a Project Financial Model Builder
        </h2>
        <Image
          src="/images/proconomics-use-case.jpg"
          alt="project financial model dashboard showing ROI NPV IRR"
          priority
          width={1200}
          height={612}
          className="w-full"
          sizes="(max-width: 768px) 100vw, 80vw"
        />
      </section>
    </div>
  )
}
