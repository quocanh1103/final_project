// import { axiosClient } from "../base_adapter";

import { axiosClient } from "../axiosClient";

const productApis = {
  getAll: async () => {
    try {
      const res = await axiosClient.get("/products");
      return res;
    } catch (e) {
      console.log(e);
    }
  },

  getProductByCate: (category) => {
    try {
      const res = axiosClient.get(
        `/products?category=${category}&_start=0&_end=3
        `
      );
      return res;
    } catch (error) {}
  },
  getProductByCateAll: (category) => {
    try {
      const res = axiosClient.get(
        `/products?category=${category}
        `
      );
      return res;
    } catch (error) {}
  },
  getProductByCateAllFilter: (category) => {
    try {
      const res = axiosClient.get(
        `/products${category}
        `
      );
      return res;
    } catch (error) {}
  },
  searchProductByName: (category) => {
    try {
      const res = axiosClient.get(
        `/products?q=${category}
        `
      );
      return res;
    } catch (error) {}
  },

  getDetail: (id) => {
    try {
      const res = axiosClient.get(`/products/${id}`);
      return res;
    } catch (error) {}
  },
};

export default productApis;
