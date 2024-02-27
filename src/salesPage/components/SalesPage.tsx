import styled from "styled-components";
import { PageTheme } from "./presentation/themeconfig/ThemeConfig";
import background from './../images/mainbg.png'
import PricingInfo from './../infrastructure/PricingInfo.json'
import ConstantTexts from './../infrastructure/ConstantTexts.json'
import Questions from './../infrastructure/Questions.json'
import Depoimentos from './../infrastructure/Depoimentos.json'
import Urls from './../infrastructure/Urls.json'
import { SalesPageButton } from "./presentation/salescardbutton/SalesPageButton";
import { cardHeight } from "./cardheight/CardHeight";
import { useRef } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import { DepoimentCard } from "./depoimentscard/DepoimentCard";
import WhiteSalesCard from "./presentation/whitesalescard/WhiteSalesCard";
import QuestionCard from "./presentation/questioncard/QuestionCard";
import { InfoCardType } from "../types/infocardtype/InfoCardType";
import InfoCard from "./presentation/infocard/InfoCard";

const StandartDiv = styled.div<{ background?: string, minheight?: string }>`
    background-color: ${(props) => props.background ? props.background : 'trasparent'};
    min-height: ${(props) => props.minheight ? props.minheight : "auto"};
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
const ContentDiv = styled.div`
    width: 100vw;
    background-color: transparent;
    max-width: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
`;
const PricingPageHomeButtonDiv = styled(ContentDiv)`
    min-height: 100px;
    gap: 30px;
    flex-direction: row;
    flex-wrap: wrap;
`;

const PricingPageHomeButton = styled.button<{ background: string, textcolor?: string }>`
    background-color: ${(props) => props.background};
    color: ${(props) => props.textcolor ? props.textcolor : '#000'};
    width: 25vw;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 10px;
    border: 0;
    border-radius: 10px;
    font-size : clamp(1rem, 1.1vw, 1.3rem);
    cursor: pointer;
    
    &:hover{
        box-shadow: 0px 5px 15px rgba(255, 255, 255, 0.5);
    }
    
    @media screen and (max-width: 700px){
        width: 16rem;
    } 
`;

const PricingPageInfoDiv = styled(ContentDiv)`
    margin: 20px 0;
    width: 70vw;
    min-height: 89vh;
    gap: 40px;
`;

const SocialTestingContentDiv = styled(ContentDiv)`
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
    justify-content: space-around;

`;

const CardsDisplayDiv = styled(ContentDiv)`
    justify-content:space-evenly;
    align-items: start;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px 15px;
    gap: 10px;
`;

const FAQDisplayDiv = styled(ContentDiv)`
    align-items: start;
    justify-content:space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 30px 0;
    gap: 10px;
`;

const TitleDiv = styled(StandartDiv)`
    width: 100%;
    height: 80px;
    padding: 15px;

`;

const T1 = styled.h1<{ textcolor?: string }>`
    color: ${(props) => props.textcolor ? props.textcolor : '#000'};
    font-size : clamp(2.2rem, 4vw, 3.2rem);
`;

const T2 = styled.h2<{ textcolor?: string }>`
    color: ${(props) => props.textcolor ? props.textcolor : '#000'};
    font-size : clamp(2rem, 2.7vw, 2.2rem);
    font-weight: 900;
`;

const T3 = styled.h3<{ textcolor?: string }>`
    color: ${(props) => props.textcolor ? props.textcolor : '#000'};
    font-size : clamp(1.5rem, 2.5vw, 2rem);
`;

const Paragraph = styled.p<{ textcolor?: string }>`
    color: ${(props) => props.textcolor ? props.textcolor : '#000'};
    font-size : clamp(1rem, 1.6vw, 1.4rem);
    text-align: justify;
    line-height: 25px;
    margin: 0 2vw;
   

    @media screen and (max-width: 700px){
        margin: 0 35px;
    } 
    @media screen and (max-width: 450px){
        text-align: center;
        width: 100%;
    } 
`;

const Divider = styled.div<{ background?: string, height?: string }>`
    background-color: ${(props) => props.background ? props.background : 'transparent'};
    height: ${(props) => props.height ? props.height : '1px'};
    width: 100%;
