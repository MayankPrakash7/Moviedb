import { combineReducers } from "redux";
import { GET_LIST } from "./actionTypes";

const initialState = { list: [] };

export function getListData(state = initialState, action) {
  switch (action.type) {
    case GET_LIST:
      return {
        list: action.listData
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({ getListData });
export default rootReducer;