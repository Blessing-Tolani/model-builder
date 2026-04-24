import { FEATURES } from '@/constants'
import Image from 'next/image'

export default function FeatureCapabilities() {
  return (
    <section className="font-satoshi max-sm:mt-10">
      <div className="text-center">
        <p className="bg-blue/4 text-blue inline-flex rounded-full border-2 border-[#dce7ff] px-5 py-2 text-2xl font-medium sm:px-8 sm:py-4 sm:text-3xl">
          Feature Capabilities
        </p>
      </div>
      <div className="relative w-full bg-[#FCFCFC] lg:mt-4">
        <img
          src="/images/features-gradient-bg.webp"
          className="absolute w-full"
          alt=""
        />
        {FEATURES.map((feature, index) => (
          <div key={feature.label} className="px-4 sm:px-8">
            <div
              className={`flex flex-col items-center justify-center gap-12.5 pt-10 lg:flex-row lg:pt-24 ${
                index % 2 !== 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div>
                <p className="bg-blue/4 text-blue inline-flex rounded-full border-2 border-[#FFD7E24D] px-2 py-1 text-sm font-bold uppercase sm:px-4 sm:py-2.5">
                  {feature.label}
                </p>
                <h2 className="text-black-100 sr-only mt-3 max-w-xl text-2xl font-medium sm:text-5xl">
                  {feature.semanticTitle}
                </h2>
                <h3
                  className={`${
                    index % 2 !== 1 ? 'lg:max-w-2xl' : 'lg:max-w-xl'
                  } text-black-100 mt-3 text-2xl font-medium text-balance sm:mt-8 sm:text-5xl sm:leading-[1.12]`}
                >
                  {feature.title}
                </h3>
                <div className="mt-8 flex gap-4.5">
                  <div className="bg-blue mt-1 h-auto w-1 rounded-full max-sm:w-2" />
                  <p
                    className={`text-black-100 text-sm md:text-2xl ${
                      index % 2 !== 1 ? 'max-w-2xl' : 'max-w-xl'
                    } `}
                  >
                    {feature.body}
                  </p>
                </div>
              </div>
              <Image
                src={feature.image}
                alt={feature.alt}
                width={554}
                height={400}
                className="h-auto w-auto"
              />
            </div>
            <hr className="h-7.5 w-full border-0 bg-white" />
          </div>
        ))}
        <img
          src="/images/features-gradient-bg.webp"
          className="absolute top-[40%] w-full"
          alt=""
        />
        <img
          src="/images/features-gradient-bg.webp"
          className="absolute w-full lg:-bottom-250"
          alt=""
        />
      </div>
    </section>
  )
}
