import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import {
	ResponsiveContainer,
	LineChart,
	Line,
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from "recharts";
import productApis from "../../apis/Products/ProductsAPI";

function Dashboard(props) {
	const [product, setProduct] = useState([]);
	const [user, setUser] = useState([]);
	const [order, setOrder] = useState([]);

	const getDataUser = async () => {
		try {
			const res = await productApis.getUsers();
			console.log(res.data);
			return setUser(res.data);
		} catch (error) {}
	};
	useEffect(() => {
		getDataUser();
	}, []);

	const getProductapis = async () => {
		try {
			const res = await productApis.getProducts();
			return setProduct(res.data);
		} catch (error) {}
	};
	useEffect(() => {
		getProductapis();
	}, []);

	const getDataOrder = async () => {
		try {
			const res = await productApis.getOrders();
			return setOrder(res.data);
		} catch (error) {}
	};
	useEffect(() => {
		getDataOrder();
	}, []);

	const data = [
		{
			name: "Tháng 1",
			uv: 4000,
			pv: 2400,
			amt: 2400,
		},
		{
			name: "Tháng 2",
			uv: 3000,
			pv: 1398,
			amt: 2210,
		},
		{
			name: "Tháng 3",
			uv: 2000,
			pv: 9800,
			amt: 2290,
		},
		{
			name: "Tháng 4",
			uv: 2780,
			pv: 3908,
			amt: 2000,
		},
		{
			name: "Tháng 5",
			uv: 1890,
			pv: 4800,
			amt: 2181,
		},
		{
			name: "Tháng 6",
			uv: 2390,
			pv: 3800,
			amt: 2500,
		},
	];
	const newdata = [
		{ name: "Tháng 1", pv: 15, amt: 2400 },
		{ name: "Tháng 2", pv: 1398, amt: 2210 },
		{ name: "Tháng 3", pv: 9800, amt: 2290 },
		{ name: "Tháng 4", pv: 3908, amt: 2000 },
		{ name: "Tháng 5", pv: 4800, amt: 2181 },
		{ name: "Tháng 6", pv: 3800, amt: 2500 },
	];

	return (
		<div>
			<header>
				<p className="text_head">
					<b>Dashboard</b>
				</p>
			</header>
			<main className="main_dash">
				<div className="container_items">
					<div className="item_left">
						<Link to="/admin/customer">
							<div className="item_customer">
								<div className="icon_cus">
									<em className="fa fa-address-book"></em>
								</div>
								<div>
									<h4 className="title_h4_dash">TỔNG KHÁCH HÀNG</h4>
									<h5 className="text_0">{user.length} khách hàng</h5>
									<p className="line">---------------------</p>
									<p className="text_1">
										Tổng số khách hàng được quản lý.
									</p>
								</div>
							</div>
						</Link>
						<Link to="/admin/order">
							<div className="item_order">
								<div className="icon_order">
									<em className="fa fa-shopping-bag"></em>
								</div>
								<div>
									<h4 className="title_h4_dash">TỔNG ĐƠN HÀNG</h4>
									<h5 className="text_0">{order.length} Đơn hàng</h5>
									<p className="line">---------------------</p>
									<p className="text_1">Tổng số hóa đơn bán hàng.</p>
								</div>
							</div>
						</Link>
					</div>
					<div className="item_right">
						<Link to="/admin/products">
							<div className="item_products">
								<div className="icon_pro">
									<em className="fa fa-database"></em>
								</div>
								<div>
									<h4 className="title_h4_dash">TỔNG SẢN PHẨM</h4>
									<h5 className="text_0">{product.length} Sản phẩm</h5>
									<p className="line">---------------------</p>
									<p className="text_1">
										Tổng số sản phẩm được quản lý.
									</p>
								</div>
							</div>
						</Link>
						<Link to="/admin/feedback">
							<div className="item_warning">
								<div className="icon_warning">
									<em className="fa fa-comments"></em>
								</div>
								<div>
									<h4 className="title_h4_dash">ĐÁNH GIÁ</h4>
									<h5 className="text_0">2 Đánh giá</h5>
									<p className="line">---------------------</p>
									<p className="text_1">
										Các đánh giá của khách hàng.
									</p>
								</div>
							</div>
						</Link>
					</div>
				</div>
				<div className="chart_dash">
					<h3 className="text_chart_dash">
						Thống kê doanh thu 6 tháng 2022
					</h3>
					<span className="under_line"> </span>
					<BarChart
						width={500}
						height={300}
						data={data}
						margin={{
							top: 5,
							right: 30,
							left: 20,
							bottom: 5,
						}}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="pv" fill="#8884d8" />
						<Bar dataKey="uv" fill="#82ca9d" />
					</BarChart>
				</div>
			</main>
			<div className="chart_dash_2">
				<h3 className="text_chart_dash">Tổng đơn hàng trong 6 tháng</h3>
				<ResponsiveContainer className="chart" height={300}>
					<LineChart
						width={600}
						height={300}
						data={newdata}
						margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
					>
						<XAxis dataKey="name" />
						<YAxis />
						<CartesianGrid strokeDasharray="3 3" />
						<Tooltip />
						<Legend />
						<Line
							type="monotone"
							dataKey="pv"
							stroke="#8884d8"
							activeDot={{ r: 8 }}
						/>
						{/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}

export default Dashboard;
