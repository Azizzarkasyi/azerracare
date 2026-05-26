import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Home, Leaf } from 'lucide-react';
import { fadeInUp } from '../utils/animations';

export default function Features() {
  const items = [
    {
      id: 1,
      title: "Bidan Bersertifikat",
      description: "Semua terapis adalah bidan profesional dengan sertifikat pelatihan pijat bayi resmi.",
      icon: Stethoscope
    },
    {
      id: 2,
      title: "Datang ke Rumah Anda",
      description: "Tidak perlu keluar rumah. Kami hadir lengkap dengan peralatan steril dan aman.",
      icon: Home
    },
    {
      id: 3,
      title: "Bahan 100% Aman Bayi",
      description: "Menggunakan minyak herbal zaitun terpercaya dan teruji keamanannya untuk bayi.",
      icon: Leaf
    }
  ];

  return (
    <section className="py-16 bg-surface px-6" id="keunggulan">
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
            Kenapa Pilih Azerra Care?
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {items.map((item, idx) => {
            const Icon = item.icon;
            
            return (
              <motion.div
                key={item.id}
                className="flex flex-col items-start text-left space-y-3"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Ikon Polos Tanpa Lingkaran/Kotak Berwarna */}
                <Icon size={28} className="text-primary stroke-[1.5]" />
                
                <h3 className="font-body font-bold text-text text-lg">
                  {item.title}
                </h3>
                
                <p className="font-body text-sm leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
