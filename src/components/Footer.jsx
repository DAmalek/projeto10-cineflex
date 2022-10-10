import styled from "styled-components"

export default function Footer(props){

    return (
      <>
        <StyledFooter>
          <div>
            <img src={props.posterURL} alt="ss" />
          </div>
          <TextBox>
          <h2>{props.title}</h2>
          <h2>{props.weekday} - {props.name}</h2>
          </TextBox>
          
        </StyledFooter>
      </>
    );
}


const StyledFooter = styled.div`
    
    width: 100%;
    height: 110px;
    background-color: #9EADBA;
    border: 1px solid #9EADBA;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    

    div:nth-child(1) {
        width: 60px;
        height: 90px;
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
    
`
const TextBox = styled.div`
      padding-top: 17px ;
    h2 {
        padding-top: 7px;
        font-size: 25px;
        font-weight: 400;
        color: #293845;
    }
`