import { useWindowSize } from "@uidotdev/usehooks";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosArrowUp } from "react-icons/io";
import { useOutsideClickEvent } from "../../../hooks/useOutsideClickEvent";
import { SalesCardType } from "../../../types/salescardtype/SalesCardType";
import SalesInfoModal from "../../InfoModal";

const SaleCard = styled.div<{ height: number }>`
  background-color: white;
  height: ${({ height }) => (height)}px;
  width: 300px;
  min-width: 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding-bottom: 5px;
  transition: all 1s ease;
  border: 0.5px solid #9B1620;
  overflow: hidden;

  @media screen and (max-width: 450px) {
    margin: 0 3vw;
    width: 90vw;
  }
`;

const SalesTittle = styled.div`
  background-color: #9B1620;
  overflow: hidden;
  color: white;
  font-weight: bold;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
`;

const SalesButton = styled.button`
  cursor: pointer;
  width: 80%;
  height: 40px;
  font-size: 1.1em;
  background-color: #015528;
  color: white;
  border: 1px solid #015528;
  transform: translateX(0) scale(1);

  &:hover {
    background-color: #003F1D;
    transform: scale(1.002);
  }
`;

const SalesButtonInfo = styled(SalesButton)`
  background-color: #9B1620;
  color: white;
  border: 1px solid #6b020b;

  &:hover {
    background-color: #6b020b;
    color: #ffffff;
  }
`;

const SalesTittleText = styled.p`
  display: flex;
  text-align: center;
`;

const SalesText = styled.p`
  font-size: small;
  text-align: center;
  line-height: 25px;
`;

const SalesPriceText = styled.p`
  text-align: center;
  margin: 0.5vh;
  font-size: 30px;
  font-weight: bold;
  font-family: Monserat,sans-serif;
`;

const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px 0;
`;



export default function SalesCard({salesInfo}: { salesInfo: SalesCardType }) {

  const minWidth = 430;
  const size = useWindowSize();
  const sizeVerification = size.height && size.height <= minWidth;
  const [dropdown, setDropdown] = useState(sizeVerification);

  const [InfoModal, setInfoModal] = useState(false);

  const modalRef = useRef(null);
  useOutsideClickEvent(modalRef, () => { InfoModal ? setInfoModal(false) : null })


  const OpenDropDown = () => { if (sizeVerification) setDropdown(!dropdown) }

  const heigthControll = useEffect(() => {
    size.height && size.height <= minWidth ? setDropdown(true) : setDropdown(false);
  }, [size]);

  return (
    <>
      <SaleCard height={dropdown ? 265 : minWidth}>
        
        <SalesTittle onClick={() => OpenDropDown()}>
          <SalesTittleText>{salesInfo.titulo1.toUpperCase()}</SalesTittleText>
          {sizeVerification && (dropdown ? <RiArrowDropDownLine size={'50px'} /> : <IoIosArrowUp size={'25px'} />)}
        </SalesTittle>
        <SalesPriceText>R$ {salesInfo.preco1}</SalesPriceText>

        <SalesTittle >
          <SalesTittleText>{salesInfo.titulo2.toUpperCase()}</SalesTittleText>
        </SalesTittle>
        <SalesPriceText>R$ {salesInfo.preco2}</SalesPriceText>

        {!dropdown &&
          <SalesText>
            <b>{salesInfo.validadeLote}</b>
            <br />*Enquanto houver vagas<br />
            <b>{salesInfo.proximoLote}</b>
          </SalesText>
        }

        <ButtonDiv>
          <SalesButton>Comprar</SalesButton>
          <SalesButtonInfo onClick={() => setInfoModal(true)}>Mais Informações</SalesButtonInfo>
        </ButtonDiv>

      </SaleCard>

      {InfoModal && <SalesInfoModal closeModalFunction={() => setInfoModal(false)} tittle={salesInfo.maisInfo}/>}
    </>
  );
}
