"use client";
import FavoriteButton from "@/components/favoriteButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@mui/material";
import Link from "next/link";

import { useMovies } from "../../context/MovieContext";

export default function MyList() {
  const { favoriteMovies } = useMovies();

  return (
    <div className="flex w-full h-screen items-center justify-center px-14">
      <Carousel
        opts={{
          align: "start",
          slidesToScroll: 1,
        }}
        className="w-full"
      >
        <div className="flex flex-col gap-4 ">
          {favoriteMovies.length > 0 ? (
            <h1 className="text-2xl">Din lista</h1>
          ) : (
            <h1 className="text-center">Du har inget i din lista ännu</h1>
          )}
          <CarouselContent>
            {favoriteMovies.map((movie) => (
              <CarouselItem className="sm:basis-1/2 md:basis-1/4 lg:basis-1/6 w-full">
                <Card className="p-0  border-0 cursor-pointer ">
                  <CardContent className="flex items-center justify-center p-0 w-full h-full overflow-hidden ">
                    <Link
                      href={`/filmview/${movie.slug}`}
                      as={`/filmview/${movie.slug}`}
                    >
                      <img
                        className="object-cover w-full h-full"
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
        </div>
      </Carousel>
    </div>
  );
}
