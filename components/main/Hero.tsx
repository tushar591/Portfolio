import React from "react";
import HeroContents from "../sub/HeroContents";

export default function Hero() {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        loop
        muted
        className="rotate-180 absolute top-[-340px] left-0 z-[-1] w-full h-full object-cover"
      >
        <source
            src='/blackhole.webm'
            type='video/webm'
        />
      </video>
      <HeroContents />
    </div>
  );
}
