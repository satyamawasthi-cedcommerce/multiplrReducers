import { createStore } from "redux";
import rootReducer from "./rootReducer";

// creating store
const store = createStore(
    rootReducer,
)

export default store