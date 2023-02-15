import { axiosAdmin } from "../Axios";

const UserApis = {
  getAll: () => {
    try {
      const res = axiosAdmin.get("/users");
      return res;
    } catch (e) {
      console.log(e);
    }
  },
  getUserEmail: (email) => {
    try {
      const res = axiosAdmin.get(`/users?email=${email}`);
      return res;
    } catch (error) {
      console.log(error);
    }
  },
  getUserId: (id) => {
    try {
      const res = axiosAdmin.get(`/users/${id}`);
      return res;
    } catch (error) {
      console.log(error);
    }
  },
  getUserIdCheckout: (id) => {
    try {
      const res = axiosAdmin.get(`/users?${id}`);
      return res;
    } catch (error) {
      console.log(error);
    }
  },

  add: async (userid) => {
    try {
      const res = await axiosAdmin.post("/users", userid);
      return res;
    } catch (error) {
      console.log(error);
    }
  },
  editUser: (id, infomation) => {
    try {
      const res = axiosAdmin.patch(`/users/${id}`, infomation);
      return res;
    } catch (e) {
      console.log(e);
    }
  },
};

export default UserApis;
