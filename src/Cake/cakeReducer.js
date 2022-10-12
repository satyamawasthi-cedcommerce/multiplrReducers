import { BUY_CAKE } from "./cakeType";

// defining the initialState
const initialState = {
  numofcakes: 10,
  error: "",
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      if (state.numofcakes > action.payload.purchase) {
        return {
          ...state,
          numofcakes: state.numofcakes - action.payload.purchase,
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
export default cakeReducer;
