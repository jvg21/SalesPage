import styled from "styled-components";
import { SalesPageButton } from "./presentation/salescardbutton/SalesPageButton";
import WhiteSalesCard from "./presentation/whitesalescard/WhiteSalesCard";
import QuestionCard from "./presentation/questioncard/QuestionCard";
import InfoCard from "./presentation/infocard/InfoCard";
import { PageTheme } from "./presentation/themeconfig/ThemeConfig";
import PricingInfo from './../infrastructure/PricingInfo.json'
import ConstantTexts from './../infrastructure/ConstantTexts.json'
import Questions from './../infrastructure/Questions.json'
import Urls from './../infrastructure/Urls.json'
import { useRef } from "react";
import background from './../images/mainbg.png'
import { useWindowSize } from "@uidotdev/usehooks";
import { cardHeight } from "./cardheight/CardHeight";

const StandartDiv = styled.div<{ background?: string }>`
    background-color: ${(props) => props.background ? props.background : 'trasparent'};
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

const T1 = styled.h1<{ textcolor?: string }>`
    color: ${(props) => props.textcolor ? props.textcolor : '#000'};
    font-size : clamp(2.2rem, 5vw, 3.5rem);
`;

const T2 = styled.h2<{ textcolor?: string }>`
    color: ${(props) => props.textcolor ? props.textcolor : '#000'};
    font-size : clamp(2rem, 3vw, 2.5rem);
    font-weight: 900;
`;

const T3 = styled.h3<{ textcolor?: string }>`
    color: ${(props) => props.textcolor ? props.textcolor : '#000'};
    font-size : clamp(1.5rem, 3vw, 2rem);
`;

const Paragraph = styled.p<{ textcolor?: string }>`
    color: ${(props) => props.textcolor ? props.textcolor : '#000'};
    font-size : clamp(1rem, 1.8vw, 1.6rem);
`;

const PricingPageHomeDiv = styled(StandartDiv)`
    /* margin-top: 92px; */
    height: 95vh;
    padding: 10vw;
    gap: 10px;
`;
const PricingPageHomeButton = styled.button<{ background: string, textcolor?: string }>`
    background-color: ${(props) => props.background};
    color: ${(props) => props.textcolor ? props.textcolor : '#000'};
    width: 25vw;
    padding: 15px 10px;
    
    border: 0;
    border-radius: 10px;
    font-size : clamp(1rem, 1.3vw, 1.7rem);
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
    padding: 10px 15px;
    gap: 10px;
`;

const FAQDisplayDiv = styled(StandartDiv)`
    align-items: start;
    justify-content:space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 30px;
    gap: 10px;
`;

const TitleDiv = styled(StandartDiv)`
    width: 100%;
    height: 80px;
    padding: 15px;

`;

export function PricingPage() {
    const size = useWindowSize();
    const ref = useRef<HTMLDivElement | null>(null);
    const handleClick = () => ref.current?.scrollIntoView({ behavior: 'smooth' });
    const refFaq = useRef<HTMLDivElement | null>(null);
    const handleClick2 = () => refFaq.current?.scrollIntoView({ behavior: 'smooth' });

    const sizeVerification = size.height&&size.height<=cardHeight.fullHeight;

    return (
        <>
            <PricingPageHomeDiv background={PageTheme.primaryColor} style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <T1 textcolor={PageTheme.secundaryTextColor} >{ConstantTexts.HomeDivTitle}</T1>
                <T3 textcolor={PageTheme.secundaryTextColor} >{ConstantTexts.HomeDivSubtitle}</T3>
                <div style={{height:""}}> </div>
                <PricingPageHomeButton background={PageTheme.sucessGreen}  textcolor={PageTheme.secundaryTextColor} onClick={() => handleClick()}>{ConstantTexts.HomeDivButtonPrice}</PricingPageHomeButton>
                <PricingPageHomeButton background={PageTheme.sucessGreen} textcolor={PageTheme.secundaryTextColor} onClick={() => handleClick2()}>{ConstantTexts.HomeDivButtonFAQ}</PricingPageHomeButton>
            </PricingPageHomeDiv>

            <PricingPagesSecondDiv >
                <PricingPageInfoDiv background={PageTheme.tertiaryBackGroundColor} >
                    <T2 >{ConstantTexts.SecondDivTitle}</T2>
                    <Paragraph>{ConstantTexts.SecondDivParagraph}</Paragraph>
                    <SalesPageButton url={Urls.AjudaUrl}>{ConstantTexts.SecondDivButton}</SalesPageButton>
                </PricingPageInfoDiv>


                <TitleDiv ref={!sizeVerification?ref:null} background={PageTheme.primaryColor} >
                    <T3 textcolor={PageTheme.secundaryTextColor} >INVESTIMENTO E CONDIÇÕES ESPECIAIS</T3>
                </TitleDiv>
                <CardsDisplayDiv ref={sizeVerification?ref:null} background={PageTheme.backGroundColor}>
                    {
                        PricingInfo.map((x) => {
                            return (<WhiteSalesCard salesInfo={x} background={PageTheme.secundaryBackGroundColor} borderhovercolor={PageTheme.primaryColor} bordercolor={PageTheme.primaryTextColor} secundarytextcolor={PageTheme.tertiaryTextColor}  />)
                        })
                    }

                </CardsDisplayDiv>

                <TitleDiv ref={refFaq} background={PageTheme.primaryColor}>
                    <T3 textcolor={PageTheme.secundaryTextColor}>FAQ</T3>
                </TitleDiv>
                
                <FAQDisplayDiv background={PageTheme.tertiaryBackGroundColor}>
                    {
                        Questions.map((question) => {
                            return (
                                <QuestionCard
                                    background={PageTheme.primaryColor}
                                    textcolor={PageTheme.secundaryTextColor}

                                    key={question.id}
                                    title={question.Title}
                                    info={question.Description}
                                    link={question.link} />
                            )
                        })
                    }

                </FAQDisplayDiv>

                {/* <CardsDisplayDiv >
                    <ImageCard imageSrc={Urls.ImageUrl} title="dsasddsa" description="lorem ipsum ramdat ramidet hui ddsf" buttonSrc='www.google.com'></ImageCard>
                    <ImageCard imageSrc={Urls.ImageUrl} title="dsasddsa" description="lorem ipsum ramdat ramidet hui ddsf" buttonSrc='www.google.com'></ImageCard>
                    <ImageCard imageSrc={Urls.ImageUrl} title="dsasddsa" description="lorem ipsum ramdat ramidet hui ddsf" buttonSrc='www.google.com'></ImageCard>
                </CardsDisplayDiv> */}

                <InfoCard background={PageTheme.primaryColor} bordercolor={PageTheme.tertiaryColor}>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis architecto ad quibusdam debitis eaque. Aliquam ab voluptatum quas quia, quo eum incidunt rerum repellendus. Eum corporis culpa quasi veniam sequi.</p>
                    <button>xxxxxxxxxx</button>
                </InfoCard>

            </PricingPagesSecondDiv>

        </>
    );
}
