import { axiosAdmin } from "../Axios";

const CardApis = {
  getCart: (query) => {
    try {
      const res = axiosAdmin.get(`/carts${query}`);
      return res;
    } catch (e) {
      console.log(e);
    }
  },
  getCartId: (id) => {
    try {
      const res = axiosAdmin.get(`/carts/${id}`);
      return res;
    } catch (e) {
      console.log(e);
    }
  },
  postAddToCart: (query) => {
    try {
      const res = axiosAdmin.post(`/carts`, query);
      return res;
    } catch (e) {
      console.log(e);
    }
  },
  deleteToCart: (id) => {
    try {
      const res = axiosAdmin.delete(`/carts/${id}`);
      return res;
    } catch (e) {
      console.log(e);
    }
  },
  deleteToCartOder: (query) => {
    try {
      const res = axiosAdmin.delete(`/carts/${query}`);
      return res;
    } catch (e) {
      console.log(e);
    }
  },
  GetCartOder: (idUser) => {
    try {
      const res = axiosAdmin.get(`/orders?${idUser}`);
      return res;
    } catch (e) {
      console.log(e);
    }
  },
  patchToCart: (id, count) => {
    try {
      const res = axiosAdmin.patch(`/carts/${id}`, count);
      return res;
    } catch (e) {
      console.log(e);
    }
  },
  postOrder: (query) => {
    try {
      const res = axiosAdmin.post(`/orders`, query);
      return res;
    } catch (e) {
      console.log(e);
    }
  },
};
export default CardApis;
