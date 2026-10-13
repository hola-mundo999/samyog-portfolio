import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
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

function AppLayout() {
  const { theme } = useTheme();

  return (
    <div className="relative min-h-screen transition-colors duration-300 overflow-x-hidden selection:bg-cyan-500/25 selection:text-cyan-600 dark:selection:text-cyan-200">
      {/* Calm Ambient Constellation in Background */}
      <ThreeBackground />

      {/* Atmospheric gradient spotlight for depth */}
      <div
        className="fixed inset-0 pointer-events-none z-[1] transition-opacity duration-500"
        style={{
          background:
            theme === 'dark'
              ? 'radial-gradient(circle at 50% 10%, rgba(56, 189, 248, 0.05) 0%, rgba(6, 8, 19, 0.8) 60%, rgba(6, 8, 19, 0.98) 100%)'
              : 'radial-gradient(circle at 50% 10%, rgba(2, 132, 199, 0.05) 0%, rgba(248, 250, 252, 0.7) 60%, rgba(248, 250, 252, 0.98) 100%)',
        }}
      />

      {/* Main Page Layout */}
      <div className="relative z-10">
        <Navbar />
        <main id="main-content">
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

export default function App() {
  return (
    <ThemeProvider>
      <SoundProvider>
        <AppLayout />
      </SoundProvider>
    </ThemeProvider>
  );
}
