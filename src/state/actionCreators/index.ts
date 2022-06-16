import { Dispatch } from "redux";
import { Action } from "../actions";
import { ActionType } from "../actionTypes";

export const addUser = (data: []) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_USER,
      payload: data,
    });
  };
};

export const removeUser = (data: { id: Number }) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.REMOVE_USER,
      payload: data,
    });
  };
};

export const likeUser = (data: { id: Number }) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LIKE_USER,
      payload: data,
    });
  };
};

export const unlikeUser = (data: { id: Number }) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.UNLIKE_USER,
      payload: data,
    });
  };
};
