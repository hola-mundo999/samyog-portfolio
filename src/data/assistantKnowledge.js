/**
 * Verified Knowledge Base for Samyog's Portfolio Assistant.
 * 
 * NOTE: This module contains ONLY verified information published across
 * Samyog's portfolio and academic records. Do not add unverified facts.
 * 
 * ARCHITECTURE NOTE:
 * When connecting a future LLM/AI backend (Gemini, Groq, OpenAI, or a FastAPI service),
 * this file serves as the canonical system grounding prompt or vector retrieval context.
 */

export const assistantKnowledge = {
  about: {
    name: "Samyog Sapkota",
    preferredName: "Samyog",
    role: "Software Developer & Computer Science Student",
    college: "Prime College (Affiliated with Tribhuvan University)",
    location: "Kathmandu, Nepal",
    graduationYear: "2027",
    summary:
      "Samyog is a third-year computer science student at Prime College (Class of 2027) focused on software engineering and Python development. He pairs strong computer science fundamentals (C/C++, DSA) with practical web and backend technologies.",
    leadership:
      "Public Relations Advisor (Current, Sep 2026 – Present) and former Public Relations Director (Sep 2025 – Sep 2026) and Public Relations Officer (Jul 2024 – Sep 2025) at Prime IT Club.",
    timeline: [
      {
        role: "Public Relations Advisor",
        period: "September 2026 – Present",
        status: "Current Role",
        details: "Advises executive committee on tech initiatives, partnerships, and event strategy."
      },
      {
        role: "Public Relations Director",
        period: "September 2025 – September 2026",
        status: "Full-time",
        details: "Led the PR department, speaker outreach, and major hackathon promotions."
      },
      {
        role: "Public Relations Officer",
        period: "July 2024 – September 2025",
        status: "Full-time",
        details: "Coordinated student outreach, designed digital creative assets in Figma/Photoshop."
      }
    ],
    technicalInterests: [
      "Applied AI & Natural Language Processing",
      "Computer Vision & Human-Computer Interaction",
      "High-Performance Python & REST API Engineering",
      "Systems Programming (C/C++ memory management, algorithms)",
      "Web Scraping, Automation & Persistent Pipelines",
    ],
  },

  skills: {
    languages: ["Python", "C", "C++", "JavaScript", "PHP"],
    frameworksAndTools: [
      "FastAPI",
      "Streamlit",
      "React",
      "Tailwind CSS",
      "OpenCV",
      "MediaPipe",
      "SQLite",
      "Git & GitHub",
      "Linux CLI & VS Code",
    ],
    design: ["Figma (UI/UX Wireframing)", "Adobe Photoshop (Digital Creatives)"],
  },

  projects: [
    {
      id: "ai-study-assistant",
      title: "AI CSIT Study & Lecture Notes Assistant",
      category: "Applied AI / NLP & LLMs",
      description:
        "An intelligent academic study assistant for BSc CSIT students that extracts, chunks, and summarizes semester PDF lecture notes, answering complex questions and generating practice exam questions.",
      stack: ["Python", "Streamlit", "PyPDF", "Google Gemini / Groq API"],
      architecture: "PDF Chunking → Grounded Semantic Retrieval → Academic Q&A & Exam Generator",
      liveDemo: "https://ai-csit-studyassistant.streamlit.app/",
      github: "https://github.com/hola-mundo999/ai-csit-study-assistant",
    },
    {
      id: "gesture-controller",
      title: "AI Virtual Hand Gesture Controller",
      category: "Computer Vision & HCI",
      description:
        "A real-time vision system mapping 21 spatial hand landmarks to system commands including slide deck navigation, volume control, and media toggling without physical contact.",
      stack: ["Python", "OpenCV", "MediaPipe", "Streamlit"],
      architecture: "21-Landmark Tracking → Euclidean Distance Metrics → Action Dispatcher",
      liveDemo: "https://ai-gesture-controller.streamlit.app",
      github: "https://github.com/hola-mundo999/ai-gesture-controller-",
    },
    {
      id: "tu-notice-hub",
      title: "TU CSIT Notice & Routine Alert Hub",
      category: "Backend Automation & Web Scraping",
      description:
        "An automated scraping pipeline monitoring Tribhuvan University (IOST) notice boards, categorizing exam routines/results with MD5 deduplication, and dispatching real-time Telegram alerts.",
      stack: ["Python", "BeautifulSoup4", "SQLite", "Telegram Bot API", "Streamlit"],
      architecture: "Target Scraping → MD5 Deduplication → SQLite Persistence → Telegram Alert Dispatch",
      liveDemo: "https://tu-csit-notice-app.streamlit.app/",
      github: "https://github.com/hola-mundo999/tu-csit-notice-hub",
    },
    {
      id: "prime-event-tickets",
      title: "Prime Event & QR Ticket Management System",
      category: "Backend REST API & Event Tool",
      description:
        "A full-stack event registration and cryptographic QR digital ticket verification platform designed for Prime IT Club hackathons, workshops, and bootcamps, complete with a live gate attendance scanner.",
      stack: ["Python", "FastAPI", "Pydantic", "qrcode / Pillow", "Tailwind CSS"],
      architecture: "FastAPI REST Endpoints → Cryptographic Tokens → Base64 QR Image → Live Gate Check-in",
      liveDemo: "https://prime-event-ticket-manager.onrender.com/",
      github: "https://github.com/hola-mundo999/prime-event-ticket-manager",
    },
  ],

  contact: {
    email: "samyog.sapkota1@gmail.com",
    github: "https://github.com/hola-mundo999",
    linkedin: "https://www.linkedin.com/in/samyogsapkota/",
    roleInClub: "Public Relations Advisor @ Prime IT Club (Prime College, Kathmandu)",
  },
};
