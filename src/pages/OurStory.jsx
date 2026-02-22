import AnimatedSection from '../components/AnimatedSection'

// --- DATA: LEADERSHIP ---
const LEADERSHIP = [
  {
    image: '/me.png',
    name: 'Baryalai Khushal',
    role: 'Founder & Chief Executive Officer',
    // FIXED: Used double quotes to allow the apostrophe in "firm's"
    bio: "Directing the firm's global expansion and strategic vision. Baryalai is committed to positioning Infinya as a premier engineering partner for international enterprises, leveraging top-tier talent from Afghanistan to deliver world-class digital solutions.",
    tags: ['Strategic Vision', 'Corporate Governance', 'Growth'],
  },
  {
    image: '/cto.jpeg',
    name: 'Abdul Jalil Stanikzai',
    role: 'Founder & Chief Technology Officer',
    bio: 'Architecting high-performance systems and AI-driven roadmaps. Abdul leads our engineering standards, ensuring scalability and security are at the core of every product deployed across our 50+ technology stacks.',
    tags: ['System Architecture', 'AI Governance', 'Engineering'],
  },
]

// --- DATA: CORE VALUES ---
const VALUES = [
  { title: 'Global Delivery Hub', subtitle: 'Strategically headquartered in Afghanistan, providing 24/7 delivery and support across multiple timezones.' },
  { title: 'Absolute Transparency', subtitle: 'We maintain open communication lines throughout the development lifecycle to ensure project alignment.' },
  { title: 'Modern Engineering', subtitle: 'Founded in 2025, we utilize the latest AI and software frameworks to build future-proof solutions.' },
  // FIXED: Used double quotes to allow the apostrophe in "don't"
  { title: 'Strategic Partnership', subtitle: "We don't just build software; we integrate with your team to drive long-term business value." },
  { title: 'Industry Versatility', subtitle: 'With expertise in 15+ industries, we understand the specific compliance and logic of your sector.' },
  { title: 'Reliability Guarantee', subtitle: 'A fresh approach backed by rigorous QA standards ensures we deliver exactly what we promise.' },
]

export default function OurStory() {
  return (
    <div className="relative bg-white text-zinc-900 overflow-hidden">
      
      {/* --- SHARED BACKGROUND MESH (Header Style) --- */}
      <div className="absolute top-0 left-1/4 -z-10 h-[600px] w-[600px] animate-pulse rounded-full bg-blue-100/50 blur-[120px]" />
      <div className="absolute top-40 right-1/4 -z-10 h-[500px] w-[500px] animate-pulse rounded-full bg-indigo-50/50 blur-[100px] delay-700" />

      {/* --- HERO: THE VISION --- */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32">
        <div className="container-main">
          <AnimatedSection className="max-w-3xl">
            <div className="mb-6 flex items-center gap-2">
              <span className="h-[1px] w-8 bg-blue-600"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">The Infinya Standard</span>
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight text-zinc-900 lg:text-7xl">
              Scaling Businesses through <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-transparent">Digital Intelligence.</span>
            </h1>
            <p className="mt-8 text-xl leading-relaxed text-zinc-600 max-w-2xl">
              Infinya is a full-cycle technology firm. We bridge the gap between complex requirements and high-performance execution, helping global partners innovate with confidence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* --- STRATEGY & OPERATIONS --- */}
      <section className="py-24 lg:py-32">
        <div className="container-main">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-zinc-900">Our Strategic Mission</h2>
              <p className="mt-6 text-lg leading-relaxed text-zinc-600">
                Established to provide technical excellence with absolute integrity, Infinya specializes in deploying intelligent software. From our headquarters in Afghanistan, we manage a worldwide delivery network that operates with precision and speed.
              </p>
              <div className="mt-10 space-y-4">
                {['Agile Development Cycle', 'AI-Enhanced Workflows', 'Enterprise Security Standards'].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-sm font-semibold text-zinc-700">{point}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative aspect-video overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-zinc-900 p-8 shadow-2xl transition-transform hover:scale-[1.02] duration-500">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#2563eb 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-white">Global Delivery Network</h4>
                      <p className="text-xs text-zinc-400">Real-time Operations Monitoring</p>
                    </div>
                    <div className="rounded-full bg-green-500/10 px-2 py-1 text-[10px] font-bold text-green-500 border border-green-500/20">LIVE SYSTEM</div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="relative">
                      <div className="h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
                      <div className="absolute inset-0 animate-ping rounded-full bg-blue-400 opacity-50" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 border-t border-zinc-800 pt-6">
                    <div><p className="text-[10px] uppercase tracking-tighter text-zinc-500">Industry Reach</p><p className="text-xl font-bold text-white">15+</p></div>
                    <div><p className="text-[10px] uppercase tracking-tighter text-zinc-500">Tech Expertise</p><p className="text-xl font-bold text-white">50+</p></div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* --- VALUES GRID (Glass Style) --- */}
      <section className="relative py-24">
        <div className="container-main">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl font-bold text-zinc-900">What We Stand For</h2>
            <p className="mt-4 text-zinc-600">The core principles that drive every Infinya project.</p>
          </AnimatedSection>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v, i) => (
              <AnimatedSection key={i} delay={i * 50}>
                <div className="h-full rounded-3xl border border-zinc-200/60 bg-white/40 p-8 backdrop-blur-md transition-all hover:border-blue-300 hover:bg-white/60 hover:shadow-lg">
                  <div className="mb-4 text-xs font-black text-blue-600/30 italic">0{i + 1}</div>
                  <h3 className="text-lg font-bold text-zinc-900">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-500">{v.subtitle}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* --- LEADERSHIP --- */}
      <section className="py-24 lg:py-32">
        <div className="container-main">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-zinc-900">Executive Leadership</h2>
            <p className="mt-2 text-zinc-600">Building the future of Afghan technology.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {LEADERSHIP.map((person, index) => (
              <AnimatedSection key={person.name} delay={index * 100}>
                <div className="group flex flex-col gap-8 rounded-[2rem] border border-zinc-200/60 bg-white/40 p-8 backdrop-blur-md md:flex-row md:items-center hover:bg-white/60 transition-colors">
                  <img src={person.image} alt={person.name} className="h-32 w-32 rounded-2xl object-cover shadow-lg grayscale group-hover:grayscale-0 transition-all duration-500" onError={(e) => { e.target.src = 'https://placehold.co/400x400/2563eb/white?text=Leadership'; }} />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-zinc-900">{person.name}</h3>
                    <p className="text-sm font-bold text-blue-600 uppercase tracking-widest">{person.role}</p>
                    <p className="mt-4 text-sm leading-relaxed text-zinc-600">{person.bio}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {person.tags.map(tag => (<span key={tag} className="text-[10px] font-bold uppercase tracking-tight text-zinc-400 border-b border-zinc-200 pb-1">{tag}</span>))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}