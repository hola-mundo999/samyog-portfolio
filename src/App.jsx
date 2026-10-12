import React from 'react';
import ThreeBackground from './components/ThreeBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProjectsRoadmap from './components/ProjectsRoadmap';
import Skills from './components/Skills';
import Leadership from './components/Leadership';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#070913] text-slate-100 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Calm Ambient Constellation in Background */}
      <ThreeBackground />

      {/* Soft atmospheric gradient spotlight for depth */}
      <div 
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{
          background: 'radial-gradient(circle at 50% 10%, rgba(56, 189, 248, 0.04) 0%, rgba(7, 9, 19, 0.8) 60%, rgba(7, 9, 19, 0.98) 100%)'
        }}
      />

      {/* Main Page Layout */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <ProjectsRoadmap />
          <Skills />
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
