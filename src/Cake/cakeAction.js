import { BUY_CAKE } from "./cakeType";

// defining action
export const buyCake = (num) => {
  return {
    type: BUY_CAKE,
    payload: {
      purchase: num,
    },
  };
};
