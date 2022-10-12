import { combineReducers } from "redux";
import cakeReducer from "./Cake/cakeReducer";
import iceReducer from "./IceCreams/iceReducer";
import cReducer from "./Chocolates/cReducer";
const rootReducer = combineReducers({
  cake: cakeReducer,
  ice: iceReducer,
  choco: cReducer,
});

export default rootReducer;
