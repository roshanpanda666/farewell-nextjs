import { ArrowLeft, PlayCircle } from 'lucide-react';
import { RevealMessageSectionProps } from '@/types';

export default function WatchVideoSection({ onBack }: RevealMessageSectionProps) {
  const handleWatchVideo = () => {
    const videoWindow = window.open('', '_blank', 'width=800,height=450');
    if (videoWindow) {
      videoWindow.document.write(`
        <html>
          <head>
            <title>Watch Video</title>
            <style>
              body { display:flex; justify-content:center; align-items:center; height:100vh; margin:0; background:#f0f0f0; }
              video { max-width:100%; max-height:100%; border-radius:12px; box-shadow:0 4px 20px rgba(0,0,0,0.3); }
            </style>
          </head>
          <body>
            <video controls autoplay>
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </body>
        </html>
      `);
      videoWindow.document.close();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-purple-200 p-4 sm:p-8 flex flex-col items-center">
      <button onClick={onBack} className="flex items-center gap-2 px-6 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-white/90 transition-all shadow-lg mb-8">
        <ArrowLeft className="w-5 h-5" /> Back
      </button>

      <h1 className="text-3xl sm:text-4xl font-bold text-pink-600 mb-6 text-center">Watch Our Farewell Video</h1>
      <p className="text-gray-600 text-sm sm:text-base text-center mb-12">Relive the memories and moments shared together.</p>

      <button onClick={handleWatchVideo} className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-3xl font-bold hover:scale-105 transition-all shadow-xl text-lg sm:text-xl">
        <PlayCircle className="w-6 h-6 sm:w-8 sm:h-8" /> Watch Video
      </button>
    </div>
  );
}
