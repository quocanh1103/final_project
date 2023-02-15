import React, { useState, useRef } from "react";

function SearchForm(props) {
	const { onSubmit } = props;
	const [search, setSearch] = useState("");
	const typingRef = useRef(null);

	const handleChangeSearch = (e) => {
		const values = e.target.value;
		setSearch(e.target.value);

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
				value={search}
				onChange={handleChangeSearch}
				placeholder="Tìm kiếm..."
			/>
		</>
	);
}

export default SearchForm;
