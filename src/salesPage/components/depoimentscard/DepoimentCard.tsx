import styled from "styled-components";
import { InfoCardType } from "../../types/infocardtype/InfoCardType";
import InfoCard from "../presentation/infocard/InfoCard";

const DepoimentCardDiv = styled.div`
    text-align: justify;
    font-size: "19px";
    line-height: "20px";
`;

type Depoiment = {
    name: string,
    depoiment: string
}

export function DepoimentCard(props: { styleCard: InfoCardType, info: Depoiment }) {
    const { styleCard, info } = props
    return (
        <InfoCard width={styleCard.height} height={styleCard.width} background={styleCard.background} bordercolor={styleCard.bordercolor}>
            <DepoimentCardDiv>
                <h3>{info.name}</h3>
                <br/>
                <p>{info.depoiment}</p>
            </DepoimentCardDiv>
        </InfoCard>
    )
}