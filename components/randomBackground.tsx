"use client";

import { useEffect, useState } from "react";

const randomFrames = [
  {
    series: "StrangerThings",
    images: [
      "/image-1.jpeg",
      "/image-2.png",
      "/image-3.png",
      "/image-4.png",
      "/image-5.png",
    ],
    logo: "/StrangerThings_logo.svg",
  },
  {
    series: "Ozark",
    images: [
      "/image-6.png",
      "/image-7.png",
      "/image-8.png",
      "/image-9.png",
      "/image-10.png",
    ],
    logo: "/ozark-logo.svg",
  },
];

export default function RandomBackground() {
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 5);
      setCurrentFrameIndex((prevIndex) => (prevIndex + 1) % 2);
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  const currentFrame = randomFrames[currentFrameIndex];
  const currentLogo = currentFrame.logo;

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {randomFrames.map((frame, index) => (
        <img
          key={index}
          src={frame.images[currentImageIndex]}
          alt="Random Frame"
          className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000"
          style={{
            opacity: index === currentFrameIndex ? 1 : 0,
          }}
        />
      ))}

      <img
        key={currentLogo}
        src={currentLogo}
        alt="Random Logo"
        className="absolute top-1/3 left-14 transform -translate-y-1/2 transition-opacity duration-1000"
        style={{
          maxWidth: "20%",
          maxHeight: "20%",
          opacity: 0.7,
          filter:
            currentFrame.series === "Ozark"
              ? "brightness(0) invert(1)"
              : "none",
        }}
      />

      <div
        className="absolute inset-x-0 bottom-0 h-52"
        style={{
          background:
            "linear-gradient(180deg, transparent 0 5%, hsl(var(--background)) 100% 100%)",
        }}
      ></div>
    </div>
  );
}
