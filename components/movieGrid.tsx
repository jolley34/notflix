"use client";
import { useMovies } from "@/context/MovieContext";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export default function MovieGrid() {
  const { trendingMovies, recommendedMovies } = useMovies();

  return (
    <div className="absolute w-full px-20 z-20 -translate-y-1/4">
      <div className="flex flex-col gap-12 ">
        <section className="flex flex-col gap-4">
          <h2 className="title text-xl font-bold tracking-tight lg:text-2xl">
            Trendar just nu
          </h2>
          <Carousel
            opts={{
              align: "start",
              slidesToScroll: 1,
            }}
          >
            <CarouselContent>
              {trendingMovies.map((movie, index) => (
                <CarouselItem
                  key={index}
                  className="sm:basis-1/2 md:basis-1/4 lg:basis-1/6"
                >
                  <Card className="p-0 border-0 cursor-pointer">
                    <CardContent className="flex items-center justify-center p-0 h-56">
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
            <CarouselPrevious className="absolute top-1/2 left-2 transform -translate-y-1/2" />
            <CarouselNext className="absolute top-1/2 right-2 transform -translate-y-1/2" />
          </Carousel>
        </section>
        <section className="flex flex-col gap-4">
          <h2 className="title text-xl font-bold tracking-tight lg:text-2xl">
            Rekommenderat för dig
          </h2>
          <Carousel
            opts={{
              align: "start",
              slidesToScroll: 1,
            }}
          >
            <CarouselContent>
              {recommendedMovies.map((movie, index) => (
                <CarouselItem
                  key={index}
                  className="sm:basis-1/2 md:basis-1/4 lg:basis-1/6"
                >
                  <Card className="p-0 border-0 cursor-pointer">
                    <CardContent className="flex items-center justify-center p-0 h-56 overflow-hidden">
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
            <CarouselPrevious className="absolute top-1/2 left-2 transform -translate-y-1/2" />
            <CarouselNext className="absolute top-1/2 right-2 transform -translate-y-1/2" />
          </Carousel>
        </section>
      </div>
    </div>
  );
}
