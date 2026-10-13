import React from 'react';
import {
  Award,
  Megaphone,
  CalendarCheck,
  Palette,
  HeartHandshake,
  MapPin,
  Calendar,
  CheckCircle2,
} from 'lucide-react';

export default function Leadership() {
  const timelinePositions = [
    {
      title: 'Public Relations Advisor',
      roleType: 'Advisory Board · Current Role',
      period: 'September 2026 – Present',
      isCurrent: true,
      description:
        'Advising executive committee members on club strategy, establishing sustained industry partnerships, and mentoring incoming leaders on high-impact hackathon execution.',
    },
    {
      title: 'Public Relations Director',
      roleType: 'Executive Committee · Full-time',
      period: 'September 2025 – September 2026',
      isCurrent: false,
      description:
        'Led the PR wing, directed external outreach with software leaders and alumni guest speakers, spearheaded marketing campaigns for tech events, and represented student interests.',
    },
    {
      title: 'Public Relations Officer',
      roleType: 'Executive Committee · Full-time',
      period: 'July 2024 – September 2025',
      isCurrent: false,
      description:
        'Engaged the student developer community, authored event press materials, crafted digital flyers and branding assets in Figma and Photoshop, and facilitated campus workshop operations.',
    },
  ];

  const keyImpacts = [
    {
      title: 'Industry Outreach & Speaker Relations',
      icon: Megaphone,
      desc: 'Bridging Prime IT Club with industry software engineers, alumni, and tech companies for technical sessions and interactive panels.',
    },
    {
      title: 'Hackathons & Coding Bootcamps',
      icon: CalendarCheck,
      desc: 'Collaborating cross-functionally to plan and execute competitive programming events and hands-on developer workshops.',
    },
    {
      title: 'Visual Identity & Branding',
      icon: Palette,
      desc: 'Leveraging Figma and Adobe Photoshop to design digital event collateral, branding kits, and social media campaigns.',
    },
    {
      title: 'Peer Mentorship & Community',
      icon: HeartHandshake,
      desc: 'Cultivating an approachable, peer-driven tech culture for junior CSIT students to learn Git, pair program, and build projects.',
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 max-w-5xl mx-auto scroll-mt-20">
      {/* Anchor for backward compatibility with #leadership */}
      <div id="leadership" className="-mt-24 pt-24 scroll-mt-20" />

      {/* Section Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="w-8 h-[2px] bg-cyan-500 dark:bg-cyan-400" />
        <span className="text-xs uppercase font-mono tracking-widest text-cyan-600 dark:text-cyan-400 font-bold">
          Experience & Leadership
        </span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Community Leadership & Career Progression
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm mt-2 max-w-xl leading-relaxed">
            Multi-year leadership journey fostering developer culture, technical workshops, and campus community engagement.
          </p>
        </div>
      </div>

      {/* Main Single Organization Card */}
      <div className="surface-card rounded-2xl sm:rounded-3xl p-5 sm:p-10 relative overflow-hidden mb-8">
        {/* Header Block: Prime IT Club Branding */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 sm:pb-8 border-b border-slate-200 dark:border-slate-800/80">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl p-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-md shrink-0 flex items-center justify-center overflow-hidden">
              <img
                src="/prime-it-club.png"
                alt="Prime IT Club Official Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-[11px] sm:text-xs font-mono font-bold mb-1.5 sm:mb-2">
                <Award className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>Prime IT Club · Leadership</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Prime IT Club
              </h3>
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600 dark:text-slate-400 mt-1 font-medium">
                <span>Prime College (TU)</span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  Kathmandu, Nepal
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-left">
              <span className="text-[10px] font-mono font-bold text-slate-500 dark:text-slate-400 block uppercase">
                Active Status
              </span>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Current PR Advisor
              </span>
            </div>
          </div>
        </div>

        {/* 3-Position Chronological Vertical Timeline Progression */}
        <div className="pt-6 sm:pt-8 pb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-6">
            Connected Role Progression & Tenure:
          </h4>

          <div className="relative pl-6 sm:pl-8 space-y-6 sm:space-y-8 before:absolute before:left-[11px] sm:before:left-[15px] before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
            {timelinePositions.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Node icon / indicator */}
                <div
                  className={`absolute -left-6 sm:-left-8 top-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                    item.isCurrent
                      ? 'bg-cyan-500 border-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/30 ring-4 ring-cyan-500/20'
                      : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400'
                  }`}
                >
                  {item.isCurrent ? (
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600" />
                  )}
                </div>

                {/* Content Box */}
                <div
                  className={`p-4 sm:p-6 rounded-2xl border transition-all ${
                    item.isCurrent
                      ? 'bg-cyan-500/10 dark:bg-cyan-950/20 border-cyan-500/40 shadow-sm'
                      : 'bg-slate-50/70 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <h5 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h5>
                      {item.isCurrent && (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-[10px] font-mono font-bold">
                          CURRENT ROLE
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block mb-2 font-mono">
                    {item.roleType}
                  </span>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Responsibilities & Impact Matrix */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800/80">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-4">
            Key Departmental Responsibilities & Deliverables:
          </h4>
          <div className="grid sm:grid-cols-2 gap-4">
            {keyImpacts.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all flex items-start gap-3.5"
                >
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                      {item.title}
                    </h5>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
