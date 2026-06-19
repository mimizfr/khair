import React from 'react';
import { Heart, ShieldCheck, Mail, MapPin, ArrowUpRight } from 'lucide-react';

export default function Footer({ setCurrentPage }) {
  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-text text-background">
      {/* Mini CTA Panel */}
      <div className="bg-primary/15 border-b border-secondary/10 py-12">
        <div className="layout-container flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-secondary">Looking for trusted support?</h3>
            <p className="text-base text-background/80 mt-2 max-w-md">
              Every professional listed on Khair is vetted through our multi-step verification process.
            </p>
          </div>
          <button
            onClick={() => handleNavClick('find-professionals')}
            className="btn-primary text-sm py-3.5 px-8 shadow-glow hover:shadow-elevated shrink-0"
          >
            Find Professionals
          </button>
        </div>
      </div>

      {/* Main Directory Footer */}
      <div className="layout-container py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand column */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-glow">
              <Heart className="w-5 h-5 fill-current text-background" />
            </div>
            <span className="text-xl font-bold text-background">Khair</span>
          </div>
          <p className="text-sm text-background/75 leading-relaxed max-w-sm">
            Bridging the trust gap in educational support. Connecting parents of neurodivergent children in the UAE with licensed, verified experts in a calm, safe space.
          </p>
          <div className="flex items-center gap-2 text-sm text-background/80">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span className="font-medium">UAE Ministry Vetted Standards</span>
          </div>
        </div>

        {/* Directory column */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-6">Directory</h4>
          <ul className="space-y-4 text-sm text-background/80">
            <li>
              <button onClick={() => handleNavClick('home')} className="hover:text-secondary transition-all duration-300 flex items-center gap-1 group">
                Home
                <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('find-professionals')} className="hover:text-secondary transition-all duration-300 flex items-center gap-1 group">
                Search Directory
                <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('for-educators')} className="hover:text-secondary transition-all duration-300 flex items-center gap-1 group">
                Join as Educator
                <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('community')} className="hover:text-secondary transition-all duration-300 flex items-center gap-1 group">
                Events & Resources
                <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('about')} className="hover:text-secondary transition-all duration-300 flex items-center gap-1 group">
                Our Story & Values
                <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
              </button>
            </li>
          </ul>
        </div>

        {/* Contact & Legal column */}
        <div className="space-y-5">
          <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-6">Contact Info</h4>
          <div className="flex items-start gap-3 text-sm text-background/80 group">
            <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center text-secondary shrink-0 mt-0.5 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-background/60 mb-0.5">Verification Desk</p>
              <a href="mailto:verify@khair.ae" className="hover:text-secondary transition-colors duration-300 font-medium">verify@khair.ae</a>
            </div>
          </div>
          <div className="flex items-start gap-3 text-sm text-background/80 group">
            <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center text-secondary shrink-0 mt-0.5 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-background/60 mb-0.5">Location</p>
              <span className="font-medium">Dubai, United Arab Emirates</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-text-dark border-t border-secondary/5 py-6">
        <div className="layout-container flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-background/60">
          <div>
            &copy; {new Date().getFullYear()} Khair Support Platform. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => handleNavClick('admin')} 
              className="hover:text-accent font-medium uppercase tracking-wider text-xs bg-primary/10 hover:bg-primary/20 border border-secondary/10 rounded-lg px-3 py-1.5 transition-all duration-300"
            >
              Admin Dashboard
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}