import React from "react";
import PropTypes from "prop-types";
import productApis from "../../apis/Products/ProductsAPI";

function CardCus({ props }) {
	const handleClickDeactive = (value) => {
		const postDataUser = async () => {
			try {
				const res = await productApis.postUserDeactive(value);
				return res.data;
			} catch (error) {}
		};
		postDataUser();
	};

	return (
		<div className="card col-4 mx-3 my-2" style={{ width: "260px" }}>
			<img
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtvLRR04AUlINV7glMclAp_T6sL3kmYI9cuRyCI7CBytLJRGjnSX8wTZCM-39e_kT8tAY&usqp=CAU"
				className="card-img-top"
				alt=""
			/>
			<div className="card-body">
				<p className="card-text">
					<b> Họ và Tên</b> : {props.name}
				</p>
				<p className="card-text">
					<b>Điện thoại </b>: {props.phone}
				</p>
				<p className="card-text">
					<b>Email </b>: {props.email}
				</p>
				<p className="card-text">
					<b>Địa chỉ </b>: {props.address}
				</p>
				<button className="btn btn-primary" onClick={handleClickDeactive}>
					Tạm ngưng
				</button>
			</div>
		</div>
	);
}

export default CardCus;
