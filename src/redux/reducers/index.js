import { combineReducers } from "redux";
import articlesReducer from "./articlesReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  userState: userReducer,
  articleState: articlesReducer,
});

export default rootReducer;
