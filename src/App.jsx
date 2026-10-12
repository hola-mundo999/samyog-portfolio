import React from 'react';
import ThreeBackground from './components/ThreeBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ProjectsRoadmap from './components/ProjectsRoadmap';
import Leadership from './components/Leadership';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#04060f] text-slate-100 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Cinematic 3D Kinetic Canvas in Background */}
      <ThreeBackground />

      {/* Atmospheric lighting overlay with radial vignette for cinematic contrast */}
      <div 
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{
          background: 'radial-gradient(circle at 50% 15%, rgba(6, 182, 212, 0.04) 0%, rgba(4, 6, 15, 0.75) 60%, rgba(4, 6, 15, 0.95) 100%)'
        }}
      />

      {/* Main Page Layout */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <ProjectsRoadmap />
          <Leadership />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Floating Personal AI Chat Assistant Widget */}
      <ChatAssistant />
    </div>
  );
}
