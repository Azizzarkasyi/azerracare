import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { WA_URL } from '../data/config';
import { fadeInUp } from '../utils/animations';
import heroImage from '../assets/hero.png';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 px-6 bg-bg overflow-hidden min-h-[85vh] flex items-center">
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        
        {/* Left Column - Text */}
        <motion.div 
          className="md:col-span-7 flex flex-col items-start text-left space-y-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Small Badge */}
          <span className="inline-block px-4 py-1.5 bg-surface text-primary rounded-btn text-sm font-semibold tracking-wide">
            🏡 Homecare Yogyakarta
          </span>
          
          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-text leading-[1.15] max-w-xl">
            Sentuhan Lembut untuk Tumbuh Kembang Si Kecil
          </h1>
          
          {/* Sub-text */}
          <p className="font-body text-lg text-text-muted leading-relaxed max-w-lg">
            Layanan treatment bayi profesional oleh bidan bersertifikat, langsung ke rumah Anda.
          </p>
          
          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover text-white py-3.5 px-6 rounded-btn font-body text-base font-bold transition-colors duration-200 shadow-card hover:shadow-hover w-full sm:w-auto min-h-[44px]"
            >
              <MessageCircle size={20} />
              <span>Tanya Jadwal via WhatsApp 💬</span>
            </a>
            
            <a
              href="#layanan"
              className="font-body text-base font-bold text-primary hover:text-primary-hover transition-colors duration-200 min-h-[44px] flex items-center justify-center py-2"
            >
              Lihat Layanan &darr;
            </a>
          </div>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div 
          className="md:col-span-5 flex justify-center w-full"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative w-full max-w-[400px]">
            {/* Image container using custom hero asset */}
            <div className="aspect-[6/7] w-full rounded-card shadow-card overflow-hidden border border-border bg-surface">
              <img 
                src={heroImage} 
                alt="Azerra Care Baby Massage" 
                className="w-full h-full object-cover select-none"
                loading="eager"
              />
            </div>
            
            {/* Absolute badge bottom-left */}
            <div className="absolute bottom-4 left-4 bg-white border border-border px-3 py-2 rounded-btn shadow-sm flex items-center gap-1.5">
              <span className="text-primary text-[10px] font-bold">✓</span>
              <span className="font-body text-xs font-bold text-primary">
                By Bidan Bersertifikat
              </span>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
