import React from "react";
import productApis from "../../../../apis/products/productApis";
import { useState, useEffect } from "react";

function SearchResults(props) {
  //   const [filterr, setFilterr] = useState([]);

  //   useEffect(() => {
  //     const Fechdata = async () => {
  //       try {
  //         const respone = await productApis.searchProductByName(filter);
  //         if (!filter) {
  //           console.log("không có giá trị");
  //           setFilterr(false);
  //         } else {
  //           console.log("kết quả search ", respone.data);

  //           setFilterr(respone.data);
  //         }
  //       } catch (error) {}
  //     };

  //     Fechdata();
  //   }, []);

  return (
    <>
      <h1>Tìm Kiếm -</h1>
      <h5>Điều kiện tìm</h5>
      <h6>Sản phẩm thỏa mản các điều kiện tìm kiếm</h6>
    </>
  );
}

export default SearchResults;
