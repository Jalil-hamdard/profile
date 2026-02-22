import AnimatedSection from '../components/AnimatedSection'

// --- DATA: LEADERSHIP ---
const LEADERSHIP = [
  {
    image: '/me.png',
    name: 'Baryalai Khushal',
    role: 'Founder & Chief Executive Officer',
    bio: "Directing the firm's global expansion and strategic vision. Baryalai is committed to positioning Infinya as a premier engineering partner for international enterprises, leveraging top-tier talent from Afghanistan to deliver world-class digital solutions.",
    tags: ['Strategic Vision', 'Corporate Governance', 'Growth'],
  },
  {
    image: '/cto.jpeg',
    name: 'Abdul Jalil Stanikzai',
    role: 'Founder & Chief Technology Officer',
    bio: 'Architecting high-performance systems and AI-driven roadmaps. Stanikzai leads our engineering standards, ensuring scalability and security are at the core of every product deployed across our 50+ technology stacks.',
    tags: ['System Architecture', 'AI Governance', 'Engineering'],
  },
]

// --- DATA: CORE VALUES ---
const VALUES = [
  { title: 'Global Delivery Hub', subtitle: 'Strategically headquartered in Afghanistan, providing 24/7 delivery and support across multiple timezones.' },
  { title: 'Absolute Transparency', subtitle: 'We maintain open communication lines throughout the development lifecycle to ensure project alignment.' },
  { title: 'Modern Engineering', subtitle: 'Founded in 2025, we utilize the latest AI and software frameworks to build future-proof solutions.' },
  { title: 'Strategic Partnership', subtitle: "We don't just build software; we integrate with your team to drive long-term business value." },
  { title: 'Industry Versatility', subtitle: 'With expertise in 15+ industries, we understand the specific compliance and logic of your sector.' },
  { title: 'Reliability Guarantee', subtitle: 'A fresh approach backed by rigorous QA standards ensures we deliver exactly what we promise.' },
]

export default function OurStory() {
  return (
    <div className="relative bg-white text-zinc-900 overflow-hidden">
      
      {/* --- SHARED BACKGROUND MESH --- */}
      <div className="absolute top-0 left-1/4 -z-10 h-[300px] w-[300px] md:h-[600px] md:w-[600px] animate-pulse rounded-full bg-blue-100/50 blur-[80px] md:blur-[120px]" />
      <div className="absolute top-40 right-1/4 -z-10 h-[250px] w-[250px] md:h-[500px] md:w-[500px] animate-pulse rounded-full bg-indigo-50/50 blur-[60px] md:blur-[100px] delay-700" />

      {/* --- HERO: THE VISION --- */}
      <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-32 px-4">
        <div className="container-main mx-auto max-w-7xl">
          <AnimatedSection className="max-w-4xl">
            <div className="mb-6 flex items-center gap-2">
              <span className="h-[1px] w-8 bg-blue-600"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">The Infinya Standard</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl lg:text-7xl leading-tight">
              Scaling Businesses through <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-transparent">Digital Intelligence.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-zinc-600 max-w-2xl">
              Infinya is a full-cycle technology firm. We bridge the gap between complex requirements and high-performance execution, helping global partners innovate with confidence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* --- STRATEGY & OPERATIONS --- */}
      <section className="py-16 lg:py-24 px-4">
        <div className="container-main mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-zinc-900">Our Strategic Mission</h2>
              <p className="mt-6 text-lg leading-relaxed text-zinc-600">
                Established to provide technical excellence with absolute integrity, Infinya specializes in deploying intelligent software. From our headquarters in Afghanistan, we manage a worldwide delivery network that operates with precision and speed.
              </p>
              <div className="mt-10 space-y-4">
                {['Agile Development Cycle', 'AI-Enhanced Workflows', 'Enterprise Security Standards'].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-sm font-semibold text-zinc-700">{point}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Visual Card - Stacked on mobile */}
            <AnimatedSection delay={200}>
              <div className="relative aspect-video w-full overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-900 p-6 sm:p-8 shadow-2xl transition-transform hover:scale-[1.02] duration-500">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#2563eb 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="min-w-0">
                      <h4 className="font-bold text-white truncate text-sm sm:text-base">Global Delivery Network</h4>
                      <p className="text-[10px] sm:text-xs text-zinc-400">Real-time Operations</p>
                    </div>
                    <div className="rounded-full bg-green-500/10 px-2 py-1 text-[9px] font-bold text-green-500 border border-green-500/20 whitespace-nowrap">LIVE SYSTEM</div>
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

      {/* --- VALUES GRID --- */}
      <section className="relative py-16 lg:py-24 px-4 bg-zinc-50/50">
        <div className="container-main mx-auto max-w-7xl">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-zinc-900">What We Stand For</h2>
            <p className="mt-4 text-zinc-600">The core principles that drive every Infinya project.</p>
          </AnimatedSection>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v, i) => (
              <AnimatedSection key={i} delay={i * 50}>
                <div className="h-full rounded-3xl border border-zinc-200/60 bg-white p-8 transition-all hover:border-blue-300 hover:shadow-xl group">
                  <div className="mb-4 text-xs font-black text-blue-600/30 italic group-hover:text-blue-600 transition-colors">0{i + 1}</div>
                  <h3 className="text-lg font-bold text-zinc-900">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-500">{v.subtitle}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* --- LEADERSHIP --- */}
      <section className="py-16 lg:py-32 px-4">
        <div className="container-main mx-auto max-w-7xl">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-3xl font-bold text-zinc-900">Executive Leadership</h2>
            <p className="mt-2 text-zinc-600">Building the future of Afghan technology.</p>
          </div>
          <div className="grid gap-8">
            {LEADERSHIP.map((person, index) => (
              <AnimatedSection key={person.name} delay={index * 100}>
                <div className="group flex flex-col gap-6 rounded-[2rem] border border-zinc-200/60 bg-white p-6 sm:p-8 md:flex-row md:items-start hover:border-blue-200 transition-all">
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    className="h-32 w-32 md:h-40 md:w-40 mx-auto md:mx-0 rounded-2xl object-cover shadow-lg grayscale group-hover:grayscale-0 transition-all duration-500" 
                    onError={(e) => { e.target.src = 'https://placehold.co/400x400/2563eb/white?text=Leadership'; }} 
                  />
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-zinc-900">{person.name}</h3>
                    <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mt-1">{person.role}</p>
                    <p className="mt-4 text-sm md:text-base leading-relaxed text-zinc-600">{person.bio}</p>
                    <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
                      {person.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold uppercase tracking-tight text-zinc-400 border-b border-zinc-200 pb-1">
                          {tag}
                        </span>
                      ))}
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