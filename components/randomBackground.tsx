"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

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
];

export default function RandomBackground() {
  const [playingTrailer, setPlayingTrailer] = useState(false);
  const [currentFrame] = useState(randomFrames[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === currentFrame.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [currentFrame.images.length]);

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
        <>
          {currentFrame.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Random Frame"
              className="absolute w-screen h-screen object-cover"
              style={{
                opacity: index === currentImageIndex ? 1 : 0,
                transition: "opacity 1s ease",
              }}
            />
          ))}
        </>
      )}
      <div className="absolute px-16 flex justify-center items-center top-1/2 -translate-y-1/2">
        <div className="flex flex-col gap-4 items-left">
          <img
            key={currentFrame.logo}
            src={currentFrame.logo}
            alt="Random Logo"
            style={{
              width: "400px",
              height: "auto",
              opacity: 0.7,
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
            "linear-gradient(180deg, transparent 0%, hsl(var(--background)) 100%)",
        }}
      ></div>
    </div>
  );
}
