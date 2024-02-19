import styled from 'styled-components';
import { SalesPageButton } from '../salescardbutton/SalesPageButton';
import { PageTheme } from '../themeconfig/ThemeConfig';

const CardContainer = styled.div`
  border: 1px solid ${PageTheme.tertiaryColor};
  border-radius: 15px;
  margin: 10px;
  max-width: 300px;
  display: flex;
  justify-content: center;
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


function CollapsibleCard(props: { imageSrc: string, title: string, description: string, buttonSrc: string }) {
    const { imageSrc, title, description } = props;

    return (
        <CardContainer >
            <Image src={imageSrc} alt={title} />
            <Title>{title}</Title>
            <Description >
                {description}
            </Description>
            <SalesPageButton url={props.buttonSrc}>Ver Mais</SalesPageButton>
        </CardContainer>
    );
};

export default CollapsibleCard;
