import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { SoundProvider } from './context/SoundContext';
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
import TerminalConsole from './components/TerminalConsole';

import MotionBackground from './components/ui/MotionBackground';

function AppLayout() {

  return (
    <div className="relative min-h-screen transition-colors duration-300 overflow-x-hidden selection:bg-cyan-500/25 selection:text-cyan-600 dark:selection:text-cyan-200">
      {/* 21st.dev Animated Motion Background (Flickering Grid + Glowing Aurora Beams) */}
      <MotionBackground />

      {/* Layered Interactive Starfield Constellation */}
      <ThreeBackground />

      {/* Main Page Layout */}
      <div className="relative z-10">
        <Navbar />
        <main id="main-content">
          <Hero />
          <About />
          <ProjectsRoadmap />
          <Skills />
          <TerminalConsole />
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

export default function App() {
  return (
    <ThemeProvider>
      <SoundProvider>
        <AppLayout />
      </SoundProvider>
    </ThemeProvider>
  );
}
