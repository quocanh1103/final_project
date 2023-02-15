function FormatPrice({ price }) {
	return Intl.NumberFormat("vi-VE", {
		style: "currency",
		currency: "VND",
	}).format(price);
}

export default FormatPrice;
