"use client";
import FavoriteButton from "@/components/favoriteButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
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
      >
        <div className="flex flex-col gap-4">
          {favoriteMovies.length > 0 ? (
            <h1 className="text-2xl">Din lista</h1>
          ) : (
            <h1>Du har inget i din lista ännu</h1>
          )}
          <CarouselContent>
            {favoriteMovies.map((movie) => (
              <CarouselItem className="sm:basis-1/2 md:basis-1/4 lg:basis-1/6">
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
        </div>
      </Carousel>
    </div>
  );
}
