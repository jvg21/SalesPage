import { ReactNode } from "react";
import styled from "styled-components";

const InfoCardContainer = styled.div<{background?:string,bordercolor?:string}>`
    background-color: ${(props)=>props.background?props.background:'transparent'};
    display: flex;
    align-items: center;
    padding: 15px;
    margin: 0 10vw;
    gap:10px;
    border: 1.5px solid ${(props)=>props.bordercolor?props.bordercolor:'transparent'};
    border-radius: 12px;
    

`;

export default function InfoCard(props:{children:ReactNode,background?:string,bordercolor?:string}){
    return(
        <InfoCardContainer background={props.background} bordercolor={props.bordercolor}>{props.children}</InfoCardContainer>
        
    );
}