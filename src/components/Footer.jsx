import React from 'react';
import { Heart, ShieldCheck, Mail, MapPin } from 'lucide-react';

export default function Footer({ setCurrentPage }) {
  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1F2933] text-[#FAFAF7] border-t border-[#A7C4BC]/10">
      {/* Mini CTA Panel */}
      <div className="bg-primary/20 border-b border-[#A7C4BC]/10 py-10">
        <div className="layout-container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-secondary">Looking for trusted support?</h3>
            <p className="text-sm text-[#FAFAF7]/80 mt-1 max-w-md">
              Every professional listed on Khair is vetted through our multi-step verification process.
            </p>
          </div>
          <button
            onClick={() => handleNavClick('find-professionals')}
            className="bg-[#2F6F6D] hover:bg-[#245654] text-[#FAFAF7] font-semibold py-3 px-6 rounded-xl calm-transition text-sm border border-[#A7C4BC]/30 shadow-sm"
          >
            Find Professionals
          </button>
        </div>
      </div>

      {/* Main Directory Footer */}
      <div className="layout-container py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
              <Heart className="w-4 h-4 fill-current text-[#FAFAF7]" />
            </div>
            <span className="text-lg font-bold text-[#FAFAF7]">Khair</span>
          </div>
          <p className="text-xs text-[#FAFAF7]/75 leading-relaxed max-w-sm">
            Bridging the trust gap in educational support. Connecting parents of neurodivergent children in the UAE with licensed, verified experts in a calm, safe space.
          </p>
          <div className="flex items-center gap-2 text-xs text-[#FAFAF7]/80">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span>UAE Ministry Vetted Standards</span>
          </div>
        </div>

        {/* Directory column */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Directory</h4>
          <ul className="space-y-3 text-sm text-[#FAFAF7]/80">
            <li>
              <button onClick={() => handleNavClick('home')} className="hover:text-secondary calm-transition">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('find-professionals')} className="hover:text-secondary calm-transition">
                Search Directory
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('for-educators')} className="hover:text-secondary calm-transition">
                Join as Educator
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('community')} className="hover:text-secondary calm-transition">
                Events & Resources
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('about')} className="hover:text-secondary calm-transition">
                Our Story & Values
              </button>
            </li>
          </ul>
        </div>

        {/* Contact & Legal column */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Contact Info</h4>
          <div className="flex items-start gap-2.5 text-sm text-[#FAFAF7]/80">
            <Mail className="w-4.5 h-4.5 mt-0.5 text-secondary" />
            <div>
              <p className="text-xs text-[#FAFAF7]/60">Verification Desk</p>
              <a href="mailto:verify@khair.ae" className="hover:text-secondary calm-transition">verify@khair.ae</a>
            </div>
          </div>
          <div className="flex items-start gap-2.5 text-sm text-[#FAFAF7]/80">
            <MapPin className="w-4.5 h-4.5 mt-0.5 text-secondary" />
            <div>
              <p className="text-xs text-[#FAFAF7]/60">Location</p>
              <span className="text-xs">Dubai, United Arab Emirates</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#17202A] border-t border-[#A7C4BC]/5 py-6">
        <div className="layout-container flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#FAFAF7]/60">
          <div>
            &copy; {new Date().getFullYear()} Khair Support Platform. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => handleNavClick('admin')} 
              className="hover:text-accent font-medium uppercase tracking-wider text-[10px] bg-[#1F2933] hover:bg-[#2F6F6D]/20 border border-[#A7C4BC]/10 rounded px-2 py-0.5 calm-transition"
            >
              Admin Dashboard
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
