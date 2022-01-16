import FormCard from "components/FormCard";
import { Link, useParams } from "react-router-dom";
import { Movie } from "types/movie";

export default function Form() {
  const params = useParams();

  return <FormCard movieId={`${params.movieId}`} />;
}
