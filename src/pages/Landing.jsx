import { useState, useRef, useCallback } from 'react'
import AnimatedSection from '../components/AnimatedSection'

// —— Hero ——
function ArrowUpIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
    </svg>
  )
}

// —— Why Infinya ——
const VALUES = [
  { title: 'Quality first', description: 'We focus on clean code, clear communication, and delivery you can count on. New to the market, built on high standards.' },
  { title: 'Expertise you need', description: 'Software development with a focus on AI and cybersecurity—web, mobile, and full stack. We bring the skills your project requires.' },
  { title: 'Partnership mindset', description: 'We work with you as a partner—transparent, responsive, and invested in your success from day one.' },
]

// —— Full‑stack expertise ——
const EXPERTISE = [
  { title: 'AI and Data Science', subtitle: 'Intelligent systems, machine learning, and data engineering to unlock business value and automation.' },
  { title: 'Cybersecurity', subtitle: 'Security-first design, compliance, secure coding, and hardening to protect your systems and data.' },
  { title: 'Custom Software Development', subtitle: 'Custom software tailored for your needs—front-end, back-end, and full-stack technology.' },
  { title: 'Full Stack Web Development', subtitle: 'End-to-end web applications—React, Node.js, APIs, and cloud deployment for scalable, modern solutions.' },
  { title: 'Mobile App Development', subtitle: 'Performant, scalable, and secure mobile applications for iOS and Android.' },
  { title: 'Desktop Application', subtitle: 'Cross-platform desktop software for Windows, macOS, and Linux—native performance and modern UX.' },
  { title: 'UX/UI Design', subtitle: 'Beautiful, pixel-perfect, and easy-to-use designs that delight your users.' },
]
const SKILLS_IMAGES = ['ai.jpg', 'cyber security.jpg', 'Software.jpg', 'Web.jpg', 'softwre development.jpg', 'computer.jpg', 'uiux.jpg']
const BTN_STYLE = 'bg-white/95 border-white/50 text-zinc-900 hover:bg-white'
const getImageSrc = (filename) => `${(import.meta.env.BASE_URL || '').replace(/\/$/, '')}/Skills/${encodeURIComponent(filename)}`
const getImageGradient = (img, callback) => {
  try {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d', { willReadFrequently: true })
    const w = img.naturalWidth
    const h = img.naturalHeight
    const bottomH = Math.floor(h * 0.5)
    const sampleW = Math.floor(w / 3)
    const darken = 0.55
    const sampleRegion = (sx, sw) => {
      const size = 24
      canvas.width = size
      canvas.height = size
      ctx.drawImage(img, sx, h - bottomH, sw, bottomH, 0, 0, size, size)
      const data = ctx.getImageData(0, 0, size, size).data
      let r = 0, g = 0, b = 0, count = 0
      for (let i = 0; i < data.length; i += 4) {
        if (data[i + 3] > 128) { r += data[i]; g += data[i + 1]; b += data[i + 2]; count++ }
      }
      if (count > 0) return `rgb(${Math.floor(r / count * darken)},${Math.floor(g / count * darken)},${Math.floor(b / count * darken)})`
      return 'rgb(20,20,30)'
    }
    const left = sampleRegion(0, sampleW)
    const center = sampleRegion(sampleW, sampleW)
    const right = sampleRegion(sampleW * 2, sampleW)
    callback(`linear-gradient(to right, ${left}, ${center}, ${right})`)
  } catch {
    callback('linear-gradient(to right, rgb(0,0,0), rgb(20,20,30), rgb(0,0,0))')
  }
}

// —— Process ——
const STEPS = [
  { step: 'Step 1', title: 'Join exploration call.', desc: "Tell us more about your business on a discovery call. We'll discuss team structure and approach, success criteria, timescale, budget, and required skill sets to see how we can help." },
  { step: 'Step 2', title: 'Discuss solution and team structure.', desc: 'In a matter of days, we will finalize your project specifications, agree on an engagement model, select and onboard your team.' },
  { step: 'Step 3', title: 'Get started and track performance.', desc: "Once we've agreed on milestones, we'll immediately get to work. We'll track progress, report updates, and continuously adapt to your needs." },
]

