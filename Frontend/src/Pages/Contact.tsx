'use client'

import { useState } from 'react'
import { Navbar } from '@/Components/Navbar'
import { Footer } from '@/Components'
import { Globe } from '@/Components/ui/Globe'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen container p-4 md:p-8 font-space">
        <div className="mx-auto max-w-7xl rounded-3xl dark:bg-black/50 bg-gray-100 p-8 backdrop-blur-xl">
          <div className="grid gap-12 md:grid-cols-2 grid-cols-1">
            {/* Left Column - Form */}
            <div className="space-y-8">
              <h1 className="text-5xl font-light tracking-tight">
                <span className="dark:text-white text-black">Contact</span>{' '}
                <span className="text-blue-500">US</span>
              </h1>

              <form onSubmit={handleSubmit} className="space-y-6 dark:text-gray-300 text-gray-800">
                <div>
                  <label htmlFor="name" className="block text-sm ">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 w-full rounded-lg border border-gray-800 dark:bg-black/50 bg-gray-200 px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm dark:text-gray-300 text-gray-800">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 w-full rounded-lg border border-gray-800 dark:bg-black/50 bg-gray-200 px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm dark:text-gray-300 text-gray-800">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="mt-1 w-full rounded-lg border border-gray-800 dark:bg-black/50 bg-gray-200 px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-textmain px-8 py-4 text-center text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Column - Content */}
            {/* <div className="relative flex items-center justify-center dark: bg-gradient-to-b from-textmain to-black bg-gray-300 rounded-lg">
              {/* <div className="relative z-10 space-y-4 text-center">
              <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                You&apos;ve got the <span className="text-blue-500">ideas</span>.
                <br />I have got the <span className="font-mono">skills</span>.
                <br />Let&apos;s team up!
              </h2>
            </div> */}
              {/* <Globe className="top-28" /> */}

              {/* Glowing Globe Effect */}
              {/* <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/4">
              <div className="absolute h-full w-full rounded-full bg-blue-500/20 blur-[100px]" />
              <div className="absolute h-full w-full rounded-full bg-blue-600/20 blur-[50px]" />
            </div> */}
            {/* </div> */}
            <div className="relative flex size-full items-center justify-center overflow-hidden rounded-lg  dark: bg-gradient-to-b from-textmain to-black bg-gray-300">
              <span className="-mt-96 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                  Let's Talk
              </span>
              <Globe className="top-36" />
              <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

