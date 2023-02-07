import express from "express";

import { getNowPlayingMovies } from "../services/imdb";
import { getNowPlayingGenresMovies } from "../services/imdb";

let router = express.Router();

router.get("/nowPlaying", async (req, res) => {
  let nowPlaying;
  await getNowPlayingMovies()
    .then((response) => {
      nowPlaying = response;
    })
    .catch((error) => {
      console.log(error);
      nowPlaying = error;
    });
  return res.json(nowPlaying);
});

router.get("/genres", async (req, res) => {
  let genres;
  await getNowPlayingGenresMovies()
    .then((response) => {
      genres = response;
    })
    .catch((error) => {
      console.log(error);
      genres = error;
    });
  return res.json(genres);
});

export default router;
