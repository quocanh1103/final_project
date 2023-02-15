import { axiosClient } from "../axiosClient";

const CardApis = {
  getCart: (query) => {
    try {
      const res = axiosClient.get(`/carts${query}`);
      return res;
    } catch (e) {
      console.log(e);
    }
  },
  getCartId: (id) => {
    try {
      const res = axiosClient.get(`/carts/${id}`);
      return res;
    } catch (e) {
      console.log(e);
    }
  },
  postAddToCart: (query) => {
    try {
      const res = axiosClient.post(`/carts`, query);
      return res;
    } catch (e) {
      console.log(e);
    }
  },
  deleteToCart: (id) => {
    try {
      const res = axiosClient.delete(`/carts/${id}`);
      return res;
    } catch (e) {
      console.log(e);
    }
  },
  deleteToCartOder: (query) => {
    try {
      const res = axiosClient.delete(`/carts/${query}`);
      return res;
    } catch (e) {
      console.log(e);
    }
  },
  GetCartOder: (idUser) => {
    try {
      const res = axiosClient.get(`/orders?${idUser}`);
      return res;
    } catch (e) {
      console.log(e);
    }
  },
  patchToCart: (id, count) => {
    try {
      const res = axiosClient.patch(`/carts/${id}`, count);
      return res;
    } catch (e) {
      console.log(e);
    }
  },
  postOrder: (query) => {
    try {
      const res = axiosClient.post(`/orders`, query);
      return res;
    } catch (e) {
      console.log(e);
    }
  },
};
export default CardApis;
