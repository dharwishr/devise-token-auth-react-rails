import axios from "axios";

const create = payload => axios.post("/users/invitation", payload);

const accept = payload => axios.put("/users/invitation", payload);

const invitationApi = {
  create,
  accept,
};

export default invitationApi;
