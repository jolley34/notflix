import { Card } from "@/components/ui/card";
import VideoComponent from "@/components/videoComponent";
import movies from "../data/movies.json";

export default function Home() {
  return (
    <>
      <VideoComponent />
      <div className="grid grid-cols-7 px-16">
        {movies.map((movie, index) => (
          <Card className="border-0" key={index}>
            <img className="object-cover h-full w-auto" src={movie.thumbnail} />
          </Card>
        ))}
      </div>
    </>
  );
}
