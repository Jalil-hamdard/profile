export default function BairesFooter() {
  return (
    <footer className="bg-section-dark text-zinc-300 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="container-main py-12 md:py-16 lg:py-20">
        <div className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-zinc-700">
          <p className="text-sm text-zinc-500">Get in touch. Infinya – Afghanistan.</p>
          <div className="mt-4 flex flex-wrap gap-4 md:gap-6">
            <a href="mailto:officialinfinya.help@gmail.com" className="text-white font-medium hover:underline">officialinfinya.help@gmail.com</a>
            <a href="tel:+930795345288" className="text-white font-medium hover:underline">0795345288</a>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-4 text-sm text-zinc-500">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <span>|</span>
          <a href="#" className="hover:text-white">Do Not Sell My Personal Information</a>
        </div>
        <p className="mt-8 text-sm text-zinc-500">
          Infinya. Founded 2025. All rights reserved.
        </p>
        <p className="mt-2 text-xs text-zinc-600">
          By continuing to use this site, you agree to our cookie policy and privacy policy.
        </p>
      </div>
    </footer>
  );
}
