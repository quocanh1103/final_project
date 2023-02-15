import React, { useState, useRef } from "react";

function SearchFormCus(props) {
	const { onSubmit } = props;
	const [searchCus, setSearchCus] = useState("");
	const typingRef = useRef(null);

	const handleSearchCus = (e) => {
		const values = e.target.value;
		setSearchCus(e.target.value);

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
				value={searchCus}
				onChange={handleSearchCus}
				placeholder="Tìm kiếm..."
			/>
		</>
	);
}

export default SearchFormCus;
