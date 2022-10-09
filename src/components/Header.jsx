import styled from "styled-components"
import Filme from "./Filme";

export default function Header(props) {
  

  return (
    <>
      <HeaderContainer>
        <h1>Cineflix</h1>
      </HeaderContainer>

      <HeaderTitle>
        <p>{props.text}</p>
      </HeaderTitle>
    </>
  );
}

const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  background-color: #c3cfd9;
  
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: #e8833a;
    font-size: 40px;
    font-weight: 400;
    
  }
`;
const HeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  height: 90px;
  width: 100%;
  font-size: 25px;
  font-weight: 400;

  p {
    color: #293845;
  }
`;
