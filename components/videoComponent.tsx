export default function VideoComponent() {
  return (
    <div className="h-screen w-screen">
      <video
        className="w-screen h-screen object-cover"
        src="/strangerthings-trailer-edit.mp4"
        autoPlay
        muted
      ></video>
    </div>
  );
}
