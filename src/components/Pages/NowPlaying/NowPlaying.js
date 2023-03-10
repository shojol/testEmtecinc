import React, { useContext } from "react";
import PageTitle from "../../_shared/PageTitle/PageTitle";
import { MoviesWrap, MoviesUl } from "../Pages.styles";
import { MovieCartFront } from "../Components/MovieCartFront";
import { MovieCartBack } from "../Components/MovieCartBack";
import ReactHoverFlip from "react-hover-flip";
import { MovieData } from "../Pages";

const NowPlaying = () => {
  const { movies, favMovies, setFavMovies } = useContext(MovieData);

  const myFavorite = (id) => {
    let newId = id.toString();
    if (favMovies.includes(newId)) {
      setFavMovies((prev) => prev.filter((p) => p !== newId));
    } else {
      setFavMovies((prev) => [...prev, newId]);
    }
  };

  return (
    <React.Fragment>
      <PageTitle>Now Playing</PageTitle>
      <MoviesWrap>
        <MoviesUl>
          {movies.map(
            ({
              id,
              title,
              poster_path,
              vote_average,
              overview,
              genre_ids,
              isFavorite,
            }) => (
              <ReactHoverFlip
                front={
                  <MovieCartFront
                    id={id}
                    title={title}
                    poster_path={poster_path}
                    vote_average={vote_average}
                    isFavorite={isFavorite}
                  />
                }
                back={
                  <MovieCartBack
                    id={id}
                    title={title}
                    poster_path={poster_path}
                    vote_average={vote_average}
                    overview={overview}
                    genre_ids={genre_ids}
                    myFavorite={myFavorite}
                    isFavorite={isFavorite}
                  />
                }
                direction="horizontal"
                height={340}
                width={170}
                key={id}
              />
            )
          )}
        </MoviesUl>
      </MoviesWrap>
    </React.Fragment>
  );
};

export default NowPlaying;
