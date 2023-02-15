import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productApis from "../../apis/products/ProductsAPI";
import SearchForm from "../Products/SearchForm";
import { Status } from "./CardItem";

import "./index.css";

function Order(props) {
	const [newStatus, setNewStatus] = useState("Đang giao");
	const handleChangeStatus = () => {
		switch (newStatus) {
			case "Đang giao":
				setNewStatus(Status.DONE);
				break;
			default:
				break;
		}
	};
	const [orders, setOrders] = useState([]);
	const [dataOrder, setDataOrder] = useState([]);
	const [filter, setFilter] = useState({});

	const getDataOrder = async () => {
		try {
			const res = await productApis.getOrders(filter);
			console.log(res.data);
			return setOrders(res.data);
		} catch (error) {}
	};

	useEffect(() => {
		getDataOrder();
	}, [filter]);

	useEffect(() => {
		const getDataByName = async () => {
			try {
				const res = await productApis.getOrdersByName();
				return setDataOrder(res.data);
			} catch (errors) {}
		};
		getDataByName();
	}, []);

	function handleFilterChange(newfilter) {
		console.log("New: ", newfilter);
		setFilter(newfilter.search);
	}

	return (
		<div className="col-12">
			<header className="col-12">
				<p className="text_head">
					<b>Đơn hàng</b>
				</p>
			</header>
			<main className="main">
				<div>
					<ul id="item_menu_order">
						<Link to="/admin/addOrder">
							<li className="text_product">
								<em className="fa fa-pause"></em>Danh sách chờ
							</li>
						</Link>
						<li className="text_order_1">
							<em className="fa fa-trash"></em>Xóa tất cả đơn hàng
						</li>
					</ul>
					<span className="line_order">
						______________________________________________________________________________________________________________________________________________________________________________________________
					</span>
					<div className="search">
						<SearchForm onSubmit={handleFilterChange} />
					</div>
				</div>
				<table class="table w-100 col-11">
					<thead className="table-dark">
						<tr>
							<th>Khách hàng</th>
							<th>Đơn hàng</th>
							<th>Số lượng</th>
							<th>Tổng tiền</th>
							<th>Tình trạng</th>
							<th>Vận chuyển</th>
							<th>Chức năng</th>
						</tr>
					</thead>
					<tbody>
						{orders.length > 0
							? orders.map((item) => {
									if (
										item.status === "Đã xác nhận" &&
										item.deliver === "Đang giao"
									) {
										return (
											<tr>
												<td>{item.nameUser}</td>
												<td>{item.nameProduct}</td>
												<td>{item.count}</td>
												<td>{item.total}</td>
												<td>{item.status}</td>
												<td>{newStatus}</td>
												<td className="align-middle">
													<button
														className="btn btn-success w-100"
														onClick={handleChangeStatus}
													>
														Cập nhật
													</button>
												</td>
											</tr>
										);
									}
							  })
							: dataOrder.map((item) => {
									if (
										item.status === "Đã xác nhận" &&
										item.deliver === "Đang giao"
									) {
										return (
											<tr>
												<td>{item.nameUser}</td>
												<td>{item.nameProduct}</td>
												<td>{item.count}</td>
												<td>{item.total}</td>
												<td>{item.status}</td>
												<td>{newStatus}</td>
												<td className="align-middle">
													<button
														className="btn btn-success w-100"
														onClick={handleChangeStatus}
													>
														Cập nhật
													</button>
												</td>
											</tr>
										);
									}
							  })}
					</tbody>
				</table>
			</main>
		</div>
	);
}

export default Order;
