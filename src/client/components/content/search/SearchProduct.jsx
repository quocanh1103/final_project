import React, { useRef } from "react";
import { useState } from "react";

const SearchProduct = (props) => {
  const { onSubmit } = props;
  const [search, setSearch] = useState("");
  const typingTimeoutRef = useRef(null);
  const onChangeText = (e) => {
    const value = e.target.value;

    setSearch(value);

    if (!onSubmit) return;

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      // const formValues = {
      //   search: value,
      // };
      onSubmit(value);
    }, 200);
  };

  return (
    <>
      <form className="search-form">
        <input
          type="search"
          placeholder="Tìm kiếm sản phẩm"
          className="search-field"
          autoComplete="off"
          onChange={onChangeText}
          value={search}
        ></input>
        {/* <a href="/search-results">
          <span
            type="submit"
            className="search-submit"
            placeholder=""
            value="tìm kiếm"
          ></span>
        </a> */}
      </form>
    </>
  );
};

export default SearchProduct;
