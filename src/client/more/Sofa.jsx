import React from "react";
import SortProduct from "../components/sort/SortProduct";
import { useState, useEffect } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import productApis from "../../apis/products/productApis";
import queryString from "query-string";

function SofaMore(props) {
  const [sort, setSort] = useState("default");
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [productFilter, setProductFilter] = useState([]);
  var category = "sofa";
  const fetchData = async () => {
    try {
      const response = await productApis.getProductByCateAll(category);
      setProducts(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (filter.length > 0) {
      const fetchData = async () => {
        try {
          const params = {
            category: category,
            color: filter,
          };
          const query = queryString.stringify(params);
          const newQuery = "?" + query;
          const response = await productApis.getProductByCateAllFilter(
            newQuery
          );
          console.log("res", response);
          setProductFilter(response.data);
        } catch (error) {}
      };

      fetchData();
    }
  }, [filter]);

  const handlerChangeSort = (value) => {
    console.log("Value: ", value);

    setSort(value);
  };

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
  if (sort === "DownToUp") {
    productFilter.sort((a, b) => {
      return a.pricenew - b.pricenew;
    });
  } else if (sort === "UpToDown") {
    productFilter.sort((a, b) => {
      return b.pricenew - a.pricenew;
    });
  } else if (sort === "NameUpToDown") {
    productFilter.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  } else if (sort === "NameDownToUp") {
    productFilter.sort((a, b) => {
      return b.name.localeCompare(a.name);
    });
  }
  return (
    <div className="more-sofa">
      <div className="module-title-3">
        <h2>SOFA</h2>
        <SortProduct handlerChangeSort={handlerChangeSort} />

        <div className="bot-2"></div>
      </div>

      <div className="row-sum">
        <div>
          <h5 className="text-filter">MÀU SẮC</h5>
          <div className="row-button">
            <button value="" onClick={(e) => setFilter([])}>
              Tất cả
            </button>
            <button value="Trắng" onClick={(e) => setFilter(e.target.value)}>
              Trắng
            </button>
            <button value="Đen" onClick={(e) => setFilter(e.target.value)}>
              Đen
            </button>
            <button value="Xám" onClick={(e) => setFilter(e.target.value)}>
              Xám
            </button>
          </div>
        </div>
        <div className="row">
          {filter.length > 0 ? (
            <>
              {productFilter.length > 0
                ? productFilter.map((value) => (
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
                  ))
                : products.map((value) => (
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
            </>
          ) : (
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
                      <span className="">đ</span>
                    </span>
                    <span className="price-old">
                      {value.priceold.toLocaleString("en-US")}
                      <span className="">đ</span>
                    </span>
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default SofaMore;
