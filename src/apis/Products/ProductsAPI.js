import { axiosAdmin } from "../Axios";

const productApis = {
	postProducts: (request) => {
		try {
			const response = axiosAdmin.post("/products", request);
			return response;
		} catch (error) {}
	},
	postOrders: (request) => {
		try {
			const response = axiosAdmin.post("/order", request);
			return response;
		} catch (error) {}
	},
	postUserDeactive: (request) => {
		try {
			const response = axiosAdmin.post("/DeactiveUsers", request);
			return response;
		} catch (error) {}
	},
	getProducts: () => {
		try {
			const response = axiosAdmin.get("/products");
			return response;
		} catch (error) {}
	},
	getProductByName: (filter) => {
		try {
			const response = axiosAdmin.get(`/products?q=${filter}`);
			return response;
		} catch (error) {}
	},
	deleteProducts: (id) => {
		try {
			const response = axiosAdmin.delete(`/products/${id}`);
			return response;
		} catch (error) {}
	},
	getUsers: () => {
		try {
			const response = axiosAdmin.get("/users");
			return response;
		} catch (error) {}
	},
	getUsersByName: (filter) => {
		try {
			const response = axiosAdmin.get(`/users?q=${filter}`);
			return response;
		} catch (error) {}
	},
	getOrders: () => {
		try {
			const response = axiosAdmin.get("/orders");
			return response;
		} catch (error) {}
	},
	getOrderAdd: () => {
		try {
			const response = axiosAdmin.get("/orderAdd");
			return response;
		} catch (error) {}
	},
	getDeactiveUsers: () => {
		try {
			const response = axiosAdmin.get("/DeactiveUsers");
			return response;
		} catch (error) {}
	},
	getFeedbacks: () => {
		try {
			const response = axiosAdmin.get("/feedback");
			return response;
		} catch (error) {}
	},
	patchData: (id) => {
		try {
			const response = axiosAdmin.patch(`/orders${id}`);
			return response;
		} catch (error) {}
	},
};

export default productApis;
