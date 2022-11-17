import axios from "axios";

const getSession = () => axios.get("/users/sign_in");

const signin = payload => axios.post("/users/sign_in", payload);

const signup = payload => axios.post("/users", payload);

const signout = () => axios.delete("/users/sign_out");

const authApi = {
  getSession,
  signin,
  signup,
  signout,
};

export default authApi;
