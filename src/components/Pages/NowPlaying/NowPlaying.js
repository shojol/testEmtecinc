import React, { useEffect } from "react";

import PageTitle from "../../_shared/PageTitle/PageTitle";
import useFetchData from "../../hooks/useFetchData";

const NowPlaying = () => {
  const { response, error, loading } = useFetchData("/movies/nowPlaying");
  // const { results } = response;
  // useEffect(() => {
  //   console.log(results);
  // }, [results]);

  if (error) {
    return <PageTitle>Error</PageTitle>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <React.Fragment>
      <PageTitle>Now Playing</PageTitle>
      <p>{JSON.stringify(response.results)}</p>
    </React.Fragment>
  );
};

export default NowPlaying;
