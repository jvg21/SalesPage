// import { useWindowSize } from "@uidotdev/usehooks";
// import { useEffect, useState } from "react";
// import styled from "styled-components"
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { IoIosArrowUp } from "react-icons/io";

// const Div2 = styled.div<{ display: boolean }>`
//     width: 100%;
//     display: ${(props) => props.display ? 'flex' : 'none'};
//     justify-content: space-evenly;
//     flex-direction: column;
//     align-items: center;
// `;

// const SaleCard = styled.div<{ dropdown: boolean }>`

//     background-color: white;
//     height: ${(props) => props.dropdown ? '250px' : '420px'};
//     width: 300px;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     flex-direction: column;
//     padding-bottom: 5px;
//     transition: all 1s ease;
//     border:#9B1620 ;

//     @media screen and (max-width: 450px) {
//         margin: 0 3vw;
//         width:90vw
//     }

// `;

// const SalesTittle = styled.div`
//     background-color: #9B1620;
//     overflow: hidden;
//     color: white;
//     font-weight: bold;
//     width: 100%;
//     height: 60px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 0px 10px;
// `;


// const SalesButton = styled.button`
//     width: 80%;
//     height: 40px;
//     font-size: 1.2em;
//     background-color: #003F1D;
//     color: white;
//     border: solid 2px;
//     border-color: black;
//     border-radius: 7px;

//     &:hover{
//         background-color: #015528;
//     }

// `;

// const SalesButtonInfo = styled(SalesButton)`
//     background-color: #dbdb03;
//     color: black;

//     &:hover{
//         background-color: #dba903;
//     }
// `;
// const SalesTittleText = styled.p`
//     display: flex;
//     text-align: center;

// `;

// const SalesText = styled.p``;
// const SalesPriceText = styled.p`

// `;

// const ButtonDiv = styled.div`
//     /* background-color: blue; */
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     gap: 5px 0;

// `;


// export default function SalesCard(props: { titulo1: string, titulo2: string, preco: string }) {
//     const minWidth = 430 

//     const preco = `R$ ${props.preco}`
//     const size = useWindowSize();

//     const sizeVerification = size.height && size.height <= minWidth
//     const [dropdown, setDropdown] = useState(sizeVerification);

//     const DropDownIconConfig = ()=>{
//         if (sizeVerification){
//             setDropdown(!dropdown)
//         }
//     }


//     const sizeController = useEffect(() => {
//         size.height && size.height <= minWidth ? setDropdown(true) : setDropdown(false)
//     }, [size])

//     return (
//         <>

//             <SaleCard dropdown={dropdown||false}>
//                 <SalesTittle>
//                     <SalesTittleText>{props.titulo2}</SalesTittleText>
//                 </SalesTittle>
//                 <h1>{preco}</h1>

//                 <SalesTittle onClick={()=>DropDownIconConfig()}>
//                     <SalesTittleText>{props.titulo1}</SalesTittleText>
//                     {
//                         sizeVerification && dropdown && <RiArrowDropDownLine size={'50px'} />
//                         ||
//                         sizeVerification && <IoIosArrowUp size={'25px'}/>
//                     }
//                 </SalesTittle>

//                 <Div2 display={!dropdown}>
//                     <h1>{preco}</h1>
//                     <div style={{ height: '20px' }}></div>
//                     <SalesText>2º LOTE ATÉ 20/3/2024<br />*Enquanto houver vagas<br /> 3º LOTE: R$350,00 / R$450,00</SalesText>
//                 </Div2>

//                 <ButtonDiv>
//                     <SalesButton>Comprar</SalesButton>
//                     {
//                         !dropdown && <SalesButtonInfo>Info</SalesButtonInfo>
//                     }
//                 </ButtonDiv>

//             </SaleCard>

//         </>
//     )
// }

import { useWindowSize } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosArrowUp } from "react-icons/io";

const Div2 = styled.div<{ display: boolean }>`
    width: 100%;
    display: ${(props) => props.display ? 'flex' : 'none'};
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
`;

const SaleCard = styled.div<{dropdown:boolean}>`
  background-color: white;
  height: ${({ dropdown }) => (dropdown ? '250px' : '420px')};
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding-bottom: 5px;
  transition: all 1s ease;
  border: 2px solid #9B1620;
  border-radius: 4px;

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
  width: 80%;
  height: 40px;
  font-size: 1.2em;
  background-color: #003F1D;
  color: white;
  border: 2px solid black;
  border-radius: 7px;

  &:hover {
    background-color: #015528;
  }
`;

const SalesButtonInfo = styled(SalesButton)`
  background-color: #dbdb03;
  color: black;

  &:hover {
    background-color: #dba903;
  }
`;

const SalesTittleText = styled.p`
  display: flex;
  text-align: center;
`;

const SalesText = styled.p`
  text-align: center;
`;

const SalesPriceText = styled.p`
  text-align: center;
`;

const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px 0;
`;

export default function SalesCard(props: { titulo1: string, titulo2: string, preco: string }) {
  const minWidth = 430;
  const preco = `R$ ${props.preco}`;
  const size = useWindowSize();
  const sizeVerification = size.height && size.height <= minWidth;
  const [dropdown, setDropdown] = useState(sizeVerification);

  const DropDownIconConfig = () => {
    if (sizeVerification) {
      setDropdown(!dropdown);
    }
  };

  useEffect(() => {
    size.height && size.height <= minWidth ? setDropdown(true) : setDropdown(false);
  }, [size]);

  return (
    <>
      <SaleCard dropdown={dropdown || false}>
        <SalesTittle>
          <SalesTittleText>{props.titulo2}</SalesTittleText>
        </SalesTittle>
        <h1>{preco}</h1>

        <SalesTittle onClick={() => DropDownIconConfig()}>
          <SalesTittleText>{props.titulo1}</SalesTittleText>
          {sizeVerification && (dropdown ? <RiArrowDropDownLine size={'50px'} /> : <IoIosArrowUp size={'25px'} />)}
        </SalesTittle>

        <Div2 display={!dropdown}>
          <h1>{preco}</h1>
          <div style={{ height: '20px' }}></div>
          <SalesText>2º LOTE ATÉ 20/3/2024<br />*Enquanto houver vagas<br /> 3º LOTE: R$350,00 / R$450,00</SalesText>
        </Div2>

        <ButtonDiv>
          <SalesButton>Comprar</SalesButton>
          {!dropdown && <SalesButtonInfo>Info</SalesButtonInfo>}
        </ButtonDiv>
      </SaleCard>
    </>
  );
}
