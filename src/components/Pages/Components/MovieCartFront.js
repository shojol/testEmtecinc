import { Poster, MovieLi, HeartImg } from "../Pages.styles";
import { truncate } from "../../utils/Truncate";
import Heart from "../../../assets/heart.svg";

export const MovieCartFront = ({
  id,
  title,
  poster_path,
  vote_average,
  isFavorite,
}) => {
  return (
    <MovieLi key={id}>
      <Poster
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt={title}
      />
      <div>
        <h3>{truncate(title, 40)}</h3>
        <h5>{vote_average}/10</h5>
      </div>
      {isFavorite && <HeartImg src={Heart} alt="Heart icon" height="12px" />}
    </MovieLi>
  );
};
