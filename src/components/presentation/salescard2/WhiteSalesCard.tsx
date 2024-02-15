import styled from "styled-components";

const SalesCard = styled.div`
  
  height: 450px;
  width: 300px;
  padding: 25px 30px;

  display: flex;
  justify-content: space-between;
  text-align: left;
  flex-direction: column;

  border: 2px solid darkgray;
  border-radius: 15px;

  font-family: Monserat,sans-serif;

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

  button{
    color: #000;
    background-color: transparent;

    font-weight: 700;
    font-size: 18px;

    height: 40px;

    display: flex;
    align-items: center;
    justify-content: left;
    border: 0px;

    cursor: pointer;

  }
  button:hover{
    text-decoration: underline;
    
  }
`;

export default function WhiteSalesCard() {

  return (
    <>
    <SalesCard>
      <h2>Tittle</h2>
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
      <button>Comprar</button>
    </SalesCard>
    </>
  );
}
