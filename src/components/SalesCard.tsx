import styled from "styled-components"

const SaleCard = styled.div`

    background-color: #efefef;
    height: 400px;
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 450px) {
        margin: 0 3vw;
        width:90vw
    }
`;

const SalesTittle = styled.div`
    background-color: red;
    color: white;
    font-weight: bold;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SalesButton = styled.button`
    width: 80%;
    height: 40px;
    font-size: 1.2em;
    background-color: green;
    color: white;
    border: solid 2px;
    border-color: black;
    margin: 15px 0;
    transition: all 1s ;
    &:hover{
        background-color: greenyellow;
    }

`;

const SalesText = styled.p`


`;

export default function SalesCard(props: { nome: string, preco: string }) {
    const preco = `R$ ${props.preco}`

    return (
        <>
        <SaleCard>
            <SalesTittle>
                <h2>{props.nome}</h2>
            </SalesTittle>
            <h1>{preco}</h1>
            <SalesTittle>
                <h2>{props.nome}</h2>
            </SalesTittle>
            <h1>{preco}</h1>
            <SalesText>"2º LOTE ATÉ 20/3/2024<br/>*Enquanto houver vagas<br/> 3º LOTE: R$350,00 / R$450,00"</SalesText>
            
            <SalesButton>Comprar</SalesButton>
        </SaleCard>

        </>
    )
}