import { NAV_ITEMS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { TrackedLink } from './ui/tracked-link'

export default function Header() {
  return (
    <header className="font-satoshi sticky top-0 z-20 border-b border-slate-100 bg-white/90 shadow-[0px_2px_2px_0px_#0000001A] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/">
          <Image
            src="/images/proconomics-logo.webp"
            alt="Proconomics logo"
            priority
            width={219}
            height={44}
            className="h-auto w-35 object-cover sm:w-45 md:w-54.75"
          />
        </Link>

        <nav className="hidden items-center gap-11.5 text-xl font-medium text-gray-100 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {item}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-7.5">
          <Link
            href="#newsletter"
            className="text-blue hidden text-lg font-bold sm:inline-flex"
          >
            Sign in
          </Link>
          <TrackedLink
            href="#newsletter"
            eventName="header_cta_click"
            eventPayload={{ location: 'header' }}
            className="bg-blue inline-flex items-center rounded-full px-3 py-2 text-base font-bold text-white hover:bg-[#517fe1] md:px-7.5 md:py-4 md:text-lg"
          >
            Get started
          </TrackedLink>
        </div>
      </div>
    </header>
  )
}
