import React from "react";
import "./index.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
	labels: ["Lợi nhuận", "Doanh thu", "Chi phí"],
	datasets: [
		{
			label: "",
			data: [14, 19, 3],
			backgroundColor: [
				"rgba(193, 64, 90, 0.881)",
				"rgb(234, 255, 0",
				"rgb(0, 187, 255)",
			],
			borderColor: [
				"rgba(255, 99, 132, 1)",
				"rgba(54, 162, 235, 1)",
				"rgba(255, 206, 86, 1)",
			],
			borderWidth: 1,
		},
	],
};

function Revenue(props) {
	return (
		<div>
			<header>
				<p className="text_head">
					<b>Doanh thu</b>
				</p>
			</header>
			<main className="container_revenue">
				<div>
					<div className="item_profit">
						<div className="icon_profit">
							<h3 className="text_h3_profit">Lợi nhuận</h3>
						</div>
						<div>
							<h4 className="title_h4_dash">THỰC TẾ : 70.000.000đ</h4>
							<h5 className="text_0">Dự kiến : 100.000.000đ</h5>
						</div>
					</div>
					<div className="item_revenue">
						<div className="icon_profit_1">
							<h3 className="text_h3_profit">Doanh thu</h3>
						</div>
						<div>
							<h4 className="title_h4_dash">THỰC TẾ : 100.000.000đ</h4>
							<h5 className="text_0">Dự kiến : 100.000.000đ</h5>
						</div>
					</div>
					<div className="item_cost">
						<div className="icon_profit_2">
							<h3 className="text_h3_cost">Chi phí</h3>
						</div>
						<div>
							<h4 className="title_h4_dash">VỐN : 200.000.000đ</h4>
							<h5 className="text_0">tổng chi phí : 30.000.000đ</h5>
						</div>
					</div>
				</div>
				<div className="chart_pie">
					<Pie data={data} />
				</div>
			</main>
		</div>
	);
}

export default Revenue;
