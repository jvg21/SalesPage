import { Component, ReactElement } from "react"

export type SalesCardType = {
    titulo1:string,
    preco1:string,
    titulo2:string,
    preco2:string,
    validadeLote:string,
    proximoLote:string,
    maisInfo?:ReactElement,
    info:string
}