import {BUY_ICE} from './iceType';
const initialState = {
    numofice : 10,
    error:""
};

const iceReducer = (state = initialState , action) =>{
    switch(action.type){
        case BUY_ICE:
            if(state.numofice > action.payload.purchase){
                return {
                    ...state,
                    numofice: state.numofice - action.payload.purchase
                }
            }
            else {
                return {
                  ...state,
                  error: (state.error = "Sorry!! Out Of Stock"),
                };
              }
              default:
                  return state;
    }
}
export default iceReducer;