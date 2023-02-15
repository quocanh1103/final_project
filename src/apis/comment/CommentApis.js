import { axiosAdmin } from "../Axios";

const ComentApis = {
  getCommentProduct: async (id) => {
    try {
      const res = await axiosAdmin.get(`/comments/${id}`);
      return res;
    } catch (e) {
      console.log(e);
    }
  },

  postCommentProduct: async (query) => {
    try {
      const res = await axiosAdmin.post(`/comments`, query);
      return res;
    } catch (e) {
      console.log(e);
    }
  },
};

export default ComentApis;
