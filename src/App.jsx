import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingWA from './components/FloatingWA';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="keunggulan"><Features /></section>
        <section id="layanan"><Services /></section>
        <section id="testimoni"><Testimonials /></section>
      </main>
      <Footer />
      <FloatingWA />
    </>
  );
}
