import Header from "./Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

export default function Sessão() {
  const { idSessao } = useParams();
  const [sessions, setSessions] = useState([]);

  console.log("sessao", sessions);

  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idSessao}/showtimes`;

    const promise = axios.get(URL);

    promise.then((resp) => {
      setSessions(resp.data.days);
    });

    promise.catch((error) => {
      console.log(error.response.data);
    });
  }, []);

  return (
    <>
      <Header text={"Selecione o horário"} />
      <StyledSessao>
        {sessions.map((value) => (
          <div key={sessions.id}>
            <h2>
              {value.weekday} - {value.date}
            </h2>
            {value.showtimes.map((value2) => (
              <button>{value2.name}</button>
            ))}
          </div>
        ))}
      </StyledSessao>
    </>
  );
}

const StyledSessao = styled.div`
  margin-left: 20px;

  h2 {
    font-size: 20px;
    color: #293845;
    margin: 20px 0;
  }

  button {
    width: 80px;
    height: 40px;
    color: white;
    background-color: #E8833A;
    margin-right: 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  button:active {
    
    background-color: #b65104;
    translate: -1px;
    
  }
`;
