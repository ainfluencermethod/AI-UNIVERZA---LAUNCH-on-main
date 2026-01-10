import React, { useEffect } from 'react';

export const VideoDemo: React.FC = () => {
  useEffect(() => {
    // Helper to inject scripts only once
    const injectScript = (src: string, isModule: boolean = false) => {
      if (!document.querySelector(`script[src="${src}"]`)) {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        if (isModule) script.type = 'module';
        document.body.appendChild(script);
      }
    };

    injectScript("https://fast.wistia.com/player.js");
    injectScript("https://fast.wistia.com/embed/6ktu529k4i.js", true);
  }, []);

  return (
    <div className="relative w-full aspect-video bg-black overflow-hidden">
      <style>{`
        wistia-player[media-id='6ktu529k4i']:not(:defined) {
          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/6ktu529k4i/swatch');
          display: block;
          filter: blur(5px);
          padding-top: 56.25%;
        }
      `}</style>
      {/* @ts-ignore */}
      <wistia-player media-id="6ktu529k4i" aspect="1.7777777777777777" playbar="false"></wistia-player>
    </div>
  );
};