import { State } from "./interfaces";
import { GET_USER, LOGIN, LOGOUT } from "./types";

export const UserReducer = (
  state: State,
  action: { payload: any; type: string }
) => {
  const { payload, type } = action;

  switch (type) {
    case GET_USER:
      return {
        ...state,
        user: payload,
      };
    case LOGIN:
      return {
        ...state,
        user: payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: undefined,
      };
    default:
      return state;
  }
};
