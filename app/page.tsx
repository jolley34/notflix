import MovieGrid from "@/components/movieGrid";
import VideoComponent from "@/components/videoComponent";

export default function Home() {
  return (
    <>
      <div className="relative">
        <VideoComponent />
        <MovieGrid />
      </div>
    </>
  );
}
