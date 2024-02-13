import styled from "styled-components"
import SalesCard from "./SalesCard";

const SalesDiv = styled.div`

    background-color: red;
    width: 100%;
    height: 75vh;

`;

const SalesCardView = styled.div`
    background-color: darkblue;
    padding: 5px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 4vh 10vw;
`;
export default function SalesPage(){

    return(
        <>
        {/* <SalesDiv></SalesDiv> */}
        <SalesCardView>
            <SalesCard nome={"ACADEMICO"} preco={'250,00'}></SalesCard>        
            <SalesCard nome={"PROFISSIONAL"} preco={'350,00'}></SalesCard>        
        </SalesCardView>
        </>
    )
}