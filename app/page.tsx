'use client';

import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import RevealMessageSection from '@/components/RevealMessageSection';
import WatchVideoSection from '@/components/WatchVideoSection';

export default function Home() {
  const [activeSection, setActiveSection] = useState<'hero' | 'message' | 'video'>('hero');

  return (
    <main>
      {activeSection === 'hero' && (
        <HeroSection 
          onReveal={() => setActiveSection('message')} 
          onWatchVideo={() => setActiveSection('video')} 
        />
      )}
      {activeSection === 'message' && (
        <RevealMessageSection onBack={() => setActiveSection('hero')} />
      )}
      {activeSection === 'video' && (
        <WatchVideoSection onBack={() => setActiveSection('hero')} />
      )}
    </main>
  );
}
