import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const CONTACT_EMAIL = 'officialinfinya.help@gmail.com';

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    message: '', 
    agree: false 
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    // These keys MUST match the {{bracket}} names in your EmailJS dashboard screenshot
    const templateParams = {
      name: formData.name,      // Matches {{name}}
      email: formData.email,    // Matches {{email}}
      message: formData.message, // Matches {{message}}
      subject: "Website Inquiry", // Matches {{subject}}
      time: new Date().toLocaleString(), // Matches {{time}}
    };

    try {
      // Use the IDs from your dashboard:
      // Service ID: check "Email Services" tab (e.g., 'service_default' or 'service_xxxx')
      // Template ID: check "Email Templates" tab (e.g., 'template_62347k6')
      await emailjs.send(
        'service_nq6bz0h',      // Double-check this in "Email Services"
        'template_b5gs9w6',     // Double-check this in "Email Templates"
        templateParams,
        'gxNFKYxN6fm3Cg0Fu'     // Your Public Key (Correct)
      );
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '', agree: false });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus('idle');
      // If error.status is 400, your Template ID or Service ID is likely mistyped
      alert(`Error: ${error.text || "Check your Service/Template IDs"}`);
    }
  };

  const inputClass = 'w-full px-4 py-3.5 rounded-xl border-2 border-zinc-200 bg-white text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all';

  return (
    <section id="contact" className="section-normal relative overflow-hidden bg-white py-12 px-4">
      <div className="container-main relative max-w-5xl mx-auto">
        <div className="rounded-3xl border border-zinc-200 bg-white shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[420px]">
            
            <div className="p-6 sm:p-8 md:p-10 lg:p-12 min-w-0 order-2 lg:order-1">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-xl font-semibold text-zinc-900">Message Sent!</p>
                  <p className="mt-2 text-zinc-600">We'll be in touch shortly.</p>
                  <button onClick={() => setStatus('idle')} className="mt-6 text-blue-600 font-medium">Send another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-2">Name</label>
                    <input name="name" required value={formData.name} onChange={handleChange} className={inputClass} placeholder="Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-2">Email</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} className={inputClass} placeholder="Email" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-2">Message</label>
                    <textarea name="message" required rows={4} value={formData.message} onChange={handleChange} className={`${inputClass} resize-none`} placeholder="How can we help?" />
                  </div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} required className="mt-1 accent-blue-600" />
                    <span className="text-sm text-zinc-600">I agree to data processing</span>
                  </label>
                  <button type="submit" disabled={status === 'submitting'} className="w-full py-4 rounded-2xl font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all disabled:opacity-50">
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

           {/* Right Column: Info */}
<div className="p-8 sm:p-10 lg:p-12 bg-zinc-50 border-l border-zinc-200 flex flex-col justify-center order-1 lg:order-2">
  <h3 className="text-2xl font-bold text-blue-600 uppercase tracking-wider">
    Contact us
  </h3>
  <p className="mt-4 text-zinc-600 leading-relaxed">
    Customer satisfaction is our top priority! Our support service is available to assist you with software development and project inquiries.
  </p>

  <div className="mt-8 grid grid-cols-4 gap-4 sm:flex sm:gap-4">
    {/* Email */}
    <a 
      href={`mailto:${CONTACT_EMAIL}`} 
      title="Email Us"
      className="w-12 h-12 rounded-full border-2 border-blue-200 bg-white flex items-center justify-center text-blue-600 hover:border-blue-500 hover:bg-blue-50 transition-all"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    </a>

    {/* Phone */}
    <a 
      href="tel:+93783637033" 
      title="Call Us"
      className="w-12 h-12 rounded-full border-2 border-blue-200 bg-white flex items-center justify-center text-blue-600 hover:border-blue-500 hover:bg-blue-50 transition-all"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    </a>

    {/* Instagram */}
    <a 
      href="https://www.instagram.com/infinya.tech/" 
      target="_blank" 
      rel="noopener noreferrer"
      title="Instagram"
      className="w-12 h-12 rounded-full border-2 border-blue-200 bg-white flex items-center justify-center text-blue-600 hover:border-blue-500 hover:bg-blue-50 transition-all"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={2} />
        <path strokeWidth={2} d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
      </svg>
    </a>

    {/* Facebook */}
    <a 
      href="https://www.facebook.com/share/1Cbk7mYUui/" 
      target="_blank" 
      rel="noopener noreferrer"
      title="Facebook"
      className="w-12 h-12 rounded-full border-2 border-blue-200 bg-white flex items-center justify-center text-blue-600 hover:border-blue-500 hover:bg-blue-50 transition-all"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12a10 10 0 10-11.5 9.87v-6.99H8.08V12h2.42V9.8c0-2.4 1.43-3.72 3.62-3.72 1.05 0 2.15.19 2.15.19v2.36h-1.21c-1.2 0-1.57.75-1.57 1.51V12h2.67l-.43 2.88h-2.24v6.99A10 10 0 0022 12z" />
      </svg>
    </a>
  </div>

  <p className="mt-6 text-zinc-500 text-sm font-medium">
    Reach out via any platform!
  </p>
</div>

          </div>
        </div>
      </div>
    </section>
  );
}