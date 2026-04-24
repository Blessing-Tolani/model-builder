'use client'
import { FAQ_ITEMS } from '@/constants'
import { Minus, ArrowRight, Plus } from 'lucide-react'
import { TrackedLink } from './ui/tracked-link'
import { useState } from 'react'

export default function FAQS() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faqs"
      aria-labelledby="faq-heading"
      className="font-satoshi mx-auto max-w-7xl px-4 pb-30 sm:px-6 lg:px-8"
    >
      <div className="text-center">
        <p className="bg-blue/4 text-blue inline-flex rounded-full border-2 border-[#dce7ff] px-5 py-2 text-2xl font-medium sm:px-8 sm:py-4 sm:text-3xl">
          FAQs
        </p>

        <h2
          id="faq-heading"
          className="text-black-100 sr-only mt-7.5 text-2xl font-medium tracking-tighter text-balance sm:text-5xl"
        >
          Frequently Asked Questions About Financial Modeling and ROI
        </h2>

        <h3 className="text-black-100 mt-7.5 text-2xl font-medium tracking-tighter text-balance sm:text-5xl">
          Frequently Asked Questions
        </h3>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.95fr]">
        <div className="space-y-6">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <article
                key={item.question}
                className="border-blue text-black-100 flex justify-between gap-x-4 rounded-md border bg-white p-4 shadow-sm"
              >
                <div>
                  <h3 className="max-w-2xl text-lg leading-tight font-bold sm:text-2xl">
                    {item.question}
                  </h3>

                  {isOpen && (
                    <p className="mt-3 max-w-2xl text-sm leading-[1.65] sm:text-xl">
                      {item.answer}
                    </p>
                  )}
                </div>

                <button
                  onClick={() => toggleFAQ(index)}
                  className="border-blue text-blue flex size-6 shrink-0 items-center justify-center rounded-full border-2 md:size-10"
                >
                  {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </button>
              </article>
            )
          })}
        </div>

        <aside className="border-blue rounded-md border bg-white p-5 shadow-sm lg:sticky lg:top-28 lg:h-fit">
          <h3 className="text-lg font-bold sm:text-2xl">
            Still have questions?
          </h3>
          <p className="mt-2.5 text-sm leading-[1.6] sm:text-xl">
            Can’t find the answer you are looking for? Kindly check our complete
            list of FAQs.
          </p>
          <TrackedLink
            href="#faqs"
            eventName="faq_cta_click"
            eventPayload={{ location: 'faq_panel' }}
            className="bg-blue mt-10 inline-flex items-center gap-3 rounded-full p-4 text-lg font-medium text-white md:px-8 md:py-5 md:text-2xl"
          >
            View Complete FAQs
            <ArrowRight className="h-6 w-6" />
          </TrackedLink>
        </aside>
      </div>
    </section>
  )
}
