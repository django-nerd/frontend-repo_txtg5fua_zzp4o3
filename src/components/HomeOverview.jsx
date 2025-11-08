import React from 'react';
import { Users, CheckSquare, Video, FolderKanban, LineChart, FileText, Wrench, Activity, Bell, Droplets, Coffee } from 'lucide-react';

function StatCard({ icon: Icon, title, value, subtitle, accent = 'from-emerald-500/20 to-transparent' }) {
  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 relative overflow-hidden">
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent}`} />
      <div className="relative flex items-center gap-3">
        <div className="p-2 rounded-lg bg-neutral-800">
          <Icon size={18} />
        </div>
        <div>
          <div className="text-sm text-neutral-400">{title}</div>
          <div className="text-xl font-semibold text-white">{value}</div>
        </div>
      </div>
      {subtitle && <div className="relative mt-2 text-xs text-neutral-400">{subtitle}</div>}
    </div>
  );
}

function MiniCard({ icon: Icon, title, action }) {
  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-neutral-800"><Icon size={18} /></div>
        <div>
          <div className="text-sm text-neutral-300">{title}</div>
          {action && <button className="text-xs text-emerald-400 hover:text-emerald-300">{action}</button>}
        </div>
      </div>
      <Bell size={16} className="text-neutral-500" />
    </div>
  );
}

export default function HomeOverview() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard icon={Users} title="Online Users" value="128" subtitle="+12 today" accent="from-emerald-500/15 to-transparent" />
        <StatCard icon={CheckSquare} title="Tasks To Do" value="37" subtitle="5 due today" accent="from-sky-500/15 to-transparent" />
        <StatCard icon={Video} title="Instant Meetings" value="3 rooms" subtitle="Join now" accent="from-violet-500/15 to-transparent" />
        <StatCard icon={FolderKanban} title="Projects Ongoing" value="8" subtitle="2 at risk" accent="from-amber-500/15 to-transparent" />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <LineChart size={18} />
                <h3 className="font-semibold">Project Graph</h3>
              </div>
              <button className="text-xs text-neutral-400 hover:text-white">Last 30 days</button>
            </div>
            <div className="mt-4 h-40 rounded-lg bg-neutral-800/60 grid grid-cols-12 gap-2 p-2">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="flex flex-col justify-end">
                  <div style={{ height: `${20 + Math.random() * 70}%` }} className="bg-emerald-500/70 hover:bg-emerald-400/90 transition-colors rounded" />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MiniCard icon={FileText} title="Reports" action="View" />
            <MiniCard icon={Wrench} title="Tools" action="Open" />
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5">
            <div className="flex items-center gap-2">
              <Activity size={18} />
              <h3 className="font-semibold">Analytics</h3>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="bg-neutral-800/60 rounded-lg p-3">
                <div className="text-xs text-neutral-400">CTR</div>
                <div className="text-lg font-semibold">3.8%</div>
              </div>
              <div className="bg-neutral-800/60 rounded-lg p-3">
                <div className="text-xs text-neutral-400">Sessions</div>
                <div className="text-lg font-semibold">5.2k</div>
              </div>
              <div className="bg-neutral-800/60 rounded-lg p-3">
                <div className="text-xs text-neutral-400">Bounce</div>
                <div className="text-lg font-semibold">24%</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-neutral-800"><Droplets size={18} /></div>
                <div>
                  <div className="text-sm text-neutral-300">Drink Water</div>
                  <div className="text-xs text-neutral-400">250ml every hour</div>
                </div>
              </div>
              <button className="px-2 py-1 rounded bg-emerald-600 text-xs">Done</button>
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-neutral-800"><Coffee size={18} /></div>
                <div>
                  <div className="text-sm text-neutral-300">Coffee Break</div>
                  <div className="text-xs text-neutral-400">Stretch + 5min walk</div>
                </div>
              </div>
              <button className="px-2 py-1 rounded bg-emerald-600 text-xs">Snooze</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
