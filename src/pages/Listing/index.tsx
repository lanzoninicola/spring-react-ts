import axios from "axios";
import MovieCard from "components/MovieCard/MovieCard";
import { useEffect, useState } from "react";
import { Movie, MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";

import Pagination from "../../components/Pagination";

export default function Listing() {
  const [pageNumber, setPageNumber] = useState(0);
  const [page, setPage] = useState<MoviePage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 12,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
  });

  useEffect(() => {
    axios
      .get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=title`)
      .then((res) => {
        console.log(res.data);
        const data = res.data as MoviePage;
        setPage(data);
      });
  }, [pageNumber]);

  const movie = {
    id: 1,
    image:
      "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    title: "The Witcher",
    count: 2,
    score: 4.5,
  };

  return (
    <>
      <Pagination />
      <div className="container">
        <div className="row">
          {page.content.map((movie: Movie) => {
            return (
              <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                <MovieCard key={movie.id} movie={movie} />;
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
