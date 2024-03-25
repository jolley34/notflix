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

const Genre = ["Nyheter", "Trendar just nu", "Rekommenderat till dig"];

export default function Home() {
  return (
    <>
      <div className="relative">
        <VideoComponent />
        <div className="absolute w-full px-20 my-6 -translate-y-1/2 z-50">
          <div className="flex flex-col gap-6  ">
            {Genre.map((genre, index) => (
              <div key={index} className="flex flex-col gap-2 translate-y-1/2 ">
                <h2 className="title text-xl font-bold tracking-tight lg:text-3xl">
                  {genre}
                </h2>
                <Carousel
                  opts={{
                    align: "start",
                  }}
                >
                  <CarouselContent>
                    {movies.map((movie, index) => (
                      <CarouselItem
                        key={index}
                        className="md:basis-1/3 lg:basis-1/6"
                      >
                        <Card className="p-0 border-0 cursor-pointer">
                          <CardContent className="flex items-center justify-center p-0 h-64 overflow-hidden">
                            <img
                              className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-105 ease-in-out"
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
