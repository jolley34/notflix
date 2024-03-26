"use client";
import { useMovies } from "@/context/MovieContext";
import { useSearch } from "@/context/SearchContext";
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
  const { searchTerm, searchResults } = useSearch();

  const isSearchEmpty = searchTerm.trim() === "";
  const isNoResults = searchResults.length === 0 && !isSearchEmpty;

  return (
    <div className="w-full px-20 z-20">
      <div className="flex flex-col">
        {!isNoResults && (
          <>
            {!searchTerm && trendingMovies.length > 0 && (
              <section className="flex flex-col gap-4 -translate-y-1/2">
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
            )}

            {!searchTerm && recommendedMovies.length > 0 && (
              <section className="flex flex-col gap-4 -translate-y-1/3">
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
            )}

            {searchResults.length > 0 && (
              <section className="flex flex-col gap-4 -translate-y-1/2">
                <h2 className="title text-xl font-bold tracking-tight lg:text-2xl">
                  Sökresultat
                </h2>
                <Carousel
                  opts={{
                    align: "start",
                    slidesToScroll: 1,
                  }}
                >
                  <CarouselContent>
                    {searchResults.map((movie, index) => (
                      <CarouselItem
                        key={index}
                        className="sm:basis-1/2 md:basis-1/4 lg:basis-1/4"
                      >
                        <Card className="p-0 border-0 cursor-pointer">
                          <CardContent className="flex items-center justify-center p-0 h-64">
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
            )}
          </>
        )}

        {isNoResults && (
          <p className="text-xl text-center font-bold tracking-tight lg:text-2xl">
            Det finns inga sökresultat.
          </p>
        )}
      </div>
    </div>
  );
}
