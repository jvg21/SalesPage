import { Component, ReactElement, useRef } from "react";
import styled from "styled-components";
import { useOutsideClickEvent } from "../hooks/useOutsideClickEvent";

const InfoModalDiv = styled.div`

  z-index: 9999;
  width: 70%;
  height: 350px;
  min-width: 200px;
  background-color: white;
  position: fixed;
  top: 10%;
  border-radius: 10px;
  padding: 3vw;
  overflow-x: auto;

  @media screen and (max-width: 450px) {
    margin: 0 3vw;
    width: 75vw;
  }

`;

const CloseButton = styled.button`
    position: absolute;
    right: 10px;
    bottom: 10px;
    background-color: transparent;
    border: none;
    color: gray;
    font-family: Monserat,'sans-serfif';
    font-size: 14px;
    cursor: pointer;

`;
const ComponentDiv = styled.div`
    width: 90%;
    height: 90%;
    overflow-y: auto;
    overflow-x: hidden;
    position: absolute;

`;
const InfoModal = (props: { closeModalFunction: () => void, tittle?:ReactElement }) => {
    const modalRef = useRef(null);
    useOutsideClickEvent(modalRef, () => props.closeModalFunction());

    return (
        <InfoModalDiv ref={modalRef}>
            
            <ComponentDiv>
            {props.tittle}

            </ComponentDiv>
            <CloseButton onClick={() => props.closeModalFunction()}>Clique Aqui Para Fechar</CloseButton>
        </InfoModalDiv>
    );
};

export default InfoModal;