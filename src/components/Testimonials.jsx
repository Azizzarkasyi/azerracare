import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/testimonialsData';
import { fadeInUp } from '../utils/animations';

export default function Testimonials() {
  return (
    <section className="py-16 bg-surface px-6 border-t border-b border-border" id="testimoni">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Heading - Center Aligned */}
        <motion.div 
          className="text-center mb-10"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl font-bold text-text">
            Kata Mereka 💬
          </h2>
        </motion.div>

        {/* Testimonials Static Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
          {testimonials.map((testi, idx) => (
            <motion.div
              key={testi.id}
              className="bg-white rounded-2xl shadow-card p-5 flex flex-col justify-between text-left relative"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="space-y-3">
                {/* 5 Yellow Stars */}
                <div className="flex items-center gap-0.5 text-amber-400 select-none">
                  {[...Array(testi.rating)].map((_, i) => (
                    <span key={i} className="text-lg">⭐</span>
                  ))}
                </div>
                
                {/* Review Text */}
                <p className="font-body text-sm text-text italic leading-relaxed">
                  "{testi.text}"
                </p>
              </div>

              {/* Client Name + City */}
              <div className="mt-5 pt-3 border-t border-border/50 flex flex-col">
                <span className="font-body font-semibold text-sm text-primary">
                  {testi.name}
                </span>
                <span className="font-body text-xs text-text-muted">
                  {testi.city}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
