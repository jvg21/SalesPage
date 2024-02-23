import { useWindowSize } from "@uidotdev/usehooks";
import styled from "styled-components";
import { InfoCardType } from "../../../types/infocardtype/InfoCardType";


const InfoCardContainer = styled.div<{ background?: string, bordercolor?: string, width?: string, height?: string }>`
    width: ${(props) => props.width ? props.width : ''};
    height: ${(props) => props.height ? props.height : ''};
    background-color: ${(props) => props.background ? props.background : 'transparent'};
    padding: 20px;
    border: 1.5px solid ${(props) => props.bordercolor ? props.bordercolor : 'transparent'};
    border-radius: 12px;
    overflow: auto;
    min-width: 260px;

`;

export default function InfoCard(props: InfoCardType) {

    const size = useWindowSize();
    const sizeVerification = props.width && size.width && Number(props.width.replace(/[^0-9]/g, '')) > size.width;
    const width = !sizeVerification ? props.width : "90vw";

    return (
        <InfoCardContainer height={props.height} width={width} background={props.background} bordercolor={props.bordercolor}>{props.children}</InfoCardContainer>

    );
}