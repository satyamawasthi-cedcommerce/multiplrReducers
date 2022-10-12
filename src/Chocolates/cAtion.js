import {BUY_CHOCO} from './cType'
export const buyChoco = (num) =>{
    return{
        type: BUY_CHOCO,
        payload:{
            purchase:num
        }
    }
}