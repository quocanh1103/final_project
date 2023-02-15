import { axiosClient } from "../axiosClient";

const UserApis = {
  getAll: () => {
    try {
      const res = axiosClient.get("/users");
      return res;
    } catch (e) {
      console.log(e);
    }
  },
  getUserEmail: (email) => {
    try {
      const res = axiosClient.get(`/users?email=${email}`);
      return res;
    } catch (error) {
      console.log(error);
    }
  },
  getUserId: (id) => {
    try {
      const res = axiosClient.get(`/users/${id}`);
      return res;
    } catch (error) {
      console.log(error);
    }
  },
  getUserIdCheckout: (id) => {
    try {
      const res = axiosClient.get(`/users?${id}`);
      return res;
    } catch (error) {
      console.log(error);
    }
  },

  add: async (userid) => {
    try {
      const res = await axiosClient.post("/users", userid);
      return res;
    } catch (error) {
      console.log(error);
    }
  },
  editUser: (id, infomation) => {
    try {
      const res = axiosClient.patch(`/users/${id}`, infomation);
      return res;
    } catch (e) {
      console.log(e);
    }
  },
};

export default UserApis;
