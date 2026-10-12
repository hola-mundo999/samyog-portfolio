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

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#090a0f] text-slate-100 overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      {/* Silent 3D Interactive Canvas in background */}
      <ThreeBackground />

      {/* Main page content */}
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
    </div>
  );
}
