import https from "https";

const imdbHost = "https://api.themoviedb.org";
const nowPlayingPath = "/3/movie/now_playing";
const apiKey = "b8359a48e865c6dff15dbc8a38c60bd1"; // Check the email for the API key

const nowPlayingGenres = "/3/genre/movie/list";

const getApiUrl = ({ path, queryParamString }) =>
  `${imdbHost}${path}?api_key=${apiKey}${
    queryParamString ? "&" + queryParamString : ""
  }`;

const getApiUrlGenres = `${imdbHost}${nowPlayingGenres}?api_key=${apiKey}`;

const makeRequest = (url) =>
  new Promise((resolve, reject) => {
    const request = https.get(url, (response) => {
      response.setEncoding("utf-8");

      var data = "";

      response.on("data", (chunk) => {
        data += chunk;
      });

      response.on("end", () => {
        console.log(data);
        var responseObject = JSON.parse(data);
        resolve(responseObject);
      });
    });
    request.on("error", (error) => {
      reject(error);
    });
  });

export const getNowPlayingMovies = () =>
  makeRequest(getApiUrl({ path: nowPlayingPath }));
export const getNowPlayingGenresMovies = () => makeRequest(getApiUrlGenres);
