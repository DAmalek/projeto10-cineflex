import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

function Filmes() {
  const [movies, setMovies] = useState([]);
  const {idSessao} = useParams();

  console.log(idSessao, "coe");

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

  function ChooseMovie(){
    
  }

  return (
    <>
      <MovieWallpaper>
        {movies.map((value,idx) => (
          <Link to={`/sessoes/${value.id}`}>
            <div key={idx}>
              <img src={value.posterURL} alt={value.posterURL} />
            </div>
          </Link>
        ))}
      </MovieWallpaper>
    </>
  );
}

export default Filmes;

const MovieWallpaper = styled.div`
  height: 100vh;
  padding-left: 18px;
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
    margin: 10px;
  }
  img {
    width: 93%;
    height: 95%;
  }
`;
