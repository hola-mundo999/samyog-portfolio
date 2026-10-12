/**
 * Chat Assistant Service
 * 
 * Provides verified portfolio answers based on local data.
 * 
 * ============================================================================
 * FUTURE AI BACKEND INTEGRATION:
 * ============================================================================
 * When you are ready to connect a real LLM / AI backend (e.g., Google Gemini,
 * Groq, OpenAI, or a self-hosted FastAPI / Ollama service):
 * 
 * 1. Set up an endpoint (e.g., POST /api/chat or a serverless function).
 * 2. In this file, update `getAssistantResponse()` to send the user's message
 *    and system context to your backend:
 * 
 *    ```javascript
 *    const response = await fetch('/api/chat', {
 *      method: 'POST',
 *      headers: { 'Content-Type': 'application/json' },
 *      body: JSON.stringify({ message: userMessage, history })
 *    });
 *    const data = await response.json();
 *    return data.reply;
 *    ```
 * 
 * 3. Never expose private API keys in client-side code.
 * ============================================================================
 */

import { assistantKnowledge } from '../data/assistantKnowledge';

export const SUGGESTED_QUESTIONS = [
  'Who is Samyog?',
  'What does he work on?',
  'What technologies does he use?',
  'Show me his projects',
  'How can I contact him?',
];

export async function getAssistantResponse(userMessage, _conversationHistory = []) {
  // Simulate natural brief latency (400-600ms) for an authentic, fluid interaction
  await new Promise((resolve) => setTimeout(resolve, 450));

  const text = userMessage.trim().toLowerCase();

  // 1. Who is Samyog?
  if (
    text.includes('who is') ||
    text.includes('about samyog') ||
    text.includes('background') ||
    text.includes('introduce') ||
    text === 'who is samyog?'
  ) {
    return (
      `**Samyog** is a BSc CSIT student at **Prime College** (Tribhuvan University, Kathmandu, Class of 2027) ` +
      `and the **PR Director of Prime IT Club**.\n\n` +
      `He specializes in **Applied AI**, **Computer Vision**, and high-performance **Python backends**, ` +
      `with strong roots in low-level systems programming (C/C++) and data structures.`
    );
  }

  // 2. What does he work on? / Interests
  if (
    text.includes('what does he work on') ||
    text.includes('interests') ||
    text.includes('focus') ||
    text.includes('building') ||
    text === 'what does he work on?'
  ) {
    return (
      `Samyog focuses on engineering practical software across three core domains:\n\n` +
      `1. **Applied AI & NLP**: Document chunking, semantic retrieval, and study tools using LLMs.\n` +
      `2. **Computer Vision & HCI**: Real-time hand landmark tracking and gesture dispatchers with OpenCV & MediaPipe.\n` +
      `3. **High-Performance Backends**: REST APIs, cryptographic QR verification, and automated web scrapers with FastAPI & SQLite.`
    );
  }

  // 3. Technologies / Tech stack / Skills
  if (
    text.includes('technologies') ||
    text.includes('tech stack') ||
    text.includes('tools') ||
    text.includes('skills') ||
    text.includes('language') ||
    text === 'what technologies does he use?'
  ) {
    return (
      `Here is Samyog's verified technology toolkit:\n\n` +
      `• **Languages**: Python, C, C++, JavaScript (ES6+), PHP\n` +
      `• **AI & Vision**: OpenCV, MediaPipe, Gemini / Groq API routing, Prompt Engineering\n` +
      `• **Web & Backend**: FastAPI, Streamlit, React, Tailwind CSS, SQLite, BeautifulSoup4\n` +
      `• **Engineering & Design**: Git/GitHub, Linux CLI, Figma (UI/UX), Photoshop`
    );
  }

  // 4. Projects / Demos / Builds
  if (
    text.includes('project') ||
    text.includes('build') ||
    text.includes('demos') ||
    text.includes('show me his projects') ||
    text === 'show me his projects'
  ) {
    const list = assistantKnowledge.projects
      .map(
        (p, idx) =>
          `**${idx + 1}. [${p.title}](${p.liveDemo})**\n` +
          `   • *Stack*: ${p.stack.join(', ')}\n` +
          `   • *Demo*: [Live App](${p.liveDemo}) | *Code*: [GitHub](${p.github})`
      )
      .join('\n\n');

    return (
      `Here are the 4 featured systems built and deployed by Samyog:\n\n${list}\n\n` +
      `You can test all interactive demos right in the **Projects** section of this portfolio!`
    );
  }

  // 5. Contact / Email / Socials
  if (
    text.includes('contact') ||
    text.includes('email') ||
    text.includes('reach') ||
    text.includes('hire') ||
    text.includes('linkedin') ||
    text.includes('github') ||
    text === 'how can i contact him?'
  ) {
    return (
      `You can connect with Samyog through:\n\n` +
      `• **Email**: [samyog.sapkota1@gmail.com](mailto:samyog.sapkota1@gmail.com)\n` +
      `• **GitHub**: [github.com/hola-mundo999](https://github.com/hola-mundo999)\n` +
      `• **LinkedIn**: [linkedin.com/in/samyogsapkota](https://www.linkedin.com/in/samyogsapkota/)\n` +
      `• **College / Club**: Prime IT Club, Prime College, Kathmandu, Nepal.`
    );
  }

  // 6. Leadership / Prime IT Club
  if (
    text.includes('club') ||
    text.includes('prime it club') ||
    text.includes('director') ||
    text.includes('leadership')
  ) {
    return (
      `Samyog serves as the **PR Director of Prime IT Club** at Prime College.\n\n` +
      `In this role, he leads outreach with tech industry speakers, coordinates hackathons and workshops, ` +
      `designs visual branding assets, and mentors fellow CSIT students in collaborative software development.`
    );
  }

  // 7. Education / Degree / College
  if (
    text.includes('college') ||
    text.includes('education') ||
    text.includes('degree') ||
    text.includes('csit') ||
    text.includes('university')
  ) {
    return (
      `Samyog is pursuing a **Bachelor of Science in Computer Science and Information Technology (BSc CSIT)** ` +
      `at **Prime College**, affiliated with **Tribhuvan University (TU)**, Kathmandu, graduating in **2027**.\n\n` +
      `Core coursework includes Data Structures & Algorithms, OOP with C++, Database Management Systems, ` +
      `Computer Architecture, and Discrete Mathematics.`
    );
  }

  // Fallback for unverified / unknown questions:
  return (
    `I don't have verified information in Samyog's published portfolio records for that specific question yet.\n\n` +
    `For inquiries regarding projects, collaboration, or internships, please reach out to Samyog directly at ` +
    `**[samyog.sapkota1@gmail.com](mailto:samyog.sapkota1@gmail.com)** or via **[LinkedIn](https://www.linkedin.com/in/samyogsapkota/)**.`
  );
}
