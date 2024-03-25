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
