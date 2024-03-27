"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const randomFrames = [
  {
    series: "StrangerThings",
    images: [
      "/image-1-st.jpeg",
      "/image-2-st.png",
      "/image-3-st.png",
      "/image-4-st.png",
      "/image-5-st.png",
      "/image-6-st.png",
      "/image-7-st.png",
      "/image-8-st.png",
      "/image-9-st.png",
      "/image-10-st.png",
    ],
    logo: "/StrangerThings_logo.svg",
    trailerSrc: "/stranger-things-trailer.mp4",
  },
  {
    series: "Ozark",
    images: [
      "/image-1-oz.png",
      "/image-2-oz.png",
      "/image-3-oz.png",
      "/image-4-oz.png",
      "/image-5-oz.png",
      "/image-6-oz.png",
      "/image-7-oz.png",
      "/image-8-oz.png",
      "/image-9-oz.png",
      "/image-10-oz.png",
    ],
    logo: "/ozark-logo.svg",
    trailerSrc: "/ozark-trailer.mp4",
  },
];

export default function RandomBackground() {
  const [currentFrameIndex, setCurrentFrameIndex] = useState(
    Math.floor(Math.random() * randomFrames.length)
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(
    Math.floor(Math.random() * 10)
  );
  const [playingTrailer, setPlayingTrailer] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!playingTrailer) {
        setCurrentImageIndex(Math.floor(Math.random() * 10));
        setCurrentFrameIndex(Math.floor(Math.random() * randomFrames.length));
      }
    }, 20000);
    return () => clearInterval(interval);
  }, [playingTrailer]);

  const currentFrame = randomFrames[currentFrameIndex];
  const currentLogo = currentFrame.logo;

  const playTrailer = () => {
    setPlayingTrailer(true);
  };

  const endTrailer = () => {
    setPlayingTrailer(false);
  };

  return (
    <div className="relative h-screen w-screen">
      {playingTrailer ? (
        <video
          src={currentFrame.trailerSrc}
          autoPlay
          className="absolute top-0 left-0 w-full h-full object-cover"
          onEnded={endTrailer}
        />
      ) : (
        randomFrames.map((frame, index) => (
          <img
            key={index}
            src={frame.images[currentImageIndex]}
            alt="Random Frame"
            className="absolute top-0 left-0 w-screen h-screen object-cover transition-opacity duration-1000"
            style={{
              opacity: index === currentFrameIndex ? 1 : 0,
            }}
          />
        ))
      )}
      <div className="absolute px-16 flex justify-center items-center top-1/2 -translate-y-1/2">
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
          {!playingTrailer && (
            <Button size={"lg"} onClick={playTrailer}>
              Spela Trailer
            </Button>
          )}
          <Button size={"lg"} variant="secondary">
            Mer Info
          </Button>
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
