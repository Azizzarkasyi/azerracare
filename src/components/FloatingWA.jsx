import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WA_URL } from '../data/config';

export default function FloatingWA() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-[#25D366] hover:bg-[#1DA851] text-white p-4 rounded-full shadow-lg hover:shadow-hover hover:scale-105 transition-all duration-200"
      aria-label="Chat WhatsApp"
    >
      <MessageCircle size={26} className="stroke-[2]" />
    </a>
  );
}
