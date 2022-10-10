import Header from "./Header";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Footer from "./Footer";

export default function Sessão() {
  const { idFilme } = useParams();
  const [sessions, setSessions] = useState([]);
  const [rawSession, setRawSession] = useState([]);
  //console.log("sessao", sessions, "raw", rawSession);

  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`;

    const promise = axios.get(URL);

    promise.then((resp) => {
      setSessions(resp.data.days);
      setRawSession(resp.data);
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
              <Link to={`/assentos/${value2.id}`}><button>{value2.name}</button></Link>
            ))}
          </div>
        ))}
      </StyledSessao>
      <Footer posterURL={rawSession.posterURL} title={rawSession.title} />
    </>
  );
}

const StyledSessao = styled.div`
  margin-left: 20px;
  margin-bottom: 130px;

  h2 {
    font-size: 20px;
    color: #293845;
    margin: 20px 0;
  }

  button {
    width: 80px;
    height: 40px;
    color: white;
    background-color: #e8833a;
    margin-right: 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  button:active {
    background-color: #b65104;
    translate: -1px;
  }
`;
