"use client";

import { Button } from "@/components/ui/button";
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
    <div className="relative h-screen w-screen">
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
      <div className="absolute px-16 flex justify-center items-center top-1/3 -translate-y-1/2">
        <div className="flex flex-col gap-4 items-left">
          <img
            key={currentLogo}
            src={currentLogo}
            alt="Random Logo"
            className="transition-opacity duration-1000"
            style={{
              width: "400px",
              height: "auto",
              opacity: 0.7,
              filter:
                currentFrame.series === "Ozark"
                  ? "brightness(0) invert(1)"
                  : "none",
            }}
          />
          <div className="flex align-middle gap-2">
            <Button size={"lg"}>Spela Trailer</Button>
            <Button size={"lg"} variant="secondary">
              Mer Info
            </Button>
          </div>
        </div>
      </div>

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
