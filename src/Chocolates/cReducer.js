import { BUY_CHOCO } from "./cType";
const initialState = {
  numofc: 10,
  error: "",
};
const cReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CHOCO:
      if (state.numofc > action.payload.purchase) {
        return {
          ...state,
          numofc: state.numofc - action.payload.purchase,
        };
      } else {
        return {
          ...state,
          error: (state.error = "Sorry!! Out Of Stock"),
        };
      }
    default:
      return state;
  }
};
export default cReducer;