import { TESTIMONIALS } from '@/constants'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Testimonials() {
  return (
    <section
      id="about-us"
      aria-labelledby="testimonials-heading"
      className="font-satoshi relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="bg-blue/4 text-blue inline-flex rounded-full border-2 border-[#dce7ff] px-5 py-2 text-2xl font-medium sm:px-8 sm:py-4 sm:text-3xl">
            Testimonials
          </p>
          <h2
            id="testimonials-heading"
            className="text-black-100 sr-only mx-auto mt-8 max-w-5xl text-3xl leading-[1.12] font-medium text-balance sm:text-5xl"
          >
            What Finance Teams Achieve with Financial Modeling in Proconomics
          </h2>
          <h3 className="text-black-100 mx-auto mt-8 max-w-5xl text-3xl leading-[1.12] font-medium text-balance sm:text-5xl">
            See what value tracker is delivering for finance leaders.
          </h3>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2">
          {TESTIMONIALS.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-4xl border-16 border-[#EEF4FF] bg-white/80 p-4 sm:p-8"
            >
              <img src="/svg/quote.svg" alt='"' />
              <p className="text-black-100 my-6 text-lg leading-[1.7] lg:my-17.5">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="size-12 rounded-full object-cover md:size-20"
                />
                <div>
                  <p className="text-black-100 text-sm font-bold sm:text-xl">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-100 max-sm:text-xs lg:w-72">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-center gap-6 md:mt-10">
          <button className="border-black-100 text-black-100 flex size-10 cursor-pointer items-center justify-center rounded-full border md:size-14">
            <ChevronLeft className="size-6 md:size-8" />
          </button>
          <button className="border-black-100 text-black-100 flex size-10 cursor-pointer items-center justify-center rounded-full border md:size-14">
            <ChevronRight className="size-6 md:size-8" />
          </button>
        </div>
      </div>
    </section>
  )
}
