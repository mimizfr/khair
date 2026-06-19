import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Shield, LogOut } from 'lucide-react';

export default function Navbar({ currentPage, setCurrentPage, isAdmin, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for glassmorphism intensity
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'find-professionals', label: 'Find Professionals' },
    { id: 'for-educators', label: 'For Educators' },
    { id: 'community', label: 'Community' },
    { id: 'about', label: 'About' }
  ];

  if (isAdmin) {
    navItems.push({ id: 'admin', label: 'Dashboard', icon: Shield });
  }

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-500 ease-calm border-b ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-xl shadow-elevated border-secondary/30' 
          : 'bg-background/80 backdrop-blur-lg border-secondary/20'
      }`}
    >
      {/* Subtle gradient line under nav */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="layout-container">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-primary rounded-2xl p-1.5 group transition-all duration-300 hover:bg-primary/5"
          >
            <div className={`w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-soft transition-all duration-500 group-hover:shadow-glow group-hover:scale-105 group-hover:rotate-3`}>
              <Heart className="w-5 h-5 fill-current text-background" />
            </div>
            <div className="text-left">
              <span className="block text-2xl font-bold text-primary leading-none tracking-tight">Khair</span>
              <span className="block text-[10px] text-accent font-semibold uppercase tracking-wider mt-0.5">Support Verified</span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id || 
                (item.id === 'find-professionals' && (currentPage === 'profile' || currentPage === 'contact'));
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative text-sm font-medium transition-all duration-300 py-2.5 px-4 rounded-xl focus-visible:ring-2 focus-visible:ring-primary ${
                    isActive
                      ? 'text-primary bg-primary/10 font-semibold shadow-glow'
                      : 'text-text/70 hover:text-primary hover:bg-secondary/20'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary animate-gentle-pulse" />
                  )}
                </button>
              );
            })}
            
            {isAdmin && (
              <div className="w-px h-6 bg-secondary/40 mx-2" />
            )}
            
            {isAdmin && (
              <button
                onClick={onLogout}
                className="flex items-center gap-1.5 text-sm text-error/70 hover:text-error font-medium transition-all duration-300 py-2.5 px-4 rounded-xl hover:bg-error/5 focus-visible:ring-2 focus-visible:ring-error/30"
              >
                <LogOut className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                Logout
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2.5 rounded-xl transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary ${
                isOpen 
                  ? 'text-primary bg-primary/10 shadow-glow' 
                  : 'text-text hover:text-primary hover:bg-secondary/20'
              }`}
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-calm ${
        isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-background/95 backdrop-blur-xl border-b border-secondary/20 px-4 pt-3 pb-8 space-y-1">
          {navItems.map((item, index) => {
            const isActive = currentPage === item.id || 
              (item.id === 'find-professionals' && (currentPage === 'profile' || currentPage === 'contact'));
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-5 py-3.5 rounded-xl text-base font-medium transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary animate-fade-in-up ${
                  isActive
                    ? 'bg-primary/10 text-primary font-semibold shadow-soft'
                    : 'text-text/70 hover:bg-secondary/20 hover:text-primary'
                }`}
                style={{ animationDelay: `${index * 75}ms`, animationFillMode: 'both' }}
              >
                <span className="flex items-center gap-3">
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-primary animate-gentle-pulse" />}
                  {item.label}
                </span>
              </button>
            );
          })}
          
          {isAdmin && (
            <div className="pt-2 border-t border-secondary/20 mt-2">
              <button
                onClick={() => { onLogout(); setIsOpen(false); }}
                className="block w-full text-left px-5 py-3.5 rounded-xl text-base font-medium text-error/70 hover:bg-error/5 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${navItems.length * 75}ms`, animationFillMode: 'both' }}
              >
                <span className="flex items-center gap-3">
                  <LogOut className="w-4 h-4" />
                  Logout
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}