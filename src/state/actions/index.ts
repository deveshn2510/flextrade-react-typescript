import { ActionType } from "../actionTypes";

interface AddUserAction {
  type: ActionType.ADD_USER;
  payload: unknown[];
}

interface RemoveUserAction {
  type: ActionType.REMOVE_USER;
  payload: { id: Number };
}

interface LikeUserAction {
  type: ActionType.LIKE_USER;
  payload: { id: Number };
}

interface UnlikeUserAction {
  type: ActionType.UNLIKE_USER;
  payload: { id: Number };
}

export type Action =
  | AddUserAction
  | RemoveUserAction
  | LikeUserAction
  | UnlikeUserAction;
