import React from "react";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import productApis from "../../apis/products/productApis";

function Carditem({ type, sort }) {
  var category = "new_collection";
  if (type) {
    category = type;
  }
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    try {
      const response = await productApis.getProductByCate(category);
      setProducts(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (sort === "DownToUp") {
    products.sort((a, b) => {
      return a.pricenew - b.pricenew;
    });
  } else if (sort === "UpToDown") {
    products.sort((a, b) => {
      return b.pricenew - a.pricenew;
    });
  } else if (sort === "NameUpToDown") {
    products.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  } else if (sort === "NameDownToUp") {
    products.sort((a, b) => {
      return b.name.localeCompare(a.name);
    });
  }
  return (
    <>
      {products &&
        products.map((value) => (
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
                  <span className="unit">đ</span>
                </span>
                <span className="price-old">
                  {value.priceold.toLocaleString("en-US")}
                  <span className="unit-old">đ</span>
                </span>
              </p>
            </div>
          </div>
        ))}
    </>
  );
}

export default Carditem;
