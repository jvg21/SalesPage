import styled from "styled-components"
import SalesCard from "./SalesCard";
import { useRef } from "react";

const SalesDiv = styled.div`

    background-color: #9B1620;
    width: 100%;
    height: 75vh;

`;

const SalesCardView = styled.div`
    background-color: #000000;
    padding: 5px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 4vh 10vw;
`;
export default function SalesPage() {

    const ref = useRef<HTMLDivElement | null>(null);

    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <>
            <div style={{ width: '100%', height: '80px', background: 'black' }}>
                <button onClick={handleClick}>sadads</button>

            </div>
            <SalesDiv> </SalesDiv>
            <SalesCardView ref={ref}>
                <SalesCard titulo1={"ACADÊMICOS DE GRADUAÇÃO CONVENIADOS"} titulo2={"ACADÊMICOS DE GRADUAÇÃO NÃO CONVENIADOS"} preco={'250,00'}></SalesCard>
                <SalesCard titulo1={"PROFISSIONAIS CONVENIADOS"} titulo2={"PROFISSIONAIS NÃO CONVENIADOS"} preco={'350,00'}></SalesCard>
            </SalesCardView>
            <SalesDiv> </SalesDiv>

        </>
    )
}