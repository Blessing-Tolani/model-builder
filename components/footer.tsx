import Newsletter from './newsletter'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="font-satoshi relative border-t border-white/10 bg-black xl:mt-64 xl:pt-72">
      <Newsletter />
      <div className="mx-auto mt-20 mb-7.5 grid max-w-7xl grid-cols-2 gap-10 text-white max-lg:px-4 lg:grid-cols-4">
        <div>
          <h3 className="text-xl font-bold sm:text-2xl">Features</h3>
          <ul className="mt-4 space-y-3 text-left text-base sm:mt-8 sm:space-y-5 sm:text-xl">
            <li>List View</li>
            <li>Board View</li>
            <li>Timeline</li>
            <li>Calendar</li>
            <li>Workload</li>
            <li>Integration</li>
            <li className="flex items-center font-bold">
              See More
              <ChevronDown className="mt-1 ml-1 cursor-pointer" />
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold sm:text-2xl">Resources</h3>
          <ul className="mt-4 space-y-3 text-base sm:mt-8 sm:space-y-5 sm:text-xl">
            <li>Webinars</li>
            <li>Blogs</li>
            <li>Templates</li>
            <li>Video Demo</li>
            <li>Developers API</li>
            <li>Brand Guide</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold sm:text-2xl">Solutions</h3>
          <ul className="mt-4 space-y-3 text-base sm:mt-8 sm:space-y-5 sm:text-xl">
            <li>Teams</li>
            <li>AI Assistant</li>
            <li>Proconomics</li>
            <li>Case Studies</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold sm:text-2xl">Company</h3>
          <ul className="mt-4 space-y-3 text-base sm:mt-8 sm:space-y-5 sm:text-xl">
            <li>About Us</li>
            <li>Careers</li>
            <li>Community</li>
            <li>Customers</li>
            <li>Affiliate</li>
            <li>New Release</li>
            <li className="flex items-center font-bold">
              See More <ChevronDown className="mt-1 ml-1 cursor-pointer" />
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-white/50 py-11 max-lg:px-4 lg:flex-row lg:items-center lg:justify-between">
        <Image
          src="/images/acedboard-logo.webp"
          alt="Acedboard logo"
          priority
          width={189}
          height={44}
          className="h-auto object-cover max-sm:w-35"
        />
        <div className="flex items-center gap-7.5">
          {['twitter', 'linkedin', 'instagram', 'facebook'].map((item) => (
            <a
              href="#"
              target="_blank"
              key={item}
              className="flex size-12 items-center justify-center rounded-full bg-white text-black sm:size-14"
            >
              <img src={`/svg/${item}.svg`} alt={item} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
