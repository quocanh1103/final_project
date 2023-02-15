import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Head(props) {
	return (
		<div className="container_head d-flex justify-content-end">
			<div className="Log_out">
				<Link to="/login">
					Log out<em className="fa fa-bullseye"></em>
				</Link>
			</div>
		</div>
	);
}

export default Head;
