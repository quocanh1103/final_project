import React, { useState, useEffect } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import CardCus from "./CardCus";
import productApis from "../../apis/products/ProductsAPI";
import SearchFormCus from "./SearchFormCus";

function Customer(props) {
  const [filter, setFilter] = useState({});

  const [users, setUsers] = useState([]);
  const [dataUsers, setdataUsers] = useState([]);

  const getDataUsers = async () => {
    try {
      const res = await productApis.getUsers();
      // console.log(res.data);
      return setdataUsers(res.data);
    } catch (errors) {}
  };
  useEffect(() => {
    getDataUsers();
  }, []);

  useEffect(() => {
    const getDataByName = async () => {
      try {
        const res = await productApis.getUsersByName(filter);
        return setUsers(res.data);
      } catch (errors) {}
    };
    getDataByName();
  }, [filter]);

  function handleFilterChange(newfilter) {
    console.log("New: ", newfilter);
    setFilter(newfilter.search);
  }

  return (
    <div>
      <header>
        <p className="text_head">
          <b>Khách hàng</b>
        </p>
      </header>
      <main className="main">
        <div>
          <ul id="item_menu_products">
            {/* <Link to="/admin/addCus">
							<li className="text_product">
								<em className="fa fa-pause"></em>Danh sách chờ
							</li>
						</Link> */}
            <Link to="/admin/deactive">
              <li className="text_product_1">
                <em className="fa fa-times-circle"></em>Ngưng hoạt động
              </li>
            </Link>
          </ul>
          <span className="line_products">
            ______________________________________________________________________________________________________________________________________________________________________________________________
          </span>
          <div className="search">
            <SearchFormCus onSubmit={handleFilterChange} />
          </div>
          <div className="container">
            <div className="row">
              {users.length > 0
                ? users.map((item) => {
                    if (item.status === "Đang hoạt động") {
                      <CardCus
                        props={item}
                        // key={item.id}
                        // deactiveUsers={deactiveUsers}
                      />;
                    }
                  })
                : dataUsers.map((item) => {
                    if (item.status === "Đang hoạt động") {
                      return (
                        <CardCus
                          props={item}
                          // key={item.id}
                          // deactiveUsers={deactiveUsers}
                        />
                      );
                    }
                  })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Customer;
