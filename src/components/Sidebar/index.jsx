import React from "react";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

function Sidebar(props) {
	return (
		<div className="sidebar">
			<Link to="/admin/info">
				<div className="header_sidebar">
					<img
						id="img_sidebar"
						src="https://img.bleacherreport.net/img/images/photos/002/112/495/hi-res-159596853_crop_north.jpg?1358786250&w=3072&h=2048"
						alt="Messi"
					/>
					<h3 className="sidebar_name">Nguyễn Quốc Anh</h3>
					<h5 className="h5_sidebar">Welcome</h5>
					<p className="sidebar_line">------------------------</p>
				</div>
			</Link>
			<nav id="menu">
				<ul>
					<Link to="/admin/dash">
						<li className="list_menu">
							<em className="fa fa-tachometer"></em>Dashboard
						</li>
					</Link>
					<Link to="/admin/customer">
						<li className="list_menu">
							<em className="fa fa-user"></em>Customer
						</li>
					</Link>
					<Link to="/admin/products">
						{" "}
						<li className="list_menu">
							<em className="fa fa-product-hunt"></em>Product
						</li>
					</Link>
					<Link to="/admin/order">
						<li className="list_menu">
							<em className="fa fa-envelope-open"></em>Order
						</li>
					</Link>
					<Link to="/admin/revenue">
						<li className="list_menu">
							<em className="fa fa-usd"></em>Revenue
						</li>
					</Link>
					<Link to="/admin/feedback">
						<li className="list_menu">
							<em className="fa fa-commenting"></em>Feedback
						</li>
					</Link>
				</ul>
			</nav>
		</div>
	);
}

export default Sidebar;
