import {
  Poster,
  MovieLi,
  FrontShrink,
  TitleWrap,
  FavButton,
} from "../Pages.styles";
import { truncate } from "../../utils/Truncate";

export const MovieCartBack = ({
  id,
  title,
  poster_path,
  vote_average,
  overview,
  genre_ids,
  myFavorite,
  isFavorite,
}) => {
  return (
    <MovieLi key={id}>
      <FrontShrink>
        <Poster
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt={title}
          flipped
        />
        <TitleWrap>
          <h3>{truncate(title, 40)}</h3>
          <p>{vote_average}/10</p>
          <p>{genre_ids.map(({ name }) => name).join(", ")}</p>
        </TitleWrap>
      </FrontShrink>
      <div>
        <h3>Description</h3>
        <p>{truncate(overview, 200)}</p>
        <FavButton onClick={() => myFavorite(id)}>
          {!isFavorite ? "Favorite" : "Remove Favorite"}
        </FavButton>
      </div>
    </MovieLi>
  );
};
