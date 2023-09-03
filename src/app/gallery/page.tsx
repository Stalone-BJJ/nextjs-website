"use client";

import Script from "next/script";

declare global {
  interface Window {
    beholdWidgets: {
      initialize: () => void;
    };
  }
}

export default function Gallery() {
  const onReady = () => {
    if (window) {
      window.beholdWidgets.initialize();
    }
  };

  return (
    <div className="sm:container mx-auto my-8 p-4 sm:p-0">
      <figure data-behold-id="xM3hlt47kIo8RvsODLGZ"></figure>
      <Script
        onReady={onReady}
        src="https://w.behold.so/widget.js"
        strategy="afterInteractive"
        type="module"
      />
    </div>
  );
}
