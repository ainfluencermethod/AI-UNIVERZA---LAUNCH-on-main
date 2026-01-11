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
    injectScript("https://fast.wistia.com/embed/td0bu2np6o.js", true);
  }, []);

  return (
    <div className="relative w-full aspect-video bg-black overflow-hidden">
      <style>{`
        wistia-player[media-id='td0bu2np6o']:not(:defined) {
          background: center / cover no-repeat url('https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/696182c0f8a93b5ecc52aa2d.webp');
          display: block;
          padding-top: 56.25%;
        }
      `}</style>
      {/* @ts-ignore */}
      <wistia-player media-id="td0bu2np6o" aspect="1.7777777777777777" playbar="false"></wistia-player>
    </div>
  );
};