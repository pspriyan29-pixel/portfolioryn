'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollStack from '@/components/ScrollStack';

// Lazy load particle background (heavy canvas)
const ParticleBackground = dynamic(() => import('@/components/ParticleBackground'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505]">
      {/* Scan line effect */}
      <div className="scanline" />

      {/* Particle background */}
      <ParticleBackground />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <Hero />
      <About />
      <ScrollStack />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
