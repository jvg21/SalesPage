import styled from "styled-components";
import { SalesPageButton } from "../salescardbutton/SalesPageButton";
import { PageTheme } from "../themeconfig/ThemeConfig";
import { useEffect, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import { SalesCardType } from "../../../types/salescardtype/SalesCardType";
import { RiArrowDropDownLine } from "react-icons/ri";
import Urls from './../../../infrastructure/Urls.json';

const SalesCard = styled.div<{ height: number }>`
  height: ${({ height }) => (height)}px;
  width: 300px;
  padding: 25px 30px;
  display: flex;
  justify-content: space-between;
  text-align: left;
  flex-direction: column;
  overflow-x: auto;
  border: 1px solid ${PageTheme.tertiaryColor};
  border-radius: 15px;
  font-family: Monserat,sans-serif;
  margin: 0px 1vw;
  transition: all 0.3s ease-out;

  &:hover{
    border-color: ${PageTheme.primaryTextColor};
  }

  li{
    color: ${PageTheme.tertiaryTextColor};
    margin: 10px;
    list-style: none;
    font-size: 14px;
  }

  hr{
    border: none;
    height: 1px;
    background: ${PageTheme.tertiaryColor};
    background: repeating-linear-gradient(90deg,#cfcfcf,#cfcfcf 3px,transparent 3px,transparent 10px);
  }

  p{
    color: ${PageTheme.tertiaryTextColor};
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

export default function WhiteSalesCard({salesInfo}:{salesInfo:SalesCardType}) {

  const size = useWindowSize();
  const sizeVerification = size.height && size.height <= cardHeight.fullHeight;
  const [dropDown, setDropDown] = useState(sizeVerification)

  const OpenDropDown = () => { if (sizeVerification) setDropDown(!dropDown) }

  const heigthControll = useEffect(() => {
    return setDropDown(size.height && size.height <= cardHeight.fullHeight - 20)
  }, [size]);

  return (
    <>
      <SalesCard height={dropDown ? cardHeight.mobileHeight : cardHeight.fullHeight} onClick={() => OpenDropDown()}>
        <TitleDiv>
          <h2>{salesInfo.Title}</h2>
          {sizeVerification &&
            <DropDownButton rotated={!dropDown}>
              <RiArrowDropDownLine/>
            </DropDownButton>
          }
        </TitleDiv>

        <p>{salesInfo.Subtitle1}</p>
        <h1>{salesInfo.Price1}</h1>
        <p>{salesInfo.Subtitle2}</p>
        <h1>{salesInfo.Price2}</h1>
        {
          !dropDown &&
          <>
            <hr />
            <ul>
              {
                salesInfo.Info.map((x)=>{
                  return(<li>{x}</li>)
                })

              }
            </ul>
          </>

        }

        <SalesPageButton url={salesInfo.url}>Comprar</SalesPageButton>
      </SalesCard>
    </>
  );
}
