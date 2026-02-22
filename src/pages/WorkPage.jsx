import { useState } from 'react'

const HMS_MOBILE_IMAGE = '/HMS%20mobile.jpeg'
const HMS_PC_IMAGE = '/HMS%20PC.png'
const HMS_PAGES_BASE = '/HMS%20images'

export default function WorkPage() {
  const [desktopImgError, setDesktopImgError] = useState(false)
  const [mobileImgError, setMobileImgError] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-blue-950 to-slate-900" />
        <div className="container-main relative py-20 sm:py-24 md:py-32 lg:py-40 px-4">
          <p className="text-blue-300/90 text-sm font-medium uppercase tracking-[0.2em] mb-4">Our Work</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight max-w-4xl">
            What we build.
            <br />
            <span className="text-blue-200/90">Real solutions for real needs.</span>
          </h1>
        </div>
      </section>

      {/* --- FEATURED PROJECT SECTION --- */}
      <section className="relative -mt-12 md:-mt-20 z-10 pb-20 px-4">
        <div className="container-main max-w-[1400px] mx-auto">
          <article className="rounded-3xl overflow-hidden bg-white shadow-2xl shadow-black/10 border border-zinc-100">
            
            {/* Project Header */}
            <div className="px-6 sm:px-10 lg:px-12 py-8 border-b border-zinc-100">
              <span className="inline-block text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">Featured Project</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
                HMS <span className="font-normal text-zinc-400 text-lg sm:text-2xl">· Hostel Management System</span>
              </h2>
            </div>

            {/* Main Content Grid: 66% Left (Images/Tech) | 34% Right (Text) */}
            <div className="grid lg:grid-cols-3">
              
              {/* LEFT SIDE (66.6% width) */}
              <div className="lg:col-span-2 bg-zinc-50 p-6 sm:p-10 lg:p-14 flex flex-col border-b lg:border-b-0 lg:border-r border-zinc-100">
                
                {/* Images Container */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12 flex-grow mb-12">
                  
                  {/* Desktop Mockup - Primary Focus */}
                  <div className="flex-[2.5] w-full rounded-xl overflow-hidden border border-zinc-200 shadow-2xl bg-white">
                    <div className="px-3 py-2 border-b border-zinc-100 flex items-center gap-1.5 bg-zinc-50">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      </div>
                      <div className="mx-auto bg-zinc-200 h-1.5 w-1/3 rounded-full opacity-50" />
                    </div>
                    <div className="aspect-[16/10] bg-white overflow-hidden">
                      {desktopImgError ? (
                        <div className="w-full h-full flex items-center justify-center text-zinc-400 text-xs">Desktop Image Missing</div>
                      ) : (
                        <img 
                          src={HMS_PC_IMAGE} 
                          alt="Desktop View" 
                          className="w-full h-full object-contain" 
                          onError={() => setDesktopImgError(true)} 
                        />
                      )}
                    </div>
                  </div>

                  {/* Phone Mockup - Scaled Down Secondary View */}
                  <div className="flex-1 min-w-[140px] max-w-[180px] shrink-0">
                    <div className="rounded-[2.5rem] border-[6px] border-zinc-300 bg-white shadow-xl aspect-[9/19] relative overflow-hidden flex items-center justify-center p-1">
                      {mobileImgError ? (
                        <div className="text-[10px] text-zinc-400">Mobile Missing</div>
                      ) : (
                        <img 
                          src={HMS_MOBILE_IMAGE} 
                          alt="Mobile View" 
                          className="w-full h-full object-contain rounded-[1.8rem]" 
                          onError={() => setMobileImgError(true)} 
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* Tech Stack - Positioned at bottom of the image area */}
                <div className="pt-8 border-t border-zinc-200 mt-auto">
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4">Core Technology Stack</p>
                  <div className="flex flex-wrap gap-3">
                    {['Django', 'React', 'PostgreSQL', 'REST API', 'Tailwind CSS'].map(tech => (
                      <span key={tech} className="px-4 py-2 bg-white border border-zinc-200 text-zinc-700 text-xs font-bold rounded-lg shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE (33.3% width) */}
              <div className="lg:col-span-1 p-8 sm:p-10 lg:p-12 bg-white flex flex-col justify-start">
                <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-widest mb-6 border-b border-zinc-100 pb-2 text-blue-600">Project Overview</h4>
                <p className="text-zinc-600 text-base leading-relaxed mb-8">
                  We built HMS to streamline hostel operations. One platform serves multiple hostels—each with its own dashboard, students, staff, rooms, leave requests, and payments. Deployed once, scaled everywhere.
                </p>
                
                <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-widest mb-4">Core Capabilities</h4>
                <ul className="space-y-5">
                  {[
                    'Student & staff registration, room allocation, leave tracking',
                    'Automated fee and salary calculations',
                    'Per-hostel dashboards, PostgreSQL multi-tenancy',
                    'Support three different languages (English, Dari, Pashto)',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-sm text-zinc-600 leading-snug">
                      <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 shadow-md shadow-blue-200" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </article>
        </div>
      </section>
    </main>
  )
}