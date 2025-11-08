import React from 'react';

export default function PageShell({ title, children, right }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-semibold text-white">{title}</h1>
        {right}
      </div>
      <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 min-h-[300px]">
        {children}
      </div>
    </div>
  );
}
