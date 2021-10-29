import { combineReducers } from "redux";
import tab from "./tab";
import news from "./news";
import trends from "./trends";

const allReducers = combineReducers({
  tab,
  news,
  trends,
});

export default allReducers;
