import React, { createContext } from "react";
import "./index.css";
import NewCollection from "./nav_head/new_collecttions";
import MainSlide from "../slideshow/main_slide";
import { NavDropdown } from "react-bootstrap";
import Kitchen from "./nav_head/kitchen";
import Lounge from "./nav_head/lounge";
import Bedroom from "./nav_head/bedroom";
import Cafeshop from "./nav_head/shopcafe";
import Office from "./nav_head/office";
import Promotion from "./nav_head/promotion";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginLink from "../../Auth/Login";
import Logout from "../../Auth/Logout";
import SearchProduct from "../content/search/SearchProduct";
import productApis from "../../../apis/products/productApis";
import { CheckLoginSlice } from "../Reducer/checklogin/CheckLogin";
import { CartSlice } from "../Reducer/ReducerCart";
import Name from "../../Auth/Name";
import { Link } from "react-router-dom";
import CardApis from "../../../apis/cards/cardApis";
import queryString from "query-string";

function Header(props) {
  const [filter, setFilter] = useState(false);
  const [filterr, setFilterr] = useState([]);
  const dispatch = useDispatch();

  if (sessionStorage.getItem("id_user")) {
    dispatch(CheckLoginSlice.actions.addId(sessionStorage.getItem("id_user")));
  } else {
    //Đưa idTemp vào Redux temp để tạm lưu trữ
    sessionStorage.setItem("id_temp", "bao99");
    dispatch(CartSlice.actions.addUser(sessionStorage.getItem("id_temp")));
  }
  var idUsers = useSelector((state) => state.checklogin.idUser);
  console.log("id", idUsers);
  const [loginUser, setLoginUser] = useState(false);
  const [nameUser, setNameUser] = useState(false);

  useEffect(() => {
    if (!idUsers) {
      setLoginUser(false);
      setNameUser(false);
    } else {
      setLoginUser(true);
      setNameUser(true);
    }
  }, [idUsers]);

  function handleFiltersChange(newFilters) {
    console.log("new filter", newFilters);
    setFilter(newFilters);
  }

  useEffect(() => {
    const Fechdata = async () => {
      try {
        const respone = await productApis.searchProductByName(filter);
        if (!filter) {
          console.log("không có giá trị");
          setFilterr(false);
        } else {
          // setFilter(respone.data);
          console.log("kết quả search ", respone.data);

          setFilterr(respone.data);
        }
      } catch (error) {}
    };

    Fechdata();
  }, [filter]);

  const [length, setLength] = useState([]);
  useEffect(() => {
    const FechDataLength = async () => {
      const params = {
        idUser: idUsers,
      };
      const query = "?" + queryString.stringify(params);
      try {
        const res = await CardApis.getCart(query);
        setLength(res.data);
      } catch (err) {}
    };
    // FechDataLength();
  }, []);

  return (
    <div>
      <div className="header-main">
        <div className="row-items">
          <div>
            <Link to="/">
              <img src="https://noithattvp.vn/image/cache/catalog/1-san-pham-line-moi/logo-noi-that-moi-t10-mau-tron-01-450x140.jpg" />
            </Link>
          </div>
          <div>
            <SearchProduct onSubmit={handleFiltersChange} />
            {filter ? (
              <div className="search-items">
                {filterr.length > 0 ? (
                  filterr.map((value) => {
                    return (
                      <div
                        className="search-items-child"
                        id={value.id}
                        key={value.id}
                      >
                        <div className="img-product">
                          <a href={"/cardbuy/" + value.id}>
                            <img src={value.image} alt="" />
                          </a>
                        </div>
                        <a href={"/cardbuy/" + value.id}>
                          <p className="value-name"> {value.name}</p>
                        </a>
                        <p>
                          <a href={"/cardbuy/" + value.id}>
                            <b>{value.pricenew?.toLocaleString("en-US")}đ</b>
                          </a>
                        </p>
                      </div>
                    );
                  })
                ) : (
                  <div className="search-items-child">Không có sản phẩm</div>
                )}
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="header-content">
            <div>
              <img
                src="https://noithattvp.vn/image/cache/catalog/hotline-noithattvp-290x120.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="user">
            {nameUser ? <Name /> : ""}
            {loginUser ? <Logout /> : <LoginLink />}
          </div>
          <div className="cart">
            <Link to="/carts">
              <i className="fa-solid fa-cart-shopping"></i>
              {/* <span className="count">{length.length}</span> */}
            </Link>
          </div>
        </div>
        <div className="nav-head">
          <div className="topnav">
            <NavDropdown
              title="New Collection"
              id="nothing"
              renderMenuOnMount={true}
            >
              <div className="drop">
                <NewCollection />
              </div>
            </NavDropdown>
            <NavDropdown
              title="PHÒNG BẾP"
              id="nothing"
              renderMenuOnMount={true}
            >
              <Kitchen />
            </NavDropdown>
            <NavDropdown
              title="PHÒNG KHÁCH"
              id="nothing"
              renderMenuOnMount={true}
            >
              <Lounge />
            </NavDropdown>
            <NavDropdown
              title="PHÒNG NGỦ"
              id="nothing"
              renderMenuOnMount={true}
            >
              <Bedroom />
            </NavDropdown>
            <NavDropdown
              title="SHOP CAFE VÀ BAR"
              id="nothing"
              renderMenuOnMount={true}
            >
              <Cafeshop />
            </NavDropdown>
            <NavDropdown
              title="SÂN VƯỜN, NGOÀI TRỜI"
              id="nothing"
              renderMenuOnMount={true}
            ></NavDropdown>
            <NavDropdown
              title="VĂN PHÒNG"
              id="nothing"
              renderMenuOnMount={true}
            >
              <Office />
            </NavDropdown>
            <NavDropdown
              title="KHUYẾN MÃI"
              id="nothing"
              renderMenuOnMount={true}
            >
              <Promotion />
            </NavDropdown>
            <NavDropdown
              title="TIN TỨC"
              id="nothing"
              renderMenuOnMount={true}
            ></NavDropdown>
          </div>
        </div>
        <div>
          <MainSlide />
        </div>
      </div>
    </div>
  );
}

export default Header;
