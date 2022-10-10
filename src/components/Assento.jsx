import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";


export default function () {
  const { idSessao } = useParams();
  const [seats, setSeats] = useState([]);
  const [session, setSession] = useState([]);
  const [movieTime, setMovieTime] = useState({});
  const [time, setTime] = useState();
  
  const [cliente , setCliente] = useState({id:[], nome:"", cpf:""})
  

  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`;

    const promise = axios.get(URL);

    promise.then((resp) => {
      setSeats(resp.data.seats);
      setSession(resp.data.movie);
      setMovieTime(resp.data);
      setTime(resp.data.day.weekday);
    });

    promise.catch((error) => {
      console.log(error.response.data);
    });
  });

  function reservarAssento(){

  }
  return (
    <>
      <Header text={"Selecione os assentos"} />

      <SeatsContainer>
        {seats.map((value) => (
          <MovieSeats key={value.name}>{value.name}</MovieSeats>
        ))}
      </SeatsContainer>


      <FormContainer>
          <label for="campo nome">Nome do comprador:</label>
          <input type="text" placeholder="Digite seu nome" id="campo nome" value={cliente} onChange={e => setCliente(e.target.value)} />
          <label for="campo cpf">CPF do comprador:</label>
          <input type="text" placeholder="Digite seu cpf" id="campo cpf" value={cliente} onChange={e => setCliente(e.target.value)} />
          <button>Reservar assentos</button>
      </FormContainer>

      <Footer
        posterURL={session.posterURL}
        title={session.title}
        weekday={time}
        name={movieTime.name}
      />
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
const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;

  input {
    margin: 12px 0;
  }
  button {
    width: 220px;
    height: 44px;
    background-color: #e8833a;
    color: white;
    font-size: 20px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  button:active {
    background-color: #b65104;
    translate: -1px;
  }
`;