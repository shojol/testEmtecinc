import React, { createContext, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Index from "./Index/Index";
import NowPlaying from "./NowPlaying/NowPlaying";
import { Favorites } from "./Favorites/Favorites";
import UnknownPage from "./UnknownPage/UnknownPage";
import useFetchData from "../hooks/useFetchData";
import PageTitle from "../_shared/PageTitle/PageTitle";
import { findGenre } from "./utils";

export const MovieData = createContext();

const Pages = () => {
  const [movies, setMovies] = useState([]);
  const [favMovies, setFavMovies] = useState([]);

  const { response, error, loading } = useFetchData("/movies/nowPlaying");
  const allGenres = useFetchData("/movies/genres");

  useEffect(() => {
    if (response && allGenres.response) {
      const genresData = allGenres.response.genres;
      setMovies(
        response.results.map((pv) => ({
          ...pv,
          genre_ids: findGenre(pv.genre_ids, genresData),
        }))
      );
    } else if (response) {
      setMovies(response.results);
    }
    const getLocalstorage = localStorage.getItem("favorite movies");
    if (getLocalstorage) {
      setFavMovies(getLocalstorage.split(","));
    }
  }, [response, allGenres.response]);

  useEffect(() => {
    if (favMovies) {
      localStorage.setItem("favorite movies", favMovies);
      setMovies((pre) =>
        pre.map((em) => ({
          ...em,
          isFavorite: favMovies.includes(em.id.toString()),
        }))
      );
    }
  }, [favMovies]);

  if (error) {
    return <PageTitle>Error</PageTitle>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <MovieData.Provider value={{ movies, setMovies, favMovies, setFavMovies }}>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/nowPlaying" component={NowPlaying} />
        <Route exact path="/favorites" component={Favorites} />
        <Route component={UnknownPage} />
      </Switch>
    </MovieData.Provider>
  );
};

export default Pages;
