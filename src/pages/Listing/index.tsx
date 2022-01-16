import axios from "axios";
import MovieCard from "components/MovieCard/MovieCard";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";

import Pagination from "../../components/Pagination";

export default function Listing() {
  const [page, setPage] = useState(0);

  useEffect(() => {
    axios.get(`${BASE_URL}/movies?size=12&page=0`).then((res) => {
      console.log(res.data);
      const data = res.data as MoviePage;
      setPage(data.number);
    });
  }, []);

  return (
    <>
      <Pagination />
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
        </div>
      </div>
    </>
  );
}
