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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-blue-950 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.25),transparent)]" />
        <div className="container-main relative py-24 md:py-32 lg:py-40">
          <p className="text-blue-300/90 text-sm font-medium uppercase tracking-[0.2em] mb-4">Our Work</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight max-w-3xl">
            What we build.
            <br />
            <span className="text-blue-200/90">Real solutions for real needs.</span>
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-xl">
            Explore the software we've delivered—from education platforms to operations tools that help businesses run better.
          </p>
        </div>
      </section>

      <section className="relative -mt-16 md:-mt-24 z-10">
        <div className="container-main px-4 sm:px-6">
          <article className="rounded-3xl overflow-hidden bg-white shadow-2xl shadow-black/10 border border-zinc-100">
            <div className="px-8 sm:px-10 lg:px-12 pt-8 sm:pt-10 pb-4 border-b border-zinc-100">
              <span className="inline-block text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">Featured Project</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
                HMS <span className="font-normal text-zinc-500"> · Hostel Management System</span>
              </h2>
            </div>
            <div className="grid lg:grid-cols-[1fr_1fr] lg:gap-2 min-h-[480px]">
              <div className="relative bg-zinc-50 p-6 sm:p-8 lg:pr-4 flex flex-col justify-center lg:justify-center lg:items-end">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center lg:justify-end">
                  <div className="w-full max-w-[560px] lg:max-w-[480px]">
                    <div className="rounded-2xl overflow-hidden border border-zinc-200 shadow-lg bg-white">
                      <div className="px-3 py-2 border-b border-zinc-100 flex items-center gap-2 bg-zinc-50">
                        <span className="w-2 h-2 rounded-full bg-red-400" /><span className="w-2 h-2 rounded-full bg-amber-400" /><span className="w-2 h-2 rounded-full bg-emerald-400" />
                      </div>
                      <div className="aspect-video min-h-[360px] flex items-center justify-center p-2 bg-zinc-100/50 relative">
                        {desktopImgError ? <span className="text-zinc-400 text-xs">Add HMS PC.png to public</span> : (
                          <img src={HMS_PC_IMAGE} alt="HMS desktop" className="max-w-full max-h-full object-contain" onError={() => setDesktopImgError(true)} />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="w-[200px] sm:w-[260px]">
                    <div className="rounded-xl overflow-hidden border border-zinc-200 shadow-md bg-white aspect-[9/19] max-h-[420px] flex items-center justify-center">
                      {mobileImgError ? <span className="text-zinc-400 text-[10px] text-center px-2">Add HMS mobile.jpeg</span> : (
                        <img src={HMS_MOBILE_IMAGE} alt="HMS mobile" className="w-full h-full object-contain" onError={() => setMobileImgError(true)} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8 sm:p-10 lg:p-12 lg:pl-2 flex flex-col justify-center">
                <p className="text-zinc-600 leading-relaxed">
                  We built HMS to streamline hostel operations. One platform serves multiple hostels—each with its own dashboard, students, staff, rooms, leave requests, and payments. Deployed once, scaled everywhere.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-zinc-600">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />Student & staff registration, room allocation, leave tracking</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />Automated fee and salary calculations</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />Per-hostel dashboards, PostgreSQL multi-tenancy</li>
                </ul>
                <p className="mt-6 text-xs text-zinc-500 font-mono">Django · React · PostgreSQL · REST API</p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}
