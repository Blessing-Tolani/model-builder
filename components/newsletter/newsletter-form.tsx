'use client'

import { useState } from 'react'
import { LoaderCircle } from 'lucide-react'
import { toast } from 'react-toastify'
import { trackEvent } from '@/lib/analytics'

const initialState = {
  name: '',
  email: '',
}

export function NewsletterForm() {
  const [form, setForm] = useState(initialState)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault()
    setIsSubmitting(true)
    trackEvent('newsletter_submit_attempt', {
      email_domain: form.email.split('@')[1] || 'unknown',
    })

    try {
      await new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          if (form.email.includes('fail')) {
            reject(new Error('Newsletter subscription failed'))
            return
          }

          resolve()
        }, 800)
      })

      toast.success('Subscription successful. Fresh insights are on the way.')
      trackEvent('newsletter_submit_success')
      setForm(initialState)
    } catch (error: any) {
      toast.error(
        'Subscription failed. Please try again with a valid work email.',
      )
      trackEvent('newsletter_submit_failure', { message: error.message })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <label className="block">
        <span className="sr-only">Your full name</span>
        <input
          required
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your full name"
          className="text-black-100 w-full rounded-full bg-[#F0F0F0] p-4 text-lg transition outline-none placeholder:text-gray-100 md:p-5 md:text-xl"
        />
      </label>
      <label className="block">
        <span className="sr-only">Your work email</span>
        <input
          required
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your work email"
          className="text-black-100 w-full rounded-full bg-[#F0F0F0] p-4 text-lg transition outline-none placeholder:text-gray-100 md:p-5 md:text-xl"
        />
      </label>
      <button
        type="submit"
        disabled={isSubmitting || !form.name || !form.email}
        className="bg-blue inline-flex items-center gap-3 rounded-full px-6 py-3 text-xl font-medium text-white transition hover:bg-[#527de0] disabled:cursor-not-allowed disabled:opacity-70 md:px-10 md:py-5"
      >
        {isSubmitting ? (
          <LoaderCircle className="h-6 w-6 animate-spin" />
        ) : null}
        Subscribe
      </button>
    </form>
  )
}
