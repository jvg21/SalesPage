import { useState } from "react";
import styled from "styled-components";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

// Definindo o estilo da div
const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 40vw;
  padding: 10px;
  margin: 10px;
  overflow: auto;

  @media screen and (max-width:700px) {
    width: 80vw;
  }
`;

const Title = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
`;

const Content = styled.div`
  margin-top: 10px;
  padding: 0 5px;
  display: flex;
  justify-content: left;
  text-align: justify;

`;

const ToggleButton = styled.button`
background-color: transparent;
  cursor: pointer;
  color: #000;
  border: none;
  padding: 5px 10px;
  margin-top: 10px;
`;

export default function QuestionCard(props:{title:string,info:string}) {

    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <Card>
            <div style={{display:'inline-flex'}}>
                <Title>{props.title}</Title>
                <ToggleButton onClick={toggleCollapse}>
                    {isCollapsed ? <FaPlus /> : <FaMinus />}
                </ToggleButton>
            </div>
            <Content style={{ display: isCollapsed ? 'none' : 'block' }}>
                <p>{props.info}</p>
            </Content>
        </Card>
    );
};
