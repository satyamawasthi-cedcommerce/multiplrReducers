import { BUY_ICE } from "./iceType"
export const buyIce = (numice) =>{
    return{
        type: BUY_ICE,
        payload: {
            purchase: numice
        }
    }
}