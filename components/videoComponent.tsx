export default function VideoComponent() {
  return (
    <div
      className="relative h-screen w-screen overflow-hidden"
      style={{ background: "hsl(var(--background))" }}
    >
      <video
        className="w-full h-screen object-cover"
        src="/frontpage-video-v2.mp4"
        autoPlay
        muted
        loop
      ></video>
      <img
        src="/StrangerThings_logo.svg"
        alt="Stranger Things Logo"
        className="absolute top-1/3 left-14 transform -translate-y-1/2"
        style={{ maxWidth: "30%", maxHeight: "30%", opacity: 0.7 }}
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
