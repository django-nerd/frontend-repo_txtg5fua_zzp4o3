import React from 'react';
import { Home, CheckSquare, Calendar, BarChart3, Wrench, Users, Settings, User, LogOut, HelpCircle } from 'lucide-react';

const menuItems = [
  { key: 'home', label: 'Home', icon: Home },
  { key: 'tasks', label: 'Tasks', icon: CheckSquare },
  { key: 'calendar', label: 'Calendar', icon: Calendar },
  { key: 'analytics', label: 'Analytics', icon: BarChart3 },
  { key: 'tools', label: 'Tools', icon: Wrench },
  { key: 'team', label: 'Team', icon: Users },
  { key: 'settings', label: 'Settings', icon: Settings },
  { key: 'profile', label: 'Profile', icon: User },
  { key: 'help', label: 'Help • Orbix AI', icon: HelpCircle },
  { key: 'logout', label: 'Logout', icon: LogOut },
];

export default function Sidebar({ active, onChange }) {
  return (
    <aside className="h-screen w-72 bg-neutral-900/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/60 border-r border-neutral-800 text-neutral-200 flex flex-col">
      <div className="px-5 py-6 border-b border-neutral-800">
        <div className="text-xl font-semibold tracking-tight">Matrix Sync</div>
        <div className="text-xs text-neutral-400 mt-1">Dashboard System</div>
      </div>
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.key;
            return (
              <li key={item.key}>
                <button
                  onClick={() => onChange(item.key)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-neutral-800 text-white'
                      : 'hover:bg-neutral-800/60 text-neutral-300'
                  }`}
                >
                  <Icon size={18} />
                  <span className="text-sm">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="p-4 text-xs text-neutral-400 border-t border-neutral-800">
        v1.0 • Soft Dark Mode
      </div>
    </aside>
  );
}
