import styled from "styled-components";
import { SalesPageButton } from "./presentation/salescardbutton/SalesPageButton";
import WhiteSalesCard from "./presentation/salescard2/WhiteSalesCard";
import QuestionCard from "./presentation/questioncard/QuestionCard";
import CollapsibleCard from "./presentation/imagecard/ImageCard";

const StandartDiv = styled.div`
    width: 100%;
    min-width: 260px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    overflow: hidden;
    transform: all 2s ease ;

`;

const T1 = styled.h1`
    font-size : clamp(2.2rem, 5.5vw, 4rem);
`;

const T2 = styled.h2`
    font-size : clamp(2rem, 3vw, 2.5rem);
    font-weight: 900;
`;

const T3 = styled.h3`
    font-size : clamp(1.5rem, 3vw, 2rem);
`;

const Paragraph = styled.p`
    font-size : clamp(1rem, 1.8vw, 1.6rem);
`;

const PricingPageHomeDiv = styled(StandartDiv)`
    background-color: blueviolet;
    color: white;
    height: 450px;
    padding: 10vw;
    gap: 10px;
   
`;
const PricingPageHomeButton = styled.button`
    background-color: white;
    width: 20vw;
    height: 40px;
    border: 0;
    border-radius: 10px;
    font-size : clamp(1.5rem, 1.8vw, 2rem);
    cursor: pointer;
    
    &:hover{
        box-shadow: 0 5px 15px rgba(255, 255, 255, 0.5);
    }

    @media screen and (max-width: 700px){
        width: 16rem;
    } 

`;

const PricingPagesSecondDiv = styled(StandartDiv)`
    /* background-color: lightcoral; */
    height: auto;
`;
const PricingPageInfoDiv = styled(StandartDiv)`
    /* background-color: aqua; */
    width: 60vw;
    height: 300px;
    gap: 15px;

`;
const CardsDisplayDiv = styled(StandartDiv)`
    /* background-color: lightgray; */
    justify-content:space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 15px;
    gap: 10px;

`;

const FAQDisplayDiv = styled(StandartDiv)`
    /* background-color: #ff0303; */
    justify-content:space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 30px;
    gap: 10px;

`;

const imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-W4xjGG0vhPQk4yr42TcZyTi9TRvlXI7rRc2uQ4P__g&s"
export function PricingPage() {
    return (
        <>
            <PricingPageHomeDiv>
                <T1>Seu Texto Aqui</T1>
                <T3>Outro Texto Aqui</T3>
                <PricingPageHomeButton>Botão</PricingPageHomeButton>
            </PricingPageHomeDiv>

            <PricingPagesSecondDiv>
                <PricingPageInfoDiv>
                    <T2>Choose the cloud solutions you need</T2>
                    <Paragraph>Our sales team can help you find the best mix of cloud solutions to meet the unique needs of your business.</Paragraph>
                    <SalesPageButton url="">Get Help From Our Sales Team</SalesPageButton>
                </PricingPageInfoDiv>
                <CardsDisplayDiv>

                    <WhiteSalesCard />
                    <WhiteSalesCard />

                </CardsDisplayDiv>


                <FAQDisplayDiv>
                    <QuestionCard title="What forms of payment do you accept?" info="lorensadsaasdasd"/>
                    <QuestionCard title="What forms of payment do you accept?" info="lorensadsaasdasd"/>
                    <QuestionCard title="What forms of payment do you accept?" info="lorensadsaasdasd"/>
                    <QuestionCard title="What forms of payment do you accept?" info="lorensadsaasdasd"/>
                    <QuestionCard title="What forms of payment do you accept?" info="lorensadsaasdasd"/>
                    <QuestionCard title="What forms of payment do you accept?" info="lorensadsaasdasd"/>
           
                </FAQDisplayDiv>
                <CollapsibleCard imageSrc={imageUrl} title="dsasddsa" description="lorem ipsum ramdat ramidet hui ddsf" buttonSrc='www.google.com'></CollapsibleCard>
               
            </PricingPagesSecondDiv>
        </>
    );
}
