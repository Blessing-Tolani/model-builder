'use client'

import dynamic from 'next/dynamic'
import 'react-toastify/dist/ReactToastify.css'

const ToastContainer = dynamic(
  () => import('react-toastify').then((mod) => mod.ToastContainer),
  { ssr: false },
)

export function ToastProvider() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={10000}
      newestOnTop
      pauseOnFocusLoss={false}
      toastClassName="rounded-2xl border border-slate-100 shadow-lg"
    />
  )
}
