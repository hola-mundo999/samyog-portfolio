import React from 'react';
import { Award, Megaphone, CalendarCheck, Palette, HeartHandshake } from 'lucide-react';

export default function Leadership() {
  const responsibilities = [
    {
      title: 'Industry Outreach & Speaker Relations',
      icon: Megaphone,
      desc: 'Connecting Prime IT Club with seasoned software engineers, AI researchers, and alumni to host impactful technical sessions and panels.',
    },
    {
      title: 'Event Coordination & Hackathons',
      icon: CalendarCheck,
      desc: 'Collaborating across club teams to organize campus hackathons, algorithmic coding bootcamps, and developer workshops for CSIT cohorts.',
    },
    {
      title: 'Visual Identity & Creative Campaigns',
      icon: Palette,
      desc: 'Leveraging Figma and Adobe Photoshop to design digital event flyers, club branding, and promotional releases across digital channels.',
    },
    {
      title: 'Student Community & Mentorship',
      icon: HeartHandshake,
      desc: 'Cultivating an approachable, peer-driven engineering community for junior students to ask questions, learn Git, and pair program.',
    },
  ];

  return (
    <section id="leadership" className="py-24 px-4 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="w-8 h-[1px] bg-cyan-400" />
        <span className="text-[11px] uppercase font-mono tracking-widest text-cyan-400 font-bold">
          04 // Leadership & Community Impact
        </span>
      </div>

      <div className="surface-card rounded-3xl p-6 sm:p-10 border-slate-800/80 relative overflow-hidden">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Executive Committee</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              PR Director — Prime IT Club
            </h2>
            <p className="text-sm text-slate-300 mt-1 font-medium">
              Prime College · Kathmandu, Nepal
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-left">
              <span className="text-[10px] font-mono font-bold text-slate-400 block uppercase">
                Role Status
              </span>
              <span className="text-xs font-bold text-white">Active Executive Member</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-left">
              <span className="text-[10px] font-mono font-bold text-slate-400 block uppercase">
                Campus Reach
              </span>
              <span className="text-xs font-bold text-cyan-400">Prime College CSIT</span>
            </div>
          </div>
        </div>

        {/* Responsibilities Matrix */}
        <div className="grid sm:grid-cols-2 gap-5 pt-8">
          {responsibilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex items-start gap-4"
              >
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
