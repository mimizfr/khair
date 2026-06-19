import React, { useState } from 'react';
import { Menu, X, Heart, Shield, LogOut } from 'lucide-react';

export default function Navbar({ currentPage, setCurrentPage, isAdmin, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className="bg-background/80 backdrop-blur-xl border-b border-secondary/20 sticky top-0 z-50 transition-all duration-300">
      <div className="layout-container">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-primary rounded-xl p-1.5 group transition-all duration-300 hover:bg-primary/5"
          >
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-soft transition-all duration-300 group-hover:shadow-glow group-hover:scale-105">
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
                      ? 'text-primary bg-primary/8 font-semibold'
                      : 'text-text/70 hover:text-primary hover:bg-secondary/20'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                  )}
                </button>
              );
            })}
            
            {isAdmin && (
              <button
                onClick={onLogout}
                className="flex items-center gap-1.5 text-sm text-error/80 hover:text-error font-medium transition-all duration-300 py-2.5 px-4 rounded-xl hover:bg-error/5 ml-2"
              >
                <LogOut className="w-4 h-4" />
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
                  ? 'text-primary bg-primary/10' 
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
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-background/95 backdrop-blur-xl border-b border-secondary/20 px-4 pt-2 pb-6 space-y-1">
          {navItems.map((item, index) => {
            const isActive = currentPage === item.id || 
              (item.id === 'find-professionals' && (currentPage === 'profile' || currentPage === 'contact'));
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary ${
                  isActive
                    ? 'bg-primary/10 text-primary font-semibold'
                    : 'text-text/70 hover:bg-secondary/20 hover:text-primary'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </button>
            );
          })}
          
          {isAdmin && (
            <button
              onClick={() => { onLogout(); setIsOpen(false); }}
              className="block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-error/80 hover:bg-error/5 transition-all duration-300"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}