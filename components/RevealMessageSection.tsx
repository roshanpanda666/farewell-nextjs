import { ArrowLeft, Users, Heart, Star, Sparkles } from 'lucide-react';
import { RevealMessageSectionProps } from '@/types';

export default function RevealMessageSection({ onBack }: RevealMessageSectionProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-purple-200 p-4 sm:p-8">
      <button onClick={onBack} className="flex items-center gap-2 px-6 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-white/90 transition-all shadow-lg mb-8">
        <ArrowLeft className="w-5 h-5" /> Back
      </button>

      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-pink-600 mb-2">A Heartfelt Farewell</h1>
        <p className="text-gray-600 text-sm sm:text-base">From Your Juniors with Love</p>
        <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-4 rounded-full" />
      </div>

      {/* Message card */}
      <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl relative">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
            <Users className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-purple-600">Dear Seniors,</h2>
        </div>

        <div className="space-y-6 text-gray-700 text-sm sm:text-base">
          <p className="border-l-4 border-purple-300 pl-4 py-2 bg-purple-50/50 rounded-r">
            As you embark on new adventures beyond these walls, we want you to know how grateful we are...
          </p>
          <p className="border-l-4 border-pink-300 pl-4 py-2 bg-pink-50/50 rounded-r">
            Though distance may separate us, the bonds we've created will remain forever in our hearts...
          </p>
          <p className="border-l-4 border-pink-400 pl-4 py-2 bg-pink-50/50 rounded-r">
            Thank you for everything you've done for us. This isn't goodbye, it's see you later.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 relative pb-16 sm:pb-20">
          <p className="text-gray-600 mb-2">With love and warm wishes,</p>
          <p className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Your Juniors</p>
          <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8">
            <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-pink-400 fill-pink-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