// —— FAQ ——
const FAQ = [
  { q: 'Where is Infinya based?', a: 'We are based in Afghanistan and work with clients globally. We communicate in English and use modern collaboration tools.' },
  { q: 'What technologies do you use?', a: 'We work with 50+ popular technologies including JavaScript, TypeScript, React, Node.js, Python, Java, .NET, cloud (e.g. AWS), and databases. We match your stack.' },
  { q: 'How do we start a project?', a: 'Reach out via email or phone. We schedule a short call to understand your needs, then propose a plan, timeline, and next steps. No long sales process.' },
  { q: 'Do you offer ongoing support?', a: 'Yes. We can support maintenance, updates, and new features after delivery, depending on your needs.' },
]

// —— Contact ——
const CONTACT_EMAIL = 'officialinfinya.help@gmail.com'
const CONTACT_ICONS = [
  { label: 'Email', href: `mailto:${CONTACT_EMAIL}`, icon: 'mail' },
  { label: 'Phone', href: 'tel:+93795345288', icon: 'phone' },
]

export default function Landing() {
  const [faqOpen, setFaqOpen] = useState(0)
  const [status, setStatus] = useState('idle')
  const [formData, setFormData] = useState({ name: '', email: '', message: '', agree: false })
  const scrollRef = useRef(null)
  const [scrollIndex, setScrollIndex] = useState(0)
  const [loadedImages, setLoadedImages] = useState({})
  const [barColors, setBarColors] = useState({})
  const cardCount = EXPERTISE.length

  const handleImageError = useCallback((i) => setLoadedImages((prev) => ({ ...prev, [i]: false })), [])
  const scrollTo = useCallback((index) => {
    const el = scrollRef.current
    if (!el) return
    const card = el.querySelector('[data-card]')
    const cardWidth = card?.offsetWidth ?? 360
    const gap = 28
    const target = Math.min(Math.max(0, index), cardCount - 1)
    el.scrollTo({ left: target * (cardWidth + gap), behavior: 'smooth' })
    setScrollIndex(target)
  }, [cardCount])
  const handleScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const card = el.querySelector('[data-card]')
    const cardWidth = card?.offsetWidth ?? 360
    const gap = 28
    const index = Math.round(el.scrollLeft / (cardWidth + gap))
    setScrollIndex(Math.min(Math.max(0, index), cardCount - 1))
  }, [cardCount])
  const handleImageLoad = useCallback((e, i) => {
    setLoadedImages((prev) => ({ ...prev, [i]: true }))
    getImageGradient(e.target, (gradient) => setBarColors((prev) => ({ ...prev, [i]: gradient })))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')
    const subject = encodeURIComponent(`Contact from ${formData.name} (Infinya)`)
    const body = encodeURIComponent(`${formData.message}\n\n---\nFrom: ${formData.name}\nReply to: ${formData.email}`)
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    setStatus('success')
    setFormData({ name: '', email: '', message: '', agree: false })
  }
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }
  const inputClass = 'w-full px-4 py-3.5 rounded-xl border-2 border-zinc-200 bg-white text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all'

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[750px] flex items-center justify-center overflow-hidden bg-white pt-20">
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-50 120H200L250 70H450" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="6 4" />
            <path d="M-50 180H150L200 230H400" stroke="#3b82f6" strokeWidth="1.5" />
            <path d="M300 0V100L350 150H550" stroke="#1d4ed8" strokeWidth="1" opacity="0.5" />
            <circle cx="200" cy="120" r="3" fill="#60a5fa" className="animate-pulse" />
            <circle cx="250" cy="70" r="3" fill="#3b82f6" />
            <circle cx="200" cy="230" r="3" fill="#60a5fa" />
          </svg>
        </div>
        <div className="absolute right-[-10%] top-[-5%] w-[600px] h-[600px] pointer-events-none">
          <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute inset-20 border border-blue-400/20 rounded-full flex items-center justify-center rotate-[25deg] animate-[spin_20s_linear_infinite]">
            <div className="w-full h-px bg-blue-400/20 absolute top-1/2" />
            <div className="h-full w-px bg-blue-400/20 absolute left-1/2" />
            <div className="w-[85%] h-[85%] border border-blue-400/10 rounded-full" />
          </div>
          <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-white via-white/90 to-transparent z-10" />
        </div>
        <div className="container-main relative z-20 max-w-5xl mx-auto px-6 text-center">
          <div className="mb-10">
            <span className="inline-flex items-center px-5 py-2 rounded-full text-xs font-bold bg-zinc-100 backdrop-blur-xl border border-zinc-200 text-blue-600 tracking-[0.15em] uppercase">Founded 2025 · Afghanistan</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-zinc-900 mb-6 leading-[1.05]">
            Accelerate Your Roadmap With
            <span className="block mt-4 text-blue-400">Software & Technology</span>
          </h1>
          <div className="w-24 h-1.5 bg-blue-500 mx-auto rounded-full mb-10 shadow-[0_0_25px_rgba(59,130,246,0.9)]" />
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-600 leading-relaxed font-light mb-16">
            Based in Afghanistan, we deliver software development with a focus on AI and cybersecurity—and expertise across 50+ technologies.
          </p>
          <div className="flex justify-center gap-8">
            <div className="flex flex-col items-center animate-bounce"><ArrowUpIcon className="w-12 h-12 text-blue-400 opacity-80" /></div>
            <div className="flex flex-col items-center animate-bounce [animation-delay:0.2s]"><ArrowUpIcon className="w-12 h-12 text-indigo-400 opacity-80" /></div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-zinc-100 to-transparent" />
      </section>

      {/* Why Infinya */}
      <section id="industries" className="section-normal bg-section-light">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-zinc-900 text-center max-w-2xl mx-auto tracking-tight">Why Infinya</h2>
            <p className="mt-4 text-lg text-zinc-600 text-center max-w-xl mx-auto">A new company in the market—founded in 2025—ready to deliver software and technology solutions with integrity and skill.</p>
          </AnimatedSection>
          <AnimatedSection stagger delay={150}>
            <div className="mt-12 md:mt-14 grid md:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
              {VALUES.map((v) => (
                <div key={v.title} className="group rounded-2xl border border-zinc-200/80 bg-white p-5 md:p-6 lg:p-8 pl-6 md:pl-8 lg:pl-10 border-l-4 border-l-blue-500 shadow-sm hover-lift hover:shadow-xl hover:border-zinc-300/80 transition-all duration-300">
                  <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">{v.title}</p>
                  <p className="mt-3 text-zinc-900 font-medium leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Full-stack expertise */}
      <section id="services" className="section-normal relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-blue-50/30 pointer-events-none" aria-hidden />
        <div className="container-main relative">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 pt-2">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-blue-600 bg-blue-50 border border-blue-200/60 mb-4">Everything we do</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-zinc-900 tracking-tight leading-[1.15]">From Concept to Completion: Our Full-Stack Expertise.</h2>
            <div className="mt-4 w-16 h-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-400 mx-auto" />
            <p className="mt-6 text-lg text-zinc-600">Seven pillars of expertise that power your product from idea to launch and beyond.</p>
          </div>
          <div className="relative mt-10 md:mt-12">
            <div className="full-stack-carousel flex gap-7 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth" ref={scrollRef} onScroll={handleScroll}>
              {EXPERTISE.map((item, i) => {
                const imgSrc = getImageSrc(SKILLS_IMAGES[i])
                const imageFailed = loadedImages[i] === false
                return (
                  <article key={item.title} data-card className="shrink-0 w-[360px] sm:w-[420px] snap-center group">
                    <div className="rounded-2xl overflow-hidden shadow-lg border border-zinc-200/80 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 hover:border-zinc-300/80 relative h-[520px] bg-zinc-100">
                      {!imageFailed ? (
                        <>
                          <div className="absolute top-0 left-0 right-0 h-[320px] z-0">
                            <img src={imgSrc} alt="" className="w-full h-full object-cover" onError={() => handleImageError(i)} onLoad={(e) => handleImageLoad(e, i)} />
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 top-[320px] z-[1]" style={{ background: barColors[i] ?? '#000000' }} aria-hidden />
                          <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col text-white z-[2]">
                            <h3 className="text-xl font-bold leading-tight tracking-tight">{item.title}</h3>
                            <p className="mt-3 text-sm text-white/90 line-clamp-3 leading-relaxed">{item.subtitle}</p>
                            <a href="#contact" className={`mt-5 inline-flex items-center gap-1.5 self-start px-4 py-2.5 rounded-xl text-sm font-semibold border-2 transition-all duration-200 ${BTN_STYLE}`}>
                              Read more
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </a>
                          </div>
                        </>
                      ) : (
                        <div className="absolute inset-0 z-0 bg-zinc-200 rounded-2xl p-6 flex flex-col text-zinc-900">
                          <h3 className="text-xl font-bold leading-tight tracking-tight">{item.title}</h3>
                          <p className="mt-3 text-sm line-clamp-3 leading-relaxed">{item.subtitle}</p>
                          <a href="#contact" className="mt-5 inline-flex items-center gap-1.5 self-start px-4 py-2.5 rounded-xl text-sm font-semibold border-2 border-zinc-400 text-zinc-800 hover:bg-zinc-300">Read more <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></a>
                        </div>
                      )}
                    </div>
                  </article>
                )
              })}
            </div>
            <button type="button" onClick={() => scrollTo(scrollIndex - 1)} aria-label="Previous cards" className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-12 h-12 rounded-full bg-white border border-zinc-200 shadow-lg items-center justify-center text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 hover:border-zinc-300 transition-all z-10">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button type="button" onClick={() => scrollTo(scrollIndex + 1)} aria-label="Next cards" className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-12 h-12 rounded-full bg-white border border-zinc-200 shadow-lg items-center justify-center text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 hover:border-zinc-300 transition-all z-10">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-normal bg-section-muted">
        <div className="container-main">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-zinc-900 text-center tracking-tight">Our process. Simple, seamless, streamlined.</h2>
          <div className="mt-12 md:mt-14 grid md:grid-cols-3 gap-6 md:gap-10 lg:gap-12">
            {STEPS.map((s, i) => (
              <div key={s.step} className="relative rounded-2xl border-2 border-zinc-200/80 bg-white p-5 md:p-6 lg:p-8 shadow-sm hover:shadow-md hover:border-blue-200/50 transition-all">
                <span className="inline-flex w-11 h-11 rounded-2xl bg-blue-500/10 text-blue-600 font-bold text-lg items-center justify-center">{i + 1}</span>
                <p className="mt-3 text-xs font-semibold text-blue-600 uppercase tracking-wider">{s.step}</p>
                <h3 className="mt-1 text-xl font-bold text-zinc-900">{s.title}</h3>
                <p className="mt-3 text-zinc-600 leading-relaxed">{s.desc}</p>
                {s.step !== 'Step 3' && <div className="hidden md:block absolute top-1/2 -right-4 lg:-right-6 w-6 h-0.5 bg-gradient-to-r from-blue-200 to-transparent rounded-full" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="blog" className="section-normal bg-section-light">
        <div className="container-main max-w-3xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight">Frequently asked questions</h2>
            <p className="mt-3 text-base md:text-lg text-zinc-600">Quick answers to common questions.</p>
          </AnimatedSection>
          <AnimatedSection stagger>
            <div className="space-y-3">
              {FAQ.map((item, i) => (
                <div key={i} className={`rounded-2xl border-2 overflow-hidden transition-all duration-300 ${faqOpen === i ? 'border-blue-300 bg-blue-50/30 shadow-md' : 'border-zinc-200/80 bg-white hover:border-zinc-300'}`}>
                  <button type="button" onClick={() => setFaqOpen(faqOpen === i ? -1 : i)} className="w-full flex items-center justify-between gap-4 px-4 md:px-6 py-4 md:py-5 text-left">
                    <span className="font-semibold text-zinc-900 text-sm md:text-base">{item.q}</span>
                    <span className={`text-2xl text-zinc-400 transition-transform duration-300 shrink-0 ${faqOpen === i ? 'rotate-45' : ''}`}>+</span>
                  </button>
                  <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${faqOpen === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="min-h-0 overflow-hidden">
                      <p className="px-4 md:px-6 pb-5 pt-0 text-zinc-600 leading-relaxed text-sm md:text-base">{item.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact */}
              <section id="contact" className="section-normal relative overflow-hidden bg-white">
  <div className="container-main relative max-w-5xl">
    <div className="rounded-3xl border border-zinc-200 bg-white shadow-xl overflow-hidden">
      <div className="grid grid-cols-2 min-h-[420px]">
        <div className="p-4 sm:p-6 md:p-8 lg:p-10 min-w-0">
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-xl font-semibold text-zinc-900">Email client opened</p>
              <p className="mt-2 text-zinc-600">Please send the message from your email app. We&apos;ll reply soon.</p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-6 px-5 py-2.5 rounded-xl text-sm font-medium text-blue-600 hover:bg-blue-50 transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-zinc-700 mb-2">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-zinc-700 mb-2">
                  E-mail
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-zinc-700 mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-y min-h-[100px]`}
                  placeholder="Enter your message..."
                />
              </div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  required
                  className="mt-1 w-4 h-4 rounded border-2 border-zinc-300 bg-white text-blue-500 focus:ring-2 focus:ring-blue-500/30 accent-blue-500"
                />
                <span className="text-sm text-zinc-600">
                  I agree to the processing of the personal data provided
                </span>
              </label>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 rounded-2xl font-bold text-white uppercase tracking-wider bg-gradient-to-b from-blue-400 to-blue-600 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 hover:from-blue-300 hover:to-blue-500 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Sending...' : 'Send'}
              </button>
            </form>
          )}
        </div>

        <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-zinc-50 border-l border-zinc-200 flex flex-col justify-center min-w-0">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-600 uppercase tracking-wider">
            Contact us
          </h3>
          <p className="mt-4 text-zinc-600 leading-relaxed">
            Customer satisfaction is our top priority! Our support service is available to assist you
            with any questions about our services: software development, consulting, project
            inquiries, and more.
          </p>
          <p className="mt-3 text-zinc-500 text-sm">You can contact us any way you prefer:</p>

          <div className="mt-6 flex gap-3">
            {[
              {
                label: 'Email',
                href: 'mailto:info@infinya.tech',
                icon: 'mail',
              },
              {
                label: 'Phone',
                href: 'tel:+0000000000',
                icon: 'phone',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/infinya.tech/',
                icon: 'instagram',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/share/1Cbk7mYUui/',
                icon: 'facebook',
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-blue-200 bg-white flex items-center justify-center text-blue-600 hover:border-blue-500 hover:bg-blue-50 transition-all"
              >
                {item.icon === 'mail' && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )}
                {item.icon === 'phone' && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                )}
                {item.icon === 'instagram' && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="5" ry="5" strokeWidth={2} />
                    <circle cx="12" cy="12" r="4" strokeWidth={2} />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                )}
                {item.icon === 'facebook' && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12a10 10 0 10-11.5 9.87v-6.99H8.08V12h2.42V9.8c0-2.4 1.43-3.72 3.62-3.72 1.05 0 2.15.19 2.15.19v2.36h-1.21c-1.2 0-1.57.75-1.57 1.51V12h2.67l-.43 2.88h-2.24v6.99A10 10 0 0022 12z" />
                  </svg>
                )}
              </a>
            ))}
          </div>

          <div className="mt-8 opacity-40">
            <svg viewBox="0 0 200 80" className="w-full h-24 text-blue-300" fill="none" stroke="currentColor" strokeWidth="0.5">
              <circle cx="30" cy="40" r="2" fill="currentColor" />
              <circle cx="100" cy="25" r="2" fill="currentColor" />
              <circle cx="170" cy="40" r="2" fill="currentColor" />
              <circle cx="100" cy="55" r="2" fill="currentColor" />
              <line x1="30" y1="40" x2="100" y2="25" />
              <line x1="100" y1="25" x2="170" y2="40" />
              <line x1="170" y1="40" x2="100" y2="55" />
              <line x1="100" y1="55" x2="30" y2="40" />
              <line x1="100" y1="25" x2="100" y2="55" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}
