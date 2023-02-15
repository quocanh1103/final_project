import React from "react";
import "./index.css";
import SortProduct from "../components/sort/SortProduct";
import { useState, useEffect } from "react";
import productApis from "../../apis/products/productApis";
import { Link } from "react-router-dom";
import queryString from "query-string";

function NewCollectionMore() {
  const [sort, setSort] = useState("default");
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [productFilter, setProductFilter] = useState([]);

  var categoryy = "new_collection";
  const fetchData = async () => {
    try {
      const response = await productApis.getProductByCateAll(categoryy);
      setProducts(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

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
  console.log(filter);
  console.log(typeof filter);

  useEffect(() => {
    if (filter.length > 0) {
      const fetchData = async () => {
        try {
          const params = {
            category: categoryy,
            color: filter,
          };
          console.log("category", categoryy);
          const query = "?" + queryString.stringify(params);
          const response = await productApis.getProductByCateAllFilter(query);
          console.log("res", response);
          setProductFilter(response.data);
        } catch (error) {}
      };

      fetchData();
    }
  }, [filter]);

  return (
    <div className="more-newcollection">
      <div className="module-title-3">
        <h2>BỘ SƯU TẬP MỚI</h2>
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
            <button value="Vàng" onClick={(e) => setFilter(e.target.value)}>
              Vàng
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
export default NewCollectionMore;
