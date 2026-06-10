import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

export default function Navbar({ currentPage, setCurrentPage }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'find-professionals', label: 'Find Professionals' },
    { id: 'for-educators', label: 'For Educators' },
    { id: 'community', label: 'Community' },
    { id: 'about', label: 'About' }
  ];

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-[#FAFAF7] border-b border-[#A7C4BC]/30 sticky top-0 z-40">
      <div className="layout-container">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1 group"
          >
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white calm-transition group-hover:bg-primary-hover">
              <Heart className="w-5.5 h-5.5 fill-current text-[#FAFAF7]" />
            </div>
            <div className="text-left">
              <span className="block text-2xl font-bold text-primary leading-none tracking-tight">Khair</span>
              <span className="block text-[10px] text-accent font-medium uppercase tracking-wider mt-0.5">Support Verified</span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = currentPage === item.id || 
                (item.id === 'find-professionals' && (currentPage === 'profile' || currentPage === 'contact'));
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm font-medium calm-transition py-2 px-1 border-b-2 focus-visible:ring-2 focus-visible:ring-primary rounded-sm ${
                    isActive
                      ? 'text-primary border-primary font-semibold'
                      : 'text-text/70 border-transparent hover:text-primary hover:border-secondary'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-text hover:text-primary hover:bg-secondary-light calm-transition focus-visible:ring-2 focus-visible:ring-primary"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#FAFAF7] border-b border-[#A7C4BC]/30 px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => {
            const isActive = currentPage === item.id || 
              (item.id === 'find-professionals' && (currentPage === 'profile' || currentPage === 'contact'));
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium calm-transition focus-visible:ring-2 focus-visible:ring-primary ${
                  isActive
                    ? 'bg-primary/10 text-primary font-semibold'
                    : 'text-text/70 hover:bg-secondary-light hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
}
