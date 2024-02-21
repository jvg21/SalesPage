import styled from "styled-components";
import { SalesPageButton } from "../salescardbutton/SalesPageButton";
import { PageTheme } from "../themeconfig/ThemeConfig";
import { useEffect, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import { SalesCardType } from "../../../types/salescardtype/SalesCardType";
import { RiArrowDropDownLine } from "react-icons/ri";

const SalesCard = styled.div<{ height: number, background?: string, textcolor?: string, secundarytextcolor?: string, bordercolor?: string, borderhovercolor?: string }>`
  background-color: ${(props) => props.background ? props.background : '#fff'};
  color: ${(props) => props.textcolor ? props.textcolor : '#000'};
  height: ${({ height }) => (height)}px;
  width: 300px;
  padding: 25px 30px;
  display: flex;
  justify-content: space-between;
  text-align: left;
  flex-direction: column;
  overflow-x: auto;
  border: 1px solid ${(props) => props.bordercolor ? props.bordercolor : '#000'};
  border-radius: 15px;
  font-family: Monserat,sans-serif;
  margin: 0px 1vw;
  transition: all 0.5s ease-out;

  &:hover{
    border:1.2px solid ${(props) => props.borderhovercolor ? props.borderhovercolor : '#000'};
  }

  li{
    color: ${(props) => props.secundarytextcolor ? props.secundarytextcolor : '#000'};
    margin: 10px;
    list-style: none;
    font-size: 14px;
  }

  hr{
    border: none;
    height: 1px;
    background: ${(props) => props.secundarytextcolor ? props.secundarytextcolor : '#000'};
    background: repeating-linear-gradient(90deg,#cfcfcf,#cfcfcf 3px,transparent 3px,transparent 10px);
  }

  p{
    color: ${(props) => props.secundarytextcolor ? props.secundarytextcolor : '#000'};
    font-size: 16px;
  }



  @media screen and (max-width: 400px){
    width: 90vw;
  }
`;

const TitleDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DropDownButton = styled.div<{ rotated: boolean }>`
  background-color: transparent;
  display: flex;
  align-items: center;
  border: none;
  width: 30px;
  height: 30px;
  font-size: 200%;
  transform: ${({ rotated }) => rotated ? 'rotate(0deg)' : 'rotate(180deg)'};

`;

const cardHeight = {
  mobileHeight: 265,
  fullHeight: 450
}

export default function WhiteSalesCard(props: {
  salesInfo: SalesCardType,
  background?: string,
  textcolor?: string,
  secundarytextcolor?: string,
  bordercolor?: string,
  borderhovercolor?: string
}) {

  const size = useWindowSize();
  const sizeVerification = size.height && size.height <= cardHeight.fullHeight;
  const [dropDown, setDropDown] = useState(sizeVerification)

  const OpenDropDown = () => { if (sizeVerification) setDropDown(!dropDown) }

  const heigthControll = useEffect(() => {
    return setDropDown(size.height && size.height <= cardHeight.fullHeight - 20)
  }, [size]);

  return (
    <>
      <SalesCard background={props.background} textcolor={props.textcolor} secundarytextcolor={props.secundarytextcolor} bordercolor={props.bordercolor} borderhovercolor={props.borderhovercolor}
        height={dropDown ? cardHeight.mobileHeight : cardHeight.fullHeight} onClick={() => OpenDropDown()}>
        <TitleDiv>
          <h2>{props.salesInfo.Title}</h2>
          {sizeVerification &&
            <DropDownButton rotated={!dropDown}>
              <RiArrowDropDownLine />
            </DropDownButton>
          }
        </TitleDiv>

        <p>{props.salesInfo.Subtitle1}</p>
        <h1>{props.salesInfo.Price1}</h1>
        <p>{props.salesInfo.Subtitle2}</p>
        <h1>{props.salesInfo.Price2}</h1>
        {
          !dropDown &&
          <>
            <hr />
            <ul>
              {
                props.salesInfo.Info.map((x) => {
                  return (<li>{x}</li>)
                })

              }
            </ul>
          </>

        }

        <SalesPageButton textcolor={props.textcolor} url={props.salesInfo.url}>Comprar</SalesPageButton>
      </SalesCard>
    </>
  );
}