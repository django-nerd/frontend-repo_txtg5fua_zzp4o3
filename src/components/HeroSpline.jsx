import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroSpline() {
  return (
    <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950">
      <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-neutral-900/40" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-6">
        <h2 className="text-lg md:text-2xl font-semibold text-white">Futuristic Workspace</h2>
        <p className="text-neutral-400 text-sm md:text-base">Glowing tiles, minimal motion, corporate precision.</p>
      </div>
    </div>
  );
}
