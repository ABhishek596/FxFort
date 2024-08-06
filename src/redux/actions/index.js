import { ADD_DATA } from "../type";
export const addData = (data) => ({
    type: ADD_DATA,
    payload: data,
  });