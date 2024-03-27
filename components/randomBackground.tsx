"use client";

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
  const randomIndex = Math.floor(Math.random() * randomFrames.length);
  const randomFrame = randomFrames[randomIndex];
  const randomImageIndex = Math.floor(
    Math.random() * randomFrame.images.length
  );
  const randomImage = randomFrame.images[randomImageIndex];
  const randomLogo = randomFrame.logo;

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {randomFrame && (
        <>
          <img
            src={randomImage}
            alt="Random Frame"
            className="w-screen h-screen object-cover"
          />
          <img
            src={randomLogo}
            alt="Random Logo"
            className="absolute top-1/3 left-14 transform -translate-y-1/2"
            style={{
              maxWidth: "20%",
              maxHeight: "20%",
              opacity: 0.7,
              filter:
                randomFrame.series === "Ozark"
                  ? "brightness(0) invert(1)"
                  : "none",
            }}
          />
        </>
      )}

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
