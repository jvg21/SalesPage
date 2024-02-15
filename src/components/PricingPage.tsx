import styled from "styled-components";
import WhiteSalesCard from "./presentation/salescard2/WhiteSalesCard";

const PricingHomeDiv = styled.div`

    background-color: #9B1620;  
    color: #efefef;

    height: 80vh;
    width: 100vw;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

    gap: 20px 0;

    h1{
        font-size: 3rem;
    }

    p{
        font-size: 1.3rem;
    }

    button{
        color: black;

        width: 200px;
        height: 40px;
        
        font-size: 18px;
        font-weight: 600;

        border: none;
        border-radius: 15px;

        text-transform: uppercase;
    }

    button:hover{
        box-shadow: 0 5px 15px rgba(255, 255, 255, 0.5);
    }

`;
const PricingSecondDiv = styled.div`
    background-color: aliceblue;

    height: 100%;
    width: 100%;
    padding: 25px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

`;

const PricingCardsDiv = styled.div`
    width: 100%;
    height: 100%;
    padding: 10vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    gap: 0 30px;

`;
export function PricingPage() {

    return (
        <>
            <PricingHomeDiv>
                <h1>Lorem ipsum, dolor sit amet </h1>
                <p> sed sit culpa ea adipisci minus. Deleniti, obcaecati deserunt!</p>
                <button>adssadsadsad</button>
            </PricingHomeDiv>

            <PricingSecondDiv>
                <h1>Lorem ipsum, dolor sit amet </h1>
                <p> sed sit culpa ea adipisci minus. Deleniti, obcaecati deserunt!</p>
                <button>adssadsadsad</button>

                <PricingCardsDiv>
                    <WhiteSalesCard></WhiteSalesCard>
                    <WhiteSalesCard></WhiteSalesCard>
                </PricingCardsDiv>
            </PricingSecondDiv>
        </>



    )

}