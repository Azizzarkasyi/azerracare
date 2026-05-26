import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingWA from './components/FloatingWA';

export default function App() {
  // Schema.org Structured Data for Local Business
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Azerra Care",
    "image": "https://azerracare.web.id/assets/hero.png",
    "@id": "https://azerracare.web.id",
    "url": "https://azerracare.web.id",
    "telephone": "+6282138164494",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Homecare Area Yogyakarta",
      "addressLocality": "Yogyakarta",
      "addressRegion": "DIY",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-7.7956",
      "longitude": "110.3695"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "15:00"
    },
    "sameAs": [
      "https://www.instagram.com/azerra.care/"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Azerra Care — Maternal & Baby Massage Care Yogyakarta</title>
        <meta name="description" content="Layanan treatment bayi & pijat laktasi / mom care profesional oleh bidan bersertifikat, langsung ke rumah Anda di Yogyakarta." />
        <meta name="keywords" content="pijat bayi jogja, baby spa jogja, baby spa homecare yogyakarta, laktasi jogja, mom care jogja, bidan homecare jogja" />
        <link rel="canonical" href="https://azerracare.web.id" />

        {/* Open Graph / Facebook / WhatsApp Preview */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://azerracare.web.id" />
        <meta property="og:title" content="Azerra Care — Maternal & Baby Massage Care Yogyakarta" />
        <meta property="og:description" content="Layanan treatment bayi & pijat laktasi / mom care profesional langsung ke rumah Anda di Yogyakarta." />
        <meta property="og:image" content="https://azerracare.web.id/assets/hero.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://azerracare.web.id" />
        <meta property="twitter:title" content="Azerra Care — Maternal & Baby Massage Care Yogyakarta" />
        <meta property="twitter:description" content="Layanan treatment bayi & pijat laktasi / mom care profesional langsung ke rumah Anda di Yogyakarta." />
        <meta property="twitter:image" content="https://azerracare.web.id/assets/hero.png" />

        {/* Structured Data Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>
      
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

