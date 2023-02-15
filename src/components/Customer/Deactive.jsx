import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useEffect } from "react";
import productApis from "../../apis/Products/ProductsAPI";

function Deactive(props) {
	const notify = () => toast("Xóa rồi á!");

	const [user, setUser] = useState([]);

	const getDataUser = async () => {
		try {
			const res = await productApis.getUsers();
			console.log(res.data);
			return setUser(res.data);
		} catch (errors) {}
	};
	useEffect(() => {
		getDataUser();
	}, []);

	const deactiveUsers = (userID) => {
		const newProducts = [...user];
		const index = user.findIndex((item) => item.id === userID);
		newProducts.splice(index, 1);
		setUser(newProducts);
		console.log(newProducts);
	};
	return (
		<div>
			<table className="table col-11">
				<thead className="thead-dark">
					<tr>
						<th scope="col">Họ và tên</th>
						<th scope="col">Điện thoại</th>
						<th scope="col">email</th>
						<th scope="col">Địa chỉ</th>
						<th scope="col">Trạng thái</th>
						<th scope="col">Chức năng</th>
					</tr>
				</thead>
				<tbody>
					{user.map((item) => {
						if (item.status === "Đã tạm ngưng") {
							return (
								<tr>
									<td scope="col">{item.name}</td>
									<td scope="col">{item.phone}</td>
									<td scope="col">{item.email}</td>
									<td scope="col">{item.address}</td>
									<td scope="col">{item.status}</td>
									<td scope="col">
										<button
											className="btn btn-primary"
											onClick={() => {
												deactiveUsers(item.id);
												notify();
											}}
										>
											Xóa
										</button>
										<ToastContainer
											position="top-right"
											autoClose={1000}
											hideProgressBar={false}
											newestOnTop={false}
											closeOnClick
											rtl={false}
											pauseOnFocusLoss
											draggable
											pauseOnHover
											theme="dark"
										/>
									</td>
								</tr>
							);
						}
					})}
				</tbody>
			</table>
		</div>
	);
}

export default Deactive;
