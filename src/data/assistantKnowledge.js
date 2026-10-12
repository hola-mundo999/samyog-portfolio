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
    role: "BSc CSIT Student & Software / AI Developer",
    college: "Prime College (Affiliated with Tribhuvan University)",
    location: "Kathmandu, Nepal",
    graduationYear: "2027",
    summary:
      "Samyog is a BSc CSIT student at Prime College (Class of 2027) focused on software engineering, applied AI, and high-performance Python backends. He pairs strong computer science fundamentals (C/C++, DSA) with modern applied machine learning, computer vision, and web technologies.",
    leadership:
      "PR Director at Prime IT Club, where he coordinates tech events, speaker sessions, hackathons, and creative design campaigns for student developers.",
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
    roleInClub: "PR Director @ Prime IT Club (Prime College, Kathmandu)",
  },
};
