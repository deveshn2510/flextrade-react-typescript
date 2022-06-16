import { Action } from "../actions";
import { ActionType } from "../actionTypes";

interface User {
  name: String;
  email: String;
  phone: String;
  id: Number;
  website: String;
  liked: Boolean;
  edit: Boolean;
}

const intialState: User[] = [];

const reducer = (state = intialState, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_USER: {
      return [...action.payload];
    }
    case ActionType.REMOVE_USER: {
      const data = [...state];
      let id = action.payload.id;
      const filterData = data.filter((el: any) => el.id !== id);
      return [...filterData];
    }
    case ActionType.LIKE_USER: {
      const data = [...state];
      let id = action.payload.id;
      let alteredData = data.map((elem) => {
        if (elem.id === id) {
          elem.liked = true;
        }
        return elem;
      });
      return [...alteredData];
    }
    case ActionType.UNLIKE_USER: {
      const data = [...state];
      let id = action.payload.id;
      let alteredData = data.map((elem) => {
        if (elem.id === id) {
          elem.liked = false;
        }
        return elem;
      });
      return [...alteredData];
    }
    default:
      return state;
  }
};

export default reducer;
