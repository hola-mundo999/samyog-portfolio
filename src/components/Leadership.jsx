import React from 'react';
import { Award, Users, Megaphone, CalendarCheck, Palette, HeartHandshake } from 'lucide-react';

export default function Leadership() {
  const responsibilities = [
    {
      title: 'Outreach & Speaker Relations',
      icon: Megaphone,
      desc: 'Connecting Prime IT Club with industry professionals, tech leaders, and alumni to host impactful student sessions.',
    },
    {
      title: 'Event Coordination & Workshops',
      icon: CalendarCheck,
      desc: 'Collaborating with team members to organize hackathons, coding workshops, and tech seminars for CSIT students.',
    },
    {
      title: 'Design & Visual Identity',
      icon: Palette,
      desc: 'Leveraging Figma and Photoshop to craft engaging digital flyers, announcements, and visual assets for club campaigns.',
    },
    {
      title: 'Community Building & Networking',
      icon: HeartHandshake,
      desc: 'Fostering an inclusive, encouraging community for junior students to ask questions and learn software engineering.',
    },
  ];

  return (
    <section id="leadership" className="py-20 px-4 max-w-5xl mx-auto">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-8 h-[2px] bg-emerald-500"></span>
        <span className="text-xs uppercase font-mono tracking-widest text-emerald-400">Leadership & Experience</span>
      </div>

      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Executive Committee</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              PR Director — Prime IT Club
            </h2>
            <p className="text-sm text-slate-300 mt-1">
              Prime College · Kathmandu, Nepal
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-left">
              <span className="text-[10px] font-mono text-slate-400 block">ROLE TENURE</span>
              <span className="text-xs font-semibold text-white">Active Executive Member</span>
            </div>
            <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-left">
              <span className="text-[10px] font-mono text-slate-400 block">COMMUNITY REACH</span>
              <span className="text-xs font-semibold text-indigo-400">Prime College CSIT</span>
            </div>
          </div>
        </div>

        {/* Responsibilities */}
        <div className="grid sm:grid-cols-2 gap-5 pt-8">
          {responsibilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/60 hover:border-slate-700 transition-all flex items-start gap-4"
              >
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
