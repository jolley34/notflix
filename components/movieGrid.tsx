"use client";
import { useMovies } from "@/context/MovieContext";
import { useSearch } from "@/context/SearchContext";
import Link from "next/link";
import FavoriteButton from "./favoriteButton";
import RandomBackground from "./randomBackground";
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
  const isSearching = !isSearchEmpty && searchResults.length > 0;

  return (
    <div>
      {!isNoResults && !isSearching && <RandomBackground />}
      <div
        className={`${
          isSearching || isNoResults ? "px-14 z-20" : "w-full px-14 z-20"
        }`}
      >
        <div
          className={`${
            isSearching || isNoResults
              ? "flex w-full h-screen items-center justify-center "
              : "flex flex-col"
          }`}
        >
          <div>
            {isNoResults && (
              <p className="text-xl text-center font-bold tracking-tight lg:text-2xl">
                Det finns inga sökresultat.
              </p>
            )}
          </div>

          {!isNoResults && (
            <>
              {!searchTerm && trendingMovies.length > 0 && (
                <section className="flex flex-col gap-4 -translate-y-1/2 w-full">
                  <h2 className="title text-xl font-medium tracking-tight lg:text-2xl">
                    Trendar just nu
                  </h2>
                  <Carousel
                    opts={{
                      align: "start",
                      slidesToScroll: 6,
                    }}
                  >
                    <CarouselContent>
                      {trendingMovies.map((movie, index) => (
                        <CarouselItem
                          key={index}
                          className="sm:basis-1/2 md:basis-1/4 lg:basis-1/6 w-full"
                        >
                          <Card className="p-0 border-0 cursor-pointer ">
                            <CardContent className="flex items-center justify-center p-0 h-56 ">
                              <Link
                                href={`/filmview/${movie.slug}`}
                                as={`/filmview/${movie.slug}`}
                              >
                                <img
                                  className="object-cover w-full h-full "
                                  src={movie.thumbnail}
                                  alt={movie.title}
                                />
                              </Link>
                            </CardContent>
                            <div className="relative p-2 text-white bg-zinc-900 ">
                              <FavoriteButton slug={movie.slug} />
                            </div>
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
                <section className="flex flex-col gap-4 -translate-y-1/3 w-full">
                  <h2 className="title text-xl font-medium tracking-tight lg:text-2xl">
                    Rekommenderat för dig
                  </h2>
                  <Carousel
                    opts={{
                      align: "start",
                      slidesToScroll: 6,
                    }}
                  >
                    <CarouselContent>
                      {recommendedMovies.map((movie, index) => (
                        <CarouselItem
                          key={index}
                          className="sm:basis-1/2 md:basis-1/4 lg:basis-1/6 w-full"
                        >
                          <Card className="p-0 border-0 cursor-pointer ">
                            <CardContent className="flex items-center justify-center p-0 h-56 overflow-hidden ">
                              <Link
                                href={`/filmview/${movie.slug}`}
                                as={`/filmview/${movie.slug}`}
                              >
                                <img
                                  className="object-cover w-full h-full "
                                  src={movie.thumbnail}
                                  alt={movie.title}
                                />
                              </Link>
                            </CardContent>
                            <div className="relative p-2 text-white bg-zinc-900 ">
                              <FavoriteButton slug={movie.slug} />
                            </div>
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
                <section className="flex flex-col gap-4 w-full">
                  <h2 className="title text-xl font-medium tracking-tight lg:text-2xl">
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
                          className="sm:basis-1/2 md:basis-1/4 lg:basis-1/4 w-full"
                        >
                          <Card className="p-0 border-0 cursor-pointer">
                            <CardContent className="flex items-center justify-center p-0 h-64">
                              <Link
                                href={`/filmview/${movie.slug}`}
                                as={`/filmview/${movie.slug}`}
                              >
                                <img
                                  className="object-cover w-full h-full  "
                                  src={movie.thumbnail}
                                  alt={movie.title}
                                />
                              </Link>
                            </CardContent>
                            <div className="relative p-2 text-white bg-zinc-900 ">
                              <FavoriteButton slug={movie.slug} />
                            </div>
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
        </div>
      </div>
    </div>
  );
}
