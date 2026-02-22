import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
const onAnchor = (close) => (e) => {
  const href = e.currentTarget.getAttribute('href');
  if (href?.startsWith('#')) { e.preventDefault(); scrollTo(href.slice(1)); }
  close?.();
};

function Dropdown({ label, open, setOpen, children }) {
  const t = useRef(null);
  const enter = () => { if (t.current) clearTimeout(t.current); setOpen(label); };
  const leave = () => { t.current = setTimeout(() => setOpen(null), 180); };
  const isOpen = open === label;
  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <span className="flex cursor-default items-center gap-1 py-4 text-sm font-medium text-zinc-700 hover:text-zinc-900">
        {label}
        <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </span>
      {isOpen && (
        <>
          <div className="fixed inset-0 top-16 md:top-20 z-40" aria-hidden onMouseEnter={enter} onMouseLeave={leave} onClick={() => setOpen(null)} />
          <div className="fixed left-4 right-4 top-20 z-50 mx-auto max-w-4xl rounded-2xl border border-zinc-200/80 bg-white/95 py-4 px-4 shadow-xl backdrop-blur-xl md:py-5 md:px-6 lg:py-6 lg:px-8 max-h-[min(80vh,32rem)] overflow-y-auto" onMouseEnter={enter} onMouseLeave={leave}>{children}</div>
        </>
      )}
    </div>
  );
}

const pill = 'px-2.5 py-1 md:px-3 md:py-1.5 bg-zinc-100 rounded text-xs md:text-sm hover:bg-blue-50 hover:text-blue-700';

export default function Header() {
  const [open, setOpen] = useState(null);
  const [mobile, setMobile] = useState(false);
  const [exp, setExp] = useState(null);
  const close = () => setOpen(null);
  const closeMobile = () => { setMobile(false); setExp(null); };
  const go = onAnchor(close);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 shadow-sm backdrop-blur-xl">
      <div className="container-main">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link to="/" className="shrink-0" onClick={() => { closeMobile(); setOpen(null); }} aria-label="Infinya - Home">
            <img src="/logo.png" alt="Infinya" className="h-10 w-auto md:h-14" />
          </Link>

          <nav className="hidden md:flex md:items-center md:gap-3">
            <Dropdown label="Technologies" open={open} setOpen={setOpen}>
              <p className="mb-3 text-xs text-zinc-600 md:mb-4 md:text-sm">Experts in 50+ technologies, with a strong focus on AI and Cybersecurity.</p>
              <div className="mb-3 flex flex-wrap gap-1.5 md:mb-4 md:gap-2">{['AI & Machine Learning', 'Cybersecurity', 'Full-Stack'].map((t) => <span key={t} className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700 md:px-3 md:py-1 md:text-sm">{t}</span>)}</div>
              <div className="flex flex-wrap gap-1.5 md:gap-2">{['AI & ML', 'Cybersecurity', 'Machine Learning', 'Python', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'Java',  'Vue.js', 'PHP', 'Django', 'AWS', 'MySQL', 'PostgreSQL', 'Git', 'Docker', 'Linux'].map((t) => <a key={t} href="#technologies" onClick={go} className={pill}>{t}</a>)}</div>
            </Dropdown>
            <Dropdown label="Industries" open={open} setOpen={setOpen}>
              <p className="mb-3 text-xs text-zinc-600 md:mb-4 md:text-sm">We serve a wide range of industries and sectors.</p>
              <div className="flex flex-wrap gap-1.5 md:gap-2">{['Agriculture', 'Automotive', 'Aviation', 'Banking', 'Construction', 'Entertainment', 'Finance', 'Startups', 'Healthcare', 'Insurance', 'Martech', 'Oil and Gas', 'Real Estate', 'Retail', 'Supply Chain', 'Telecommunications', 'Transportation and Logistics', 'Travel and Hospitality'].map((i) => <a key={i} href="#industries" onClick={go} className={pill}>{i}</a>)}</div>
            </Dropdown>
            <Link to="/about" onClick={close} className="px-4 py-4 text-sm font-medium text-zinc-700 hover:text-zinc-900">Our Story</Link>
            <Link to="/work" onClick={close} className="px-4 py-4 text-sm font-medium text-zinc-700 hover:text-zinc-900">Our Work</Link>
          </nav>

          <div className="hidden md:block">
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }} className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:shadow-blue-500/30">Contact Us</a>
          </div>

          <button type="button" className="rounded-lg p-2 hover:bg-zinc-100 md:hidden" onClick={() => setMobile((m) => !m)} aria-label={mobile ? 'Close menu' : 'Open menu'}>
            {mobile ? <svg className="h-6 w-6 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg> : <span className="block w-6 space-y-1.5"><span className="block h-0.5 w-6 bg-zinc-700" /><span className="block h-0.5 w-6 bg-zinc-700" /><span className="block h-0.5 w-6 bg-zinc-700" /></span>}
          </button>
        </div>
      </div>

      {mobile && (
        <>
          <div className="fixed inset-0 top-16 z-40 bg-black/20 md:hidden" onClick={closeMobile} aria-hidden />
          <div className="fixed left-0 right-0 top-16 z-50 max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-zinc-200 bg-white shadow-xl md:hidden">
            <nav className="px-4 py-4">
              <div className="border-b border-zinc-100">
                <button type="button" className="flex w-full items-center justify-between py-3 text-left font-medium text-zinc-700" onClick={() => setExp((e) => e === 'technologies' ? null : 'technologies')}>
                  Technologies
                  <svg className={`w-5 h-5 transition-transform ${exp === 'technologies' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {exp === 'technologies' && <div className="space-y-1 pb-3 pl-2">{['AI & Machine Learning', 'Cybersecurity', 'Full-Stack'].map((t) => <a key={t} href="#technologies" onClick={onAnchor(closeMobile)} className="block py-1.5 text-sm text-zinc-600 hover:text-blue-600">{t}</a>)}</div>}
              </div>
              <div className="border-b border-zinc-100">
                <button type="button" className="flex w-full items-center justify-between py-3 text-left font-medium text-zinc-700" onClick={() => setExp((e) => e === 'industries' ? null : 'industries')}>
                  Industries
                  <svg className={`w-5 h-5 transition-transform ${exp === 'industries' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {exp === 'industries' && <div className="space-y-1 pb-3 pl-2">{['Agriculture', 'Automotive', 'Banking', 'Healthcare', 'Finance', 'Retail', 'Startups', 'Telecommunications'].map((i) => <a key={i} href="#industries" onClick={onAnchor(closeMobile)} className="block py-1.5 text-sm text-zinc-600 hover:text-blue-600">{i}</a>)}</div>}
              </div>
              <Link to="/about" onClick={closeMobile} className="block border-b border-zinc-100 py-3 font-medium text-zinc-700">Our Story</Link>
              <Link to="/work" onClick={closeMobile} className="block border-b border-zinc-100 py-3 font-medium text-zinc-700">Our Work</Link>
              <a href="#contact" onClick={onAnchor(closeMobile)} className="mt-3 block w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 py-3.5 text-center font-semibold text-white">Contact Us</a>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
