import { axiosClient } from "../axiosClient";

const ComentApis = {
  getCommentProduct: async (id) => {
    try {
      const res = await axiosClient.get(`/comments/${id}`);
      return res;
    } catch (e) {
      console.log(e);
    }
  },

  postCommentProduct: async (query) => {
    try {
      const res = await axiosClient.post(`/comments`, query);
      return res;
    } catch (e) {
      console.log(e);
    }
  },
};

export default ComentApis;
