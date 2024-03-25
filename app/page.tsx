import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import VideoComponent from "@/components/videoComponent";
import movies from "../data/movies.json";

export default function Home() {
  return (
    <>
      <VideoComponent />
      <div className="w-full px-20 py-5 z-10">
        <h2 className="title scroll-m-20 text-xl font-bold tracking-tight lg:text-3xl py-4">
          Nyheter
        </h2>
        <Carousel
          opts={{
            align: "start",
          }}
        >
          <CarouselContent>
            {movies.map((movie, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/6 ">
                <Card className="p-0 border-0 rounded-xl">
                  <CardContent className="flex items-center justify-center p-0 h-64">
                    <img
                      className="object-cover w-full h-full rounded-xl"
                      src={movie.thumbnail}
                      alt={movie.title}
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className="absolute top-1/2 left-2 transform -translate-y-1/2"
            style={{ zIndex: 10 }}
          ></CarouselPrevious>
          <CarouselNext className="absolute top-1/2 right-2 transform -translate-y-1/2"></CarouselNext>
        </Carousel>
      </div>
    </>
  );
}
