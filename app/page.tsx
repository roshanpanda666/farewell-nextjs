'use client';

import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import RevealMessageSection from '@/components/RevealMessageSection';

export default function Home() {
  const [showMessage, setShowMessage] = useState<boolean>(false);

  return (
    <main>
      {showMessage ? (
        <RevealMessageSection onBack={() => setShowMessage(false)} />
      ) : (
        <HeroSection onReveal={() => setShowMessage(true)} />
      )}
    </main>
  );
}