import { useState } from "react";
import styled from "styled-components";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { PageTheme } from "../themeconfig/ThemeConfig";

// Definindo o estilo da div
const Card = styled.div <{ background?: string, textcolor?: string }>`
  background-color: ${(props) => props.background ? props.background : '#fff'};
  color: ${(props) => props.textcolor ? props.textcolor : '#000'};
  border: 1px solid #ccc;
  border-radius: 15px;
  width: 42vw;
  padding: 15px;
  margin: 10px;
  overflow: auto;

  @media screen and (max-width:800px) {
    width: 95vw;
  }
`;

const Title = styled.h3`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
`;

const Content = styled.div<{ background?: string, textcolor?: string }>`
  margin-top: 10px;
  padding: 0 5px;
  display: flex;
  justify-content: left;
  text-align: justify;

  button{
    background-color: ${(props) => props.background ? props.background : '#000'};
    padding: 5px;
    border: none;
  }
  a{
    text-decoration: none;
    color: ${(props) => props.textcolor ? props.textcolor : '#fff'};
  }

`;

const ToggleButton = styled.button`
background-color: transparent;
  cursor: pointer;
  color: ${PageTheme.secundaryTextColor};
  border: none;
  padding: 5px 10px;
  margin-top: 10px;
`;
type Link = {
  title: string,
  url: string
}

export default function QuestionCard(props: { title: string, info: string[], link?: Link, background?: string, textcolor?: string }) {

  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Card background={props.background} textcolor={props.textcolor}>
      <div style={{ display: 'inline-flex' }}>
        <Title>{props.title}</Title>
        <ToggleButton onClick={toggleCollapse}>
          {isCollapsed ? <FaPlus /> : <FaMinus />}
        </ToggleButton>
      </div>
      <Content style={{ display: isCollapsed ? 'none' : 'block' }} background={props.textcolor} textcolor={props.background}>
        <p>
          {
            props.info.map((x) => {
              return (<>{x}<br /><br /></>)
            })

          }
          {
            props.link &&
            <button><a href={props.link.url} target="_blanck">{props.link.title}</a></button>
          }
        </p>
      </Content>
    </Card>
  );
};
