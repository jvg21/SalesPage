import styled from "styled-components";
import { SalesPageButton } from "./presentation/salescardbutton/SalesPageButton";
import WhiteSalesCard from "./presentation/whitesalescard/WhiteSalesCard";
import QuestionCard from "./presentation/questioncard/QuestionCard";
import CollapsibleCard from "./presentation/imagecard/ImageCard";
import InfoCard from "./presentation/infocard/InfoCard";
import { PageTheme } from "./presentation/themeconfig/ThemeConfig";
import PricingInfo from './../infrastructure/PricingInfo.json'
import ConstantTexts from './../infrastructure/ConstantTexts.json'
import Questions from './../infrastructure/Questions.json'
import Urls from './../infrastructure/Urls.json'
import { useRef } from "react";


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
    background-color: ${PageTheme.primaryColor};
    color: ${PageTheme.secundaryTextColor};
    height: 450px;
    padding: 10vw;
    gap: 10px;
`;
const PricingPageHomeButton = styled.button`
    background-color: ${PageTheme.secundaryColor};
    color: ${PageTheme.primaryTextColor};
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
    height: auto;
`;
const PricingPageInfoDiv = styled(StandartDiv)`
    width: 60vw;
    height: 300px;
    gap: 15px;
`;
const CardsDisplayDiv = styled(StandartDiv)`
    justify-content:space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 2px 15px;
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

export function PricingPage() {

    const ref = useRef<HTMLDivElement | null>(null);
    const handleClick = () => ref.current?.scrollIntoView({ behavior: 'smooth' });

    return (
        <>
            <PricingPageHomeDiv>
                <T1>{ConstantTexts.HomeDivTitle}</T1>
                <T3>{ConstantTexts.HomeDivSubtitle}</T3>
                <PricingPageHomeButton onClick={() => handleClick()}>{ConstantTexts.HomeDivButtonText}</PricingPageHomeButton>
            </PricingPageHomeDiv>

            <PricingPagesSecondDiv>
                <PricingPageInfoDiv>
                    <T2>{ConstantTexts.SecondDivTitle}</T2>
                    <Paragraph>{ConstantTexts.SecondDivParagraph}</Paragraph>
                    <SalesPageButton url={Urls.AjudaUrl}>{ConstantTexts.SecondDivButton}</SalesPageButton>
                </PricingPageInfoDiv>
                <CardsDisplayDiv ref={ref}>
                    <WhiteSalesCard salesInfo={PricingInfo[0]} />
                    <WhiteSalesCard salesInfo={PricingInfo[1]} />
                </CardsDisplayDiv>

                <FAQDisplayDiv>
                    {
                        Questions.map((question)=>{
                            return(<QuestionCard key={question.id} title={question.Title} info={question.Description}/>)
                        })
                    }

                </FAQDisplayDiv>

                <CardsDisplayDiv>

                    <CollapsibleCard imageSrc={Urls.ImageUrl} title="dsasddsa" description="lorem ipsum ramdat ramidet hui ddsf" buttonSrc='www.google.com'></CollapsibleCard>
                    <CollapsibleCard imageSrc={Urls.ImageUrl} title="dsasddsa" description="lorem ipsum ramdat ramidet hui ddsf" buttonSrc='www.google.com'></CollapsibleCard>
                    <CollapsibleCard imageSrc={Urls.ImageUrl} title="dsasddsa" description="lorem ipsum ramdat ramidet hui ddsf" buttonSrc='www.google.com'></CollapsibleCard>
                </CardsDisplayDiv>

            </PricingPagesSecondDiv>

            <InfoCard background={PageTheme.primaryColor} bordercolor={PageTheme.tertiaryColor}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis architecto ad quibusdam debitis eaque. Aliquam ab voluptatum quas quia, quo eum incidunt rerum repellendus. Eum corporis culpa quasi veniam sequi.</p>
                <button>xxxxxxxxxx</button>
            </InfoCard>
        </>
    );
}
