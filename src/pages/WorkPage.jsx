import { useState } from 'react'

const HMS_MOBILE_IMAGE = '/HMS%20mobile.jpeg'
const HMS_PC_IMAGE = '/HMS%20PC.png'
const HMS_PAGES_BASE = '/HMS%20images'
const HMS_SCREENS = [
  { src: HMS_MOBILE_IMAGE },
  { src: HMS_PC_IMAGE },
  { src: `${HMS_PAGES_BASE}/1.png` },
  { src: `${HMS_PAGES_BASE}/2.png` },
  { src: `${HMS_PAGES_BASE}/3.png` },
  { src: `${HMS_PAGES_BASE}/4.png` },
]
const HMS_SCREEN_LABELS = ['Mobile', 'Desktop', 'Dashboard', 'Rooms', 'Students', 'Payments']

export default function WorkPage() {
  const [desktopImgError, setDesktopImgError] = useState(false)
  const [mobileImgError, setMobileImgError] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-blue-950 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.25),transparent)]" />
        <div className="container-main relative py-20 sm:py-24 md:py-32 lg:py-40 px-4">
          <p className="text-blue-300/90 text-sm font-medium uppercase tracking-[0.2em] mb-4">Our Work</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight max-w-4xl">
            What we build.
            <br />
            <span className="text-blue-200/90">Real solutions for real needs.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
            Explore the software we&apos;ve delivered—from education platforms to operations tools that help businesses run better.
          </p>
        </div>
      </section>

      {/* --- FEATURED PROJECT SECTION --- */}
      <section className="relative -mt-12 md:-mt-20 z-10 pb-20 px-4">
        <div className="container-main max-w-6xl mx-auto">
          <article className="rounded-3xl overflow-hidden bg-white shadow-2xl shadow-black/10 border border-zinc-100">
            {/* Project Header */}
            <div className="px-6 sm:px-10 lg:px-12 py-8 border-b border-zinc-100">
              <span className="inline-block text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">Featured Project</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 flex flex-wrap items-center gap-2">
                HMS <span className="font-normal text-zinc-400 text-lg sm:text-2xl">· Hostel Management System</span>
              </h2>
            </div>

            {/* Project Content Grid */}
            <div className="grid lg:grid-cols-2">
              
              {/* Image Preview Area */}
              <div className="bg-zinc-50 p-6 sm:p-10 flex flex-col items-center justify-center gap-6 border-b lg:border-b-0 lg:border-r border-zinc-100">
                <div className="relative w-full">
                  {/* Desktop Mockup */}
                  <div className="rounded-xl overflow-hidden border border-zinc-200 shadow-xl bg-white mb-6">
                    <div className="px-3 py-2 border-b border-zinc-100 flex items-center gap-1.5 bg-zinc-50">
                      <span className="w-2 h-2 rounded-full bg-red-400" />
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                    <div className="aspect-video flex items-center justify-center bg-zinc-100/50">
                      {desktopImgError ? (
                        <span className="text-zinc-400 text-xs px-4 text-center">Desktop Preview Placeholder</span>
                      ) : (
                        <img src={HMS_PC_IMAGE} alt="HMS desktop" className="w-full h-full object-cover" onError={() => setDesktopImgError(true)} />
                      )}
                    </div>
                  </div>

                  {/* Mobile Mockup (Floating on Desktop, Stacked on Mobile) */}
                  <div className="relative lg:absolute -bottom-4 -right-2 lg:-right-4 w-1/2 sm:w-1/3 lg:w-[180px] mx-auto lg:mx-0">
                    <div className="rounded-[2rem] overflow-hidden border-4 border-zinc-900 shadow-2xl bg-zinc-900 aspect-[9/19]">
                      {mobileImgError ? (
                        <div className="w-full h-full flex items-center justify-center bg-zinc-800 text-[10px] text-zinc-500 p-4 text-center">Mobile Preview</div>
                      ) : (
                        <img src={HMS_MOBILE_IMAGE} alt="HMS mobile" className="w-full h-full object-cover" onError={() => setMobileImgError(true)} />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Info Area */}
              <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
                  We built HMS to streamline hostel operations. One platform serves multiple hostels—each with its own dashboard, students, staff, rooms, leave requests, and payments. Deployed once, scaled everywhere.
                </p>
                
                <div className="mt-8 space-y-4">
                  <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-widest">Core Capabilities</h4>
                  <ul className="space-y-3">
                    {[
                      'Student & staff registration, room allocation, leave tracking',
                      'Automated fee and salary calculations',
                      'Per-hostel dashboards, PostgreSQL multi-tenancy'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-zinc-600">
                        <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 pt-8 border-t border-zinc-100">
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {['Django', 'React', 'PostgreSQL', 'REST API'].map(tech => (
                      <span key={tech} className="px-3 py-1 bg-zinc-100 text-zinc-600 text-xs font-medium rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </article>
        </div>
      </section>
    </main>
  )
}