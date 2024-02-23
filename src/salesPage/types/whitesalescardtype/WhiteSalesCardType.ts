import { SalesCardType } from "../salescardtype/SalesCardType"

export type WhiteSalesCardType = {
    salesInfo: SalesCardType,
    background?: string,
    textcolor?: string,
    secundarytextcolor?: string,
    bordercolor?: string,
    borderhovercolor?: string
}