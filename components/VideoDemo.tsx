import React, { useEffect, useState, useRef } from 'react';
import { VolumeX, Volume2, Play } from 'lucide-react';

interface VideoDemoProps {
  videoId: string;
  thumbnailUrl?: string;
}

export const VideoDemo: React.FC<VideoDemoProps> = ({ videoId, thumbnailUrl }) => {
  const [isInitialOverlayActive, setIsInitialOverlayActive] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const wistiaApiRef = useRef<any>(null);

  useEffect(() => {
    // Inject Wistia main script
    const injectMainScript = () => {
      if (!document.getElementById("wistia-e-v1")) {
        const script = document.createElement('script');
        script.src = "https://fast.wistia.com/assets/external/E-v1.js";
        script.id = "wistia-e-v1";
        script.async = true;
        document.body.appendChild(script);
      }
    };

    injectMainScript();

    // Initialize Wistia queue with strict VSL options (unskippable)
    // @ts-ignore
    window._wq = window._wq || [];
    // @ts-ignore
    window._wq.push({
      id: videoId,
      options: {
        autoPlay: true,
        silentAutoPlay: 'allow',
        muted: true,
        playbar: false, // UNSKIPPABLE: Disable progress bar
        playButton: false, // Disable big play button
        smallPlayButton: false, // Disable small play button
        settingsControl: false, // Disable settings
        fullscreenButton: false, // Disable fullscreen to keep focus on VSL
        volumeControl: false, // We use our own custom control
        videoFoam: true,
      },
      onReady: (video: any) => {
        wistiaApiRef.current = video;
        video.mute(); // Start muted for browser compatibility
        video.play();
      }
    });

    return () => {
      if (wistiaApiRef.current) {
        wistiaApiRef.current.remove();
      }
    };
  }, [videoId]);

  const handleStartWithSound = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const activateSound = (video: any) => {
      if (video) {
        try {
          // ENSURE VIDEO STARTS FROM BEGINNING WITH SOUND
          video.unmute();
          video.volume(1.0);
          video.time(0); // Seek to the beginning
          video.play();
          setIsMuted(false);
          setIsInitialOverlayActive(false);
        } catch (err) {
          console.error("Wistia unmute error:", err);
          setIsInitialOverlayActive(false);
        }
      }
    };

    if (wistiaApiRef.current) {
      activateSound(wistiaApiRef.current);
    } else {
      // Safety check for global Wistia object to avoid TypeError
      // @ts-ignore
      const video = window.Wistia?.video ? window.Wistia.video(videoId) : null;
      if (video) {
        wistiaApiRef.current = video;
        activateSound(video);
      } else {
        // Fallback to queue if not yet ready
        // @ts-ignore
        window._wq.push({
          id: videoId,
          onReady: (v: any) => {
            wistiaApiRef.current = v;
            activateSound(v);
          }
        });
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (wistiaApiRef.current) {
      if (isMuted) {
        wistiaApiRef.current.unmute();
        wistiaApiRef.current.volume(1.0);
        setIsMuted(false);
      } else {
        wistiaApiRef.current.mute();
        setIsMuted(true);
      }
    }
  };

  return (
    <div className="relative w-full aspect-video bg-black overflow-hidden group select-none rounded-xl md:rounded-[1.5rem] shadow-2xl">
      <style>{`
        .wistia_embed {
          width: 100% !important;
          height: 100% !important;
        }
        @keyframes pulse-gold {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 215, 0, 0.4); }
          50% { transform: scale(1.05); box-shadow: 0 0 40px 10px rgba(255, 215, 0, 0); }
        }
        .animate-pulse-gold {
          animation: pulse-gold 2s infinite ease-in-out;
        }
      `}</style>

      {/* Wistia Container */}
      <div 
        className={`wistia_embed wistia_async_${videoId} videoFoam=true`}
        style={{ height: '100%', width: '100%', position: 'relative' }}
      >
        &nbsp;
      </div>

      {/* Initial Interaction Overlay with Custom Thumbnail */}
      {isInitialOverlayActive && (
        <div 
          onClick={handleStartWithSound}
          className="absolute inset-0 z-[60] cursor-pointer flex flex-col items-center justify-center transition-all duration-500 hover:bg-black/20 backdrop-blur-[2px] bg-cover bg-center"
          style={thumbnailUrl ? { backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${thumbnailUrl}')` } : { backgroundColor: 'rgba(0,0,0,0.75)' }}
        >
          {/* Top Yellow Pill - Smaller */}
          <div className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 z-40">
              <div className="bg-[#FFD700] text-black px-5 py-2 md:px-6 md:py-2.5 rounded-full shadow-[0_8px_30px_rgba(255,215,0,0.4)] flex items-center gap-2 border border-white/20">
                  <VolumeX className="w-4 h-4 md:w-5 md:h-5 fill-black" strokeWidth={3} />
                  <span className="font-black text-[9px] md:text-[11px] uppercase tracking-[0.15em] whitespace-nowrap">
                      KLIKNI ZA ZVOK
                  </span>
              </div>
          </div>

          {/* Central Play Button Visual - Scaled Down */}
          <div className="relative flex flex-col items-center gap-4 md:gap-6">
            <div className="relative w-20 h-20 md:w-32 md:h-32 bg-[#FFD700] rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(255,215,0,0.4)] transition-all hover:scale-110 active:scale-95 z-10 animate-pulse-gold">
              <Play className="w-10 h-10 md:w-16 md:h-16 fill-black text-black ml-2" />
            </div>
            
            {/* Bold Call to Action - Scaled Down */}
            <h3 className="text-white font-black text-xl md:text-4xl uppercase tracking-[0.15em] drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
                POGLEJ VIDEO
            </h3>
          </div>
        </div>
      )}

      {/* Persistent Volume Control */}
      {!isInitialOverlayActive && (
        <button 
          onClick={toggleMute}
          className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-[70] bg-[#FFD700] hover:bg-yellow-400 p-3 md:p-4 rounded-full border border-white/30 flex items-center justify-center shadow-[0_0_25px_rgba(255,215,0,0.3)] transition-all active:scale-90 group"
          title={isMuted ? "Vklopi zvok" : "Izklopi zvok"}
        >
          {isMuted ? (
            <VolumeX className="text-black w-5 h-5 md:w-7 md:h-7" strokeWidth={3} />
          ) : (
            <Volume2 className="text-black w-5 h-5 md:w-7 md:h-7" strokeWidth={3} />
          )}
        </button>
      )}

      {/* Fake Red Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 md:h-1.5 bg-white/10 z-50">
          <div className="h-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)] transition-all duration-1000" style={{ width: '15%' }}></div>
      </div>

      {/* Live Badge (Top Right) - Smaller */}
      <div className="absolute top-4 right-4 md:top-6 md:right-6 z-[70] pointer-events-none">
        <div className="bg-black/70 backdrop-blur-md px-4 py-1.5 md:px-5 md:py-2 rounded-full border border-white/20 flex items-center gap-2.5 shadow-2xl">
            <div className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse shadow-[0_0_12px_rgba(220,38,38,0.7)]"></div>
            <span className="text-[9px] md:text-[10px] font-black text-white uppercase tracking-[0.2em]">V ŽIVO</span>
        </div>
      </div>
    </div>
  );
};