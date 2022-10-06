import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

function Filmes() {
  const [movies, setMovies] = useState([]);

  const promise = axios.get(
    "https://mock-api.driven.com.br/api/v5/cineflex/movies"
  );

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    );

    promise.then((resp) => {
      setMovies(resp.data);
    });

    promise.catch((error) => {
      console.log(error.response.data);
    });

    if (movies === null) return "carregando...";
  }, []);

  return (
    <>
      <MovieWallpaper>
        {movies.map((value) => (
          <div>
            <img src={value.posterURL} alt={value.posterURL} />
          </div>
        ))}
      </MovieWallpaper>
    </>
  );
}

export default Filmes;

const MovieWallpaper = styled.div`
  height: 100vh;
  background-color: #e5e5e5;

  display: flex;
  align-items: center;
  flex-wrap: wrap;

  div {
    width: 150px;
    height: 210px;
    border-radius: 3px;
    background-color: #ffff;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    display: flex;
  align-items: center;
  justify-content: center;
  }
  img {
    width: 90%;
  }
`;
