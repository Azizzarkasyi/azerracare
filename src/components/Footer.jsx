import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BRAND_NAME, WA_URL, INSTAGRAM_URL, OPERATIONAL_HOURS, SERVICE_AREA } from '../data/config';

export default function Footer() {
  return (
    <footer className="bg-[#3D1A1A] text-white py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center space-y-6">
        
        {/* Brand Name */}
        <h3 className="font-display text-3xl font-bold tracking-tight">
          {BRAND_NAME}
        </h3>
        
        {/* Tagline */}
        <p className="font-body text-sm font-medium tracking-wide uppercase text-white/80">
          Maternal and Baby Massage Care
        </p>

        {/* Operational & Area Details */}
        <div className="space-y-1.5 font-body text-sm text-white/70">
          <p>🕒 {OPERATIONAL_HOURS}</p>
          <p>📍 {SERVICE_AREA}</p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 pt-2">
          {/* WhatsApp Lucide Icon */}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-white/10 hover:bg-white/20 text-white w-10 h-10 rounded-full transition-colors duration-200"
            aria-label="WhatsApp AzerraCare"
          >
            <MessageCircle size={20} />
          </a>

          {/* Instagram Custom Inline SVG */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-white/10 hover:bg-white/20 text-white w-10 h-10 rounded-full transition-colors duration-200"
            aria-label="Instagram AzerraCare"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/10 w-full text-xs text-white/50">
          <p>&copy; 2025 {BRAND_NAME}. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
