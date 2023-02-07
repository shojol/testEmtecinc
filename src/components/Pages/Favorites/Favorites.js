import React, { useContext, useEffect, useState } from "react";
import PageTitle from "../../_shared/PageTitle/PageTitle";
import { MoviesWrap, MoviesUl } from "../Pages.styles";
import ReactHoverFlip from "react-hover-flip";
import { MovieData } from "../Pages";
import { MovieCartFront } from "../Components/MovieCartFront";
import { MovieCartBack } from "../Components/MovieCartBack";

export const Favorites = () => {
  const [myFavMov, setMyFavMov] = useState([]);
  const { movies, favoriteMovies, setFavoriteMovies } = useContext(MovieData);

  const myFavorite = (id) => {
    let newId = id.toString();
    if (favoriteMovies.includes(newId)) {
      setFavoriteMovies((prev) => prev.filter((p) => p !== newId));
    } else {
      setFavoriteMovies((prev) => [...prev, newId]);
    }
  };

  useEffect(() => {
    movies && setMyFavMov(movies.filter((m) => m.isFavorite));
  }, [movies]);

  return (
    <React.Fragment>
      <PageTitle>My Favorite</PageTitle>
      <MoviesWrap>
        <MoviesUl>
          {myFavMov.map(
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
