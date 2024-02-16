import styled from "styled-components";
import { SalesPageButton } from "../salescardbutton/SalesPageButton";

const SalesCard = styled.div`
  
  height: 450px;
  width: 300px;
  padding: 25px 30px;

  display: flex;
  justify-content: space-between;
  text-align: left;
  flex-direction: column;

  border: 1px solid #afafaf4f;
  border-radius: 15px;

  font-family: Monserat,sans-serif;

  margin: 0px 1vw;

  &:hover{
    border-color: darkgrey;
  }

  li{
    margin: 10px;
    list-style: none;
  }

  hr{
    border: none;
    height: 1px;
    background: #b3b3b3;
    background: repeating-linear-gradient(90deg,#cfcfcf,#cfcfcf 3px,transparent 3px,transparent 10px);
  }

  p,li{
    color: gray;
    font-size: 16px;
  }

  @media screen and (max-width: 400px){
    width: 90vw;
  }
`;

export default function WhiteSalesCard() {

  return (
    <>
    <SalesCard>
      <h2>Title</h2>
      <p>Convêniado</p>
      <h1>$250,00</h1>
      <p>Não Convêniado</p>
      <h1>$350,00</h1>
      {/* <p>Starting At</p> */}
      <hr/>
      <ul>
        <li>lorem lorem</li>
        <li>lorem lorem</li>
        <li>lorem lorem</li>
      </ul>
      <SalesPageButton url="">Comprar</SalesPageButton>
    </SalesCard>
    </>
  );
}
