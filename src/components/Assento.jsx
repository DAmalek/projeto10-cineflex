import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";


export default function () {
  const { idSessao } = useParams();
  const [seats, setSeats] = useState([]);
  const [session,setSession] = useState([]);
  const [movieTime, setMovieTime] = useState({});
  const [time, setTime] = useState()
  
  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`;

    const promise = axios.get(URL);

    promise.then((resp) => {
      setSeats(resp.data.seats);
      setSession(resp.data.movie)
      setMovieTime(resp.data)
      setTime(resp.data.day.weekday)
      
    });

    promise.catch((error) => {
      console.log(error.response.data);
    });
  });

  return (
    <>
      <Header text={"Selecione os assentos"} />

      <SeatsContainer>
        {seats.map((value)=> <MovieSeats>{value.name}</MovieSeats>)}
      </SeatsContainer>

        <form>
        
        </form>  

      <Footer posterURL={session.posterURL} title={session.title} weekday={time} name={movieTime.name}  />
    </>
  );
}

const SeatsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 92%;
    padding-left: 20px;
`
const MovieSeats = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 26px;
    border-radius: 12px;
    background-color: #C3CFD9;
    color: #808F9D;
    margin: 7px;
    cursor: pointer;
`