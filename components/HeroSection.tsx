import { Sparkles, Play } from 'lucide-react';
import { HeroSectionProps } from '@/types';

export default function HeroSection({ onReveal }: HeroSectionProps) {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-400 via-pink-400 to-orange-300">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large pulsing orbs */}
        <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse top-10 -left-20" />
        <div 
          className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse bottom-20 -right-20" 
          style={{ animationDelay: '2s' }} 
        />
        
        {/* Floating bubbles */}
        <div className="absolute w-64 h-64 bg-purple-300/20 rounded-full blur-2xl animate-float-slow top-1/2 left-1/4" />
        <div 
          className="absolute w-48 h-48 bg-pink-300/20 rounded-full blur-2xl animate-float-slow bottom-1/4 right-1/3" 
          style={{ animationDelay: '3s' }} 
        />
        <div 
          className="absolute w-56 h-56 bg-orange-300/15 rounded-full blur-3xl animate-float-slow top-1/3 right-1/4" 
          style={{ animationDelay: '1.5s' }} 
        />
        
        {/* Drifting gradient shapes */}
        <div className="absolute w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-drift top-20 left-1/3" />
        <div 
          className="absolute w-72 h-72 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-2xl animate-drift-reverse bottom-32 left-1/2" 
          style={{ animationDelay: '2s' }} 
        />
      </div>

      {/* Floating sparkles */}
      <div className="absolute top-20 left-1/4 animate-float">
        <div className="text-white/40 text-2xl">✨</div>
      </div>
      <div className="absolute top-1/3 right-1/4 animate-float-delay-1">
        <div className="text-white/40 text-xl">✨</div>
      </div>
      <div className="absolute bottom-1/3 left-1/3 animate-float-delay-2">
        <div className="text-white/40 text-3xl">✨</div>
      </div>
      <div className="absolute bottom-40 right-1/4 animate-float-delay-3">
        <div className="text-white/40 text-2xl">✨</div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          A Special Message Awaits
        </h1>
        
        <p className="text-white/90 text-lg mb-12 text-center">
          Click the button below to reveal a heartfelt farewell message
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button
            onClick={onReveal}
            className="flex items-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-white/90 transition-all transform hover:scale-105 shadow-lg"
            aria-label="Reveal farewell message"
          >
            <Sparkles className="w-5 h-5" />
            Reveal Message
          </button>
          
          <button 
            className="flex items-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-white/90 transition-all transform hover:scale-105 shadow-lg"
            aria-label="Watch farewell video"
          >
            <Play className="w-5 h-5" />
            Watch Video
          </button>
        </div>

        <p className="text-white/70 text-sm">
          Read the message or watch the video
        </p>
      </div>
    </div>
  );
}