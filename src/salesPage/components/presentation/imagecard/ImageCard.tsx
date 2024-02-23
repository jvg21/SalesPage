import styled from 'styled-components';
import { SalesPageButton } from '../salescardbutton/SalesPageButton';
import { ImageCardType } from '../../../types/imagecardtype/ImageCardType';
import { useWindowSize } from '@uidotdev/usehooks';

const CardContainer = styled.div<{ background?: string, textcolor?: string, bordercolor?: string, width?: string, height?: string  }>`
  width: ${(props) => props.width ? props.width : ''};
  height: ${(props) => props.height ? props.height : ''};
  background-color: ${(props) => props.background ? props.background : 'transparent'};
  color: ${(props) => props.textcolor ? props.textcolor : '#000'};
  border: 1.5px solid ${(props) => props.bordercolor ? props.bordercolor : 'transparent'};
  border-radius: 15px;
  margin: 10px;
  max-width: 300px;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  button{
    margin: 0 7px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 15px 15px 0px 0px;
`;

const Title = styled.h3`
  margin: 10px 0 0;
  text-align: center;
  
`;

const Description = styled.p`
  overflow-x: auto;
  width: 90%;
  margin: 10px 0 0;
  padding: 10px;
  text-align: justify;
  
`;


function ImageCard(props: ImageCardType) {
    const { imageSrc, title, description } = props;
    const size = useWindowSize();
    const sizeVerification = props.width && size.width && Number(props.width.replace(/[^0-9]/g, '')) > size.width;
    const width = !sizeVerification ? props.width : "90vw";

    return (
        <CardContainer bordercolor={props.bordercolor} height={props.height} width={width} background={props.background} textcolor={props.textcolor}>
            <Image src={imageSrc} alt={title} />
            <Title>{title}</Title>
            <Description >
                {description}
            </Description>
            {
              props.buttonSrc && 
              <SalesPageButton url={props.buttonSrc}>Ver Mais</SalesPageButton>
            }
        </CardContainer>
    );
};

export default ImageCard;
