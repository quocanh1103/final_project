import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productApis from "../../../../apis/products/productApis";

function BanGheAnTanCoDien(props) {
  const [products, setProducts] = useState([]);

  var category = "banghecafe";
  const fetchData = async () => {
    try {
      const response = await productApis.getProductByCateAll(category);
      setProducts(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>BÀN GHẾ ĂN TÂN CỔ ĐIỂN</h1>
      <div className="ban_ghe_an_tan_co_dien_product">
        <div className="row">
          {products.map((value) => (
            <div className="row-img" id={value.id} key={value.id}>
              <div className="image">
                <Link to={"/cardbuy/" + value.id}>
                  <img src={value.image} alt="" />
                </Link>
              </div>
              <div className="caption">
                <Link to={"/cardbuy/" + value.id}>
                  <h5>{value.name}</h5>
                </Link>
                <p className="price">
                  <span className="price-new">
                    {value.pricenew.toLocaleString("en-US")}
                    <span className="">đ</span>
                  </span>
                  <span className="price-old">
                    {value.priceold.toLocaleString("en-US")}
                    <span className="">đ</span>
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BanGheAnTanCoDien;
