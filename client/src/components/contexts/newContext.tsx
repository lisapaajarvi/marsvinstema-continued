import axios from "axios";
import { createContext, useReducer } from "react";
import { UserReducer } from "./UserReducer";
import { GET_USER, LOGIN, LOGOUT } from "./types";
import { ContextValue, LoginBody, NewUser } from "./interfaces";

export const UserContext = createContext<ContextValue>({
  getUser: () => {},
  login: () => {},
  logout: () => {},
  signup: () => {},
});

const UserProvider = (props: any) => {
  let initialState = {};

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const getUser = async () => {
    try {
      let res = await axios.get("/api/users/auth");
      let { data } = res;

      dispatch({ type: GET_USER, payload: data });
    } catch (error) {
      console.error(error);
    }
  };
  const signup = async (newUser: NewUser) => {
    try {
      axios.post("/api/users/register", newUser);
    } catch (error) {
      console.error(error);
    }
  };

  const login = async (loginBody: LoginBody) => {
    try {
      axios.post("/api/users/login", loginBody).then(({ data: user }) => {
        dispatch({ type: LOGIN, payload: user });
      });
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    try {
      axios.post("/api/users/logout").then((res) => {
        dispatch({ type: LOGOUT, payload: res });
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        getUser,
        signup,
        login,
        logout,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
