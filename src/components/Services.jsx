import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { serviceCategories } from '../data/servicesData';
import { WA_NUMBER } from '../data/config';
import { fadeInUp } from '../utils/animations';
import { Check, Plus } from 'lucide-react';

export default function Services() {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleToggle = (item) => {
    if (selectedItems.some((i) => i.id === item.id)) {
      setSelectedItems(selectedItems.filter((i) => i.id !== item.id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const totalPrice = selectedItems.reduce((sum, item) => sum + item.price, 0);
  const formattedTotalPrice = `Rp ${totalPrice.toLocaleString('id-ID')}`;

  const handleOrder = () => {
    if (selectedItems.length === 0) return;

    let text = "Halo Azerra Care, saya ingin memesan layanan berikut:\n";
    selectedItems.forEach((item) => {
      text += `- ${item.name} (${item.priceText})\n`;
    });
    text += `\nTotal: ${formattedTotalPrice}\n`;
    text += "Mohon info jadwal yang tersedia.";

    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 bg-bg px-6 border-t border-border relative" id="layanan">
      <div className="max-w-5xl mx-auto pb-24">
        
        {/* Section Heading - Center Aligned */}
        <motion.div 
          className="text-center mb-10"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl font-bold text-text">
            Layanan Kami
          </h2>
          <p className="font-body text-sm text-text-muted mt-2">
            Semua layanan bisa dipesan untuk homecare langsung ke rumah Anda.
          </p>
        </motion.div>

        {/* Categories & Items */}
        <div className="space-y-12">
          {serviceCategories.map((categoryGroup, catIdx) => (
            <div key={categoryGroup.category}>
              {/* Category Sub-heading */}
              <motion.h3 
                className="font-display text-2xl font-bold text-primary mb-4 mt-8"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                {categoryGroup.category}
              </motion.h3>

              {/* Items Grid */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              >
                {categoryGroup.items.map((item) => {
                  const isSelected = selectedItems.some((i) => i.id === item.id);
                  return (
                    <div
                      key={item.id}
                      onClick={() => handleToggle(item)}
                      className={`cursor-pointer p-4 rounded-card border transition-all duration-200 flex items-center justify-between text-left select-none ${
                        isSelected
                          ? 'bg-surface border-primary shadow-sm'
                          : 'bg-white border-border hover:border-primary/40 shadow-sm'
                      }`}
                    >
                      <div className="space-y-1">
                        <h4 className="font-body font-bold text-base text-text">
                          {item.name}
                        </h4>
                        {item.description && (
                          <div className="mt-1 mb-1.5 pl-1">
                            {Array.isArray(item.description) ? (
                              <ul className="list-disc list-outside space-y-0.5 pl-3">
                                {item.description.map((desc, idx) => (
                                  <li key={idx} className="font-body text-xs text-text-muted">
                                    {desc}
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="font-body text-xs text-text-muted leading-relaxed">
                                {item.description}
                              </p>
                            )}
                          </div>
                        )}
                        <p className="font-body text-sm font-semibold text-primary mt-1">
                          {item.priceText}
                        </p>
                      </div>

                      {/* Selection Action Button/Indicator */}
                      <button
                        type="button"
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 shrink-0 ${
                          isSelected
                            ? 'bg-primary text-white'
                            : 'bg-bg text-text-muted hover:bg-surface hover:text-primary'
                        }`}
                        aria-label={isSelected ? "Batalkan pilihan" : "Pilih layanan"}
                      >
                        {isSelected ? <Check size={16} /> : <Plus size={16} />}
                      </button>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky Bottom Order Panel */}
      {selectedItems.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-border z-40 shadow-[0_-4px_16px_rgba(61,26,26,0.06)]">
          <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="font-body text-xs text-text-muted font-medium">
                {selectedItems.length} Layanan Terpilih
              </p>
              <p className="font-display text-2xl font-bold text-primary">
                {formattedTotalPrice}
              </p>
            </div>

            <button
              onClick={handleOrder}
              className="flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover text-white py-3.5 px-8 rounded-btn font-body text-base font-bold shadow-md hover:shadow-hover transition-colors duration-200 w-full sm:w-auto min-h-[44px]"
            >
              <span>Pesan via WhatsApp</span>
              <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs font-semibold">
                ➔
              </span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
