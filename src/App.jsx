import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import HeroSpline from './components/HeroSpline';
import HomeOverview from './components/HomeOverview';
import PageShell from './components/PageShell';
import { Search, Bell, User } from 'lucide-react';

function Topbar() {
  return (
    <div className="sticky top-0 z-10 bg-neutral-950/70 backdrop-blur border-b border-neutral-800">
      <div className="px-6 py-3 flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2 flex-1">
          <Search size={16} className="text-neutral-500" />
          <input className="bg-transparent focus:outline-none text-sm w-full placeholder:text-neutral-500" placeholder="Search across Matrix Sync..." />
        </div>
        <div className="flex items-center gap-3 ml-auto">
          <button className="p-2 rounded-lg hover:bg-neutral-800"><Bell size={18} /></button>
          <div className="h-8 w-px bg-neutral-800" />
          <button className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-neutral-800">
            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-emerald-500 to-sky-500 grid place-items-center text-xs">MS</div>
            <User size={16} className="text-neutral-400" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Placeholder({ name }) {
  return (
    <PageShell title={name}>
      <div className="text-neutral-400 text-sm">This section is ready for deeper integration. Add data and actions as needed.</div>
    </PageShell>
  );
}

export default function App() {
  const [active, setActive] = useState('home');

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200">
      <div className="flex">
        <Sidebar active={active} onChange={setActive} />
        <main className="flex-1 h-screen overflow-y-auto">
          <Topbar />
          <div className="p-6 space-y-6">
            {active === 'home' && (
              <>
                <HeroSpline />
                <HomeOverview />
              </>
            )}
            {active === 'tasks' && <Placeholder name="Tasks" />}
            {active === 'calendar' && <Placeholder name="Calendar" />}
            {active === 'analytics' && <Placeholder name="Analytics" />}
            {active === 'tools' && <Placeholder name="Tools" />}
            {active === 'team' && <Placeholder name="Team" />}
            {active === 'settings' && <Placeholder name="Settings" />}
            {active === 'profile' && <Placeholder name="Profile" />}
            {active === 'help' && (
              <PageShell title="Help • Orbix AI">
                <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4">
                  <div className="text-sm text-neutral-300 mb-2">Ask Orbix AI</div>
                  <input className="w-full bg-neutral-800/70 rounded p-3 text-sm outline-none focus:ring-2 focus:ring-emerald-600" placeholder="How can we help you today?" />
                </div>
              </PageShell>
            )}
            {active === 'logout' && (
              <PageShell title="Logout">
                <div className="text-sm text-neutral-400">You can implement auth and sign-out logic here.</div>
              </PageShell>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
