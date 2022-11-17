import axios from "axios";

const list = () => axiosIntercepted.get("users/invitation");

const create = payload => axios.post("/users/invitation", payload);

const accept = payload => axios.put("/users/invitation", payload);

const invitationApi = {
  list,
  create,
  accept,
};

export default invitationApi;
