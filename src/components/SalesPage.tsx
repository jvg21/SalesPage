import styled from "styled-components"
import SalesCard from "./presentation/salescard/SalesCard";
import { useRef } from "react";
import { SalesCardType } from "../types/salescardtype/SalesCardType";

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
    const handleClick = () => ref.current?.scrollIntoView({ behavior: 'smooth' });

    function AcademicosInfo() {
        return (
            <>
                <p style={{fontSize:'18px',fontFamily:'Montserrat'}}>
                    <b>Para obter o valor de conveniado na categoria acadêmico de graduação, 
                    é necessário que a sua Instituição de Ensino Superior seja conveniada e 
                    lhe forneça cupom promocional para ser inserido no ato da inscrição. 
                    A sua faculdade ainda não é conveniada?
                    <br/><br/>
                    Entre em contato conosco (simposio@abdconst.com.br) e garanta este benefício!
                    <br/>
                    * Se houver vagas nesta categoria, de acordo com a Lei nº 12.933/2013.
                    <br/>
                    * As inscrições por empenho seguem o último valor da tabela</b>
                    <br/>
                    (consulte valores no Regulamento do XV Simpósio)
                </p>
            </>
        )
    }
    const card1: SalesCardType = {
        titulo2: "Acadêmicos Não Conveniados",
        titulo1: "Acadêmicos Conveniados",
        preco2: "350,00",
        preco1: "250,00",
        validadeLote: "2º LOTE ATÉ 20/3/2024",
        proximoLote: "3º LOTE: R$350,00 / R$450,00",
        maisInfo:<AcademicosInfo/>,
        info: "sdaasdsad"
    }

    const card2: SalesCardType = {
        titulo2: "Profissionais Não Conveniados",
        titulo1: "Profissionais Conveniados",
        preco2: "350,00",
        preco1: "250,00",
        validadeLote: "2º LOTE ATÉ 20/3/2024",
        proximoLote: "3º LOTE: R$650,00 / R$800,00",
        info: "sdaasdsad"
    }

    return (
        <>
            <div style={{ width: '100%', height: '80px', background: 'black' }}>
                <button onClick={handleClick}>sadads</button>
            </div>

            <SalesDiv>
                <h1>PRICING</h1>
            </SalesDiv>

            <SalesCardView ref={ref}>
                <SalesCard salesInfo={card1}></SalesCard>
                <SalesCard salesInfo={card2}></SalesCard>
            </SalesCardView>

            <SalesDiv />

        </>
    )
}