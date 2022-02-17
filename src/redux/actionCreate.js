import { GET_LIST } from "./actionTypes";

export function getList(listData) {
  return { type: GET_LIST, listData };
}