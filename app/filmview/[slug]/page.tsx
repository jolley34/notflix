"use client";
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
        <section className="w-full h-screen"></section>
      </div>
    </div>
  );
}
