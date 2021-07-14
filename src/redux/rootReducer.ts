import { combineReducers } from "redux";
import reviewsReducer from "./reducers/reviewsReducer";

const rootReducer = combineReducers({
  reviews: reviewsReducer,
});

export default rootReducer;