`;

export default function SalesPage() {
    const size = useWindowSize();
    const ref = useRef<HTMLDivElement | null>(null);
    const handleClick = () => ref.current?.scrollIntoView({ behavior: 'smooth' });

    const sizeVerification = size.height && size.height <= cardHeight.fullHeight;

    return (
        <>
            {/***************************DIV INICIAL*************************************** */}
            <StandartDiv minheight={"95vh"} background={PageTheme.primaryColor} style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <ContentDiv>
                    <T1 textcolor={PageTheme.secundaryTextColor} >{ConstantTexts.HomeDivTitle}</T1>
                    <T3 textcolor={PageTheme.secundaryTextColor} >{ConstantTexts.HomeDivSubtitle}</T3>
                    <Divider />
                    <PricingPageHomeButtonDiv>
                        <PricingPageHomeButton background={PageTheme.successGreen} textcolor={PageTheme.secundaryTextColor} onClick={() => handleClick()}>{ConstantTexts.HomeDivButtonPrice}</PricingPageHomeButton>
                    </PricingPageHomeButtonDiv>
                </ContentDiv>
            </StandartDiv>

            <Divider background={PageTheme.backGroundColor} height="3px" />

            {/* -------------------------------APRESENTAÇÃO-------------------------------------*/}
            <StandartDiv background={PageTheme.tertiaryBackGroundColor}>
                <PricingPageInfoDiv>
                    <div style={{ background: PageTheme.backGroundColor, borderRadius: "25px", padding: "15px" }}>
                        <T2 textcolor={PageTheme.primaryColor}>{ConstantTexts.SecondDivTitle}</T2>
                    </div>

                    <Paragraph textcolor={PageTheme.secundaryTextColor}>{ConstantTexts.SecondDivParagraph}</Paragraph>
                    <SalesPageButton
                        url={Urls.InstitucionalUrl}
                        hovercolor={PageTheme.secundaryTextColor}
                        textcolor={PageTheme.secundaryTextColor}>
                        {ConstantTexts.SecondDivButton}
                    </SalesPageButton>
                </PricingPageInfoDiv>
            </StandartDiv>

            {/* -------------------------------DEPOIMENTOS-------------------------------------*/}
            <TitleDiv ref={!sizeVerification ? ref : null} background={PageTheme.primaryColor} >
                <T3 textcolor={PageTheme.secundaryTextColor} >{ConstantTexts.DepoimentTitle}</T3>
            </TitleDiv>
            <Divider background={PageTheme.backGroundColor} height="1px" />

            <StandartDiv minheight={"86vh"} background={PageTheme.tertiaryBackGroundColor}>
                <SocialTestingContentDiv>
                    {
                        Depoimentos.map((x) => {
                            return (
                                <DepoimentCard styleCard={{ background: PageTheme.backGroundColor, bordercolor: PageTheme.primaryColor, width: "350px", height: "350px" }} info={x} />
                            )
                        })
                    }
                </SocialTestingContentDiv>
            </StandartDiv>

            {/* -------------------------------PREÇOS-------------------------------------*/}

            <TitleDiv ref={!sizeVerification ? ref : null} background={PageTheme.primaryColor} >
                <T3 textcolor={PageTheme.secundaryTextColor} >{ConstantTexts.PriceTitle}</T3>
            </TitleDiv>

            <StandartDiv minheight={"97vh"} background={PageTheme.backGroundColor}>
                <CardsDisplayDiv ref={sizeVerification ? ref : null} >
                    {
                        PricingInfo.map((x) => {
                            return (
                                <WhiteSalesCard salesInfo={x}
                                    background={PageTheme.secundaryBackGroundColor}
                                    borderhovercolor={PageTheme.primaryColor}
                                    bordercolor={PageTheme.primaryTextColor}
                                    secundarytextcolor={PageTheme.tertiaryTextColor}
                                />)
                        })
                    }
                </CardsDisplayDiv>

                <Divider background={PageTheme.backGroundColor} height="10px" />
                <CardsDisplayDiv>
                    <HelpInfoCard styleCard={{ background: PageTheme.backGroundColor, bordercolor: PageTheme.primaryTextColor, width: "90%" }} />
                </CardsDisplayDiv>

            </StandartDiv>

            <Divider background={PageTheme.backGroundColor} height="10px" />

            {/* -------------------------------FAQ-------------------------------------*/}

            <TitleDiv background={PageTheme.primaryColor}>
                <T3 textcolor={PageTheme.secundaryTextColor}>FAQ</T3>
            </TitleDiv>
            <Divider background={PageTheme.backGroundColor} height="1px" />
            <StandartDiv background={PageTheme.tertiaryBackGroundColor}>
                <FAQDisplayDiv >
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
            </StandartDiv>


            {/* <CardsDisplayDiv >
                    <ImageCard imageSrc={Urls.ImageUrl} title="dsasddsa" description="lorem ipsum ramdat ramidet hui ddsf" buttonSrc='www.google.com'></ImageCard>
                    <ImageCard imageSrc={Urls.ImageUrl} title="dsasddsa" description="lorem ipsum ramdat ramidet hui ddsf" buttonSrc='www.google.com'></ImageCard>
                </CardsDisplayDiv> */}
            {/* <InfoCard background={PageTheme.primaryColor} bordercolor={PageTheme.tertiaryColor}>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis architecto ad quibusdam debitis eaque. Aliquam ab voluptatum quas quia, quo eum incidunt rerum repellendus. Eum corporis culpa quasi veniam sequi.</p>
                    <button>xxxxxxxxxx</button>
                </InfoCard> */}
        </>

    )
}
export function HelpInfoCard(props: { styleCard: InfoCardType }) {
    const { styleCard } = props
    return (
        <InfoCard background={styleCard.background} bordercolor={styleCard.bordercolor} width={styleCard.width} height={styleCard.height}>
            <div style={{ display: "flex", flexDirection: "column", gap: "15px", justifyContent: 'center', alignItems: 'center' }}  >
                <T2>Está com Dúvida?</T2>
                <SalesPageButton url={Urls.AjudaUrl} textcolor={styleCard.bordercolor}>{ConstantTexts.SalesTeamButton}</SalesPageButton>
            </div>
        </InfoCard>
    )
}

