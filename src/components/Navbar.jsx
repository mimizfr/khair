import React, { useState } from 'react';
import { Menu, X, Heart, Shield, LogOut } from 'lucide-react';

export default function Navbar({ currentPage, setCurrentPage, isAdmin, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'find-professionals', label: 'Find Professionals' },
    { id: 'for-educators', label: 'For Educators' },
    { id: 'community', label: 'Community' },
    { id: 'about', label: 'About' },
  ];

  if (isAdmin) navItems.push({ id: 'admin', label: 'Dashboard', icon: Shield });

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (id) =>
    currentPage === id ||
    (id === 'find-professionals' && ['profile', 'contact'].includes(currentPage));

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-secondary/20">
      <div className="layout-container">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 rounded-lg px-1.5 py-1 hover:bg-secondary/20 transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-primary"
          >
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <Heart className="w-4 h-4 fill-current text-background" />
            </div>
            <div className="text-left">
              <span className="block text-[17px] font-semibold text-primary leading-none tracking-tight">
                Khair خير
              </span>
              <span className="block text-[10px] text-accent font-semibold uppercase tracking-wider mt-0.5">
                Support Verified
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm py-1.5 px-3 rounded-md transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-primary ${
                  isActive(item.id)
                    ? 'text-primary font-medium bg-primary/10'
                    : 'text-text/60 hover:text-text hover:bg-secondary/20'
                }`}
              >
                {item.label}
              </button>
            ))}

            {isAdmin && <div className="w-px h-4 bg-secondary/40 mx-2" />}

            {isAdmin && (
              <button
                onClick={onLogout}
                className="flex items-center gap-1.5 text-sm text-text/50 hover:text-error hover:bg-error/5 py-1.5 px-3 rounded-md transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-error/30"
              >
                <LogOut className="w-3.5 h-3.5" />
                Logout
              </button>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-text/60 hover:text-text hover:bg-secondary/20 transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-secondary/20 px-4 pt-2 pb-6 flex flex-col gap-0.5">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-left text-[15px] px-3 py-2.5 rounded-md transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-primary ${
                isActive(item.id)
                  ? 'text-primary font-medium bg-primary/10'
                  : 'text-text/60 hover:text-text hover:bg-secondary/20'
              }`}
            >
              {item.label}
            </button>
          ))}
          {isAdmin && (
            <>
              <div className="h-px bg-secondary/20 my-1.5" />
              <button
                onClick={() => { onLogout(); setIsOpen(false); }}
                className="text-left flex items-center gap-2 text-[15px] px-3 py-2.5 rounded-md text-text/50 hover:text-error hover:bg-error/5 transition-colors duration-150"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
