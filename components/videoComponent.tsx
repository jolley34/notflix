export default function VideoComponent() {
  return (
    <div className="h-screen w-screen">
      <video
        className="w-screen h-screen object-cover"
        src="/frontpage-video-v2.mp4"
        autoPlay
        muted
        loop
      ></video>
    </div>
  );
}
