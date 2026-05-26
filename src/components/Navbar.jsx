import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { BRAND_NAME, WA_URL } from '../data/config';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Layanan', href: '#layanan' },
    { label: 'Tentang', href: '#keunggulan' },
    { label: 'Testimoni', href: '#testimoni' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#FDF5F3]/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Left Side: Brand Name */}
        <a href="#home" className="flex items-center">
          <span className="font-display text-2xl font-bold tracking-tight text-primary">
            {BRAND_NAME}
          </span>
        </a>

        {/* Right Side: Desktop Nav links + WA Button */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm font-semibold text-text hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-cta hover:bg-cta-hover text-white px-5 py-2.5 rounded-btn font-body text-sm font-bold transition-all duration-300 shadow-sm hover:scale-[1.02] min-h-[44px]"
          >
            <MessageCircle size={16} />
            <span>Chat WA</span>
          </a>
        </div>

        {/* Mobile: Chat WA Button + Hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-cta hover:bg-cta-hover text-white px-4 py-2 rounded-btn font-body text-xs font-bold transition-all duration-300 shadow-sm min-h-[44px]"
          >
            <MessageCircle size={16} className="mr-1" />
            <span>Chat WA</span>
          </a>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-text hover:text-primary focus:outline-none p-1 min-h-[44px] flex items-center"
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#FDF5F3] border-b border-border px-6 py-6 flex flex-col space-y-4 shadow-lg animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-body text-base font-bold text-text hover:text-primary py-2.5 border-b border-border/50 last:border-0 min-h-[44px] flex items-center"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover text-white py-3 rounded-btn font-body font-bold text-center transition-colors min-h-[44px] w-full"
          >
            <MessageCircle size={18} />
            <span>Chat via WhatsApp</span>
          </a>
        </div>
      )}
    </nav>
  );
}
