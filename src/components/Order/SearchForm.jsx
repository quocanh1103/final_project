import React, { useState, useRef } from "react";

function SearchFormCus(props) {
	const { onSubmit } = props;
	const [searchOrders, setSearchOrders] = useState("");
	const typingRef = useRef(null);

	const handleSearchOrder = (e) => {
		const values = e.target.value;
		setSearchOrders(e.target.value);

		if (!onSubmit) return;

		if (typingRef.current) {
			clearTimeout(typingRef.current);
		}
		typingRef.current = setTimeout(() => {
			const formValues = {
				search: values,
			};
			onSubmit(formValues);
		}, 500);
	};
	return (
		<>
			<input
				type="text"
				name=""
				id="inp_search"
				value={searchOrders}
				onChange={handleSearchOrder}
				placeholder="Tìm kiếm..."
			/>
		</>
	);
}

export default SearchFormCus;
