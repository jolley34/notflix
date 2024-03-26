"use client";

import FavoriteButton from "@/components/favoriteButton";
import { Button } from "@/components/ui/button";
import { useMovies } from "../../../context/MovieContext";

type PageProps = { params: { slug: string } };

export default function FilmView({ params }: PageProps) {
  const { movies } = useMovies();
  const movie = movies.find((m) => m.slug === params.slug);

  if (!movie) {
    return <div>Filmen kunde inte hittas.</div>;
  }

  return (
    <div className="flex justify-center">
      <div className="flex w-full">
        <section className="w-full h-screen bg-zinc-700">
          <video
            className="w-full h-screen object-cover"
            src={movie.video}
            autoPlay
            muted
            loop
          ></video>
        </section>
        <section className="w-full h-screen flex items-center justify-center p-20">
          <div className="flex flex-col gap-2">
            <div className="flex align-middle justify-between">
              <h1 className="font-bold text-4xl">{movie.title}</h1>
              <FavoriteButton />
            </div>
            <p className="font-thin ">Release : {movie.year}</p>
            <p className="font-thin ">Genre : {movie.genre}</p>
            <h1 className="font-medium text-sm">{movie.synopsis}</h1>
            <p className="font-thin">
              Actors: {movie.actors.slice(0, -1).join(", ")}{" "}
              {movie.actors.length > 1 && "and"} {movie.actors.slice(-1)}
            </p>
            <p className="font-thin ">MPA film rating : {movie.rating}</p>{" "}
            <Button>Spela Film</Button>
          </div>
        </section>
      </div>
    </div>
  );
}
