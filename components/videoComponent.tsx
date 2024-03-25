export default function VideoComponent() {
  return (
    <div className="h-[80vh] w-screen">
      <video
        className="w-screen h-[80vh] object-cover"
        src="/frontpage-video-v2.mp4"
        autoPlay
        muted
        loop
      ></video>
    </div>
  );
}
