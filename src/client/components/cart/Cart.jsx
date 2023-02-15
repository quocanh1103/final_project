import React from "react";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";
import CardApis from "../../../apis/cards/cardApis";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartSlice } from "../Reducer/ReducerCart";
import Table from "react-bootstrap/Table";

function Cart(props) {
  let Post = useNavigate();
  //   const id_user = useSelector((state) => state.CartSlice.id_user);
  const id_user = useSelector((state) => state.reducercart.id_User);
  const [listcarts, setLiscarts] = useState([]);
  //listCart được lấy từ redux
  //   const listCart = useSelector((state) => state.Cart.listCart);
  const listcart = useSelector((state) => state.reducercart.listcart);

  const [cart, setCart] = useState([]);

  const [total, setTotal] = useState();

  const dispatch = useDispatch();

  const [loadRedux, setLoadRedux] = useState({
    idProduct: "",
    count: "",
  });
  console.log("list", listcart);
  const [loadAPI, setLoadAPI] = useState(false);

  useEffect(() => {
    const fetchDataRedux = () => {
      if (!sessionStorage.getItem("id_user")) {
        setCart(listcart);
        // getTotal(listcart);
      }
    };

    fetchDataRedux();
  }, [loadRedux]);

  useEffect(() => {
    const fetchData = async () => {
      if (sessionStorage.getItem("id_user")) {
        const params = {
          idUser: sessionStorage.getItem("id_user"),
        };

        const query = "?" + queryString.stringify(params);
        const response = await CardApis.getCart(query);

        setCart(response);

        // getTotal(response);
      }
    };

    fetchData();

    setLoadAPI(false);
  }, [loadAPI]);

  const handleDelete = (getUser, getProduct, getId) => {
    console.log("idUser: " + getUser + ", idProduct: " + getProduct);
    console.log("value.id", getId);

    if (sessionStorage.getItem("id_user")) {
      // user đã đăng nhập

      //Sau khi nhận được dữ liệu ở component con truyền lên thì sẽ gọi API xử lý dữ liệu
      const fetchDelete = async () => {
        const response = await CardApis.deleteToCart(getId);
      };

      fetchDelete();

      //Sau đó thay đổi state loadAPI và load lại hàm useEffect
      setLoadAPI(true);
      toast.success("Xóa sản phẩm thành công!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      // user chưa đăng nhập

      //Nếu không có phiên làm việc của Session User thì mình sẽ xử lý với Redux
      const data = {
        idProduct: getProduct,
        idUser: getUser,
      };

      //Đưa dữ liệu vào Redux
      dispatch(CartSlice.actions.deleteCard(data));
      toast.success("Xóa sản phẩm thành công!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      //set state loadRedux để nó load lại hàm useEffect để tiếp tục lấy dữ liệu từ redux
      setLoadRedux({
        idProduct: getProduct,
        count: "",
      });
    }
  };

  //Hàm này dùng để redirect đến page checkout
  const [redirect, setRedirect] = useState(false);

  const onCheckout = () => {
    if (!sessionStorage.getItem("id_user")) {
      // alertify.set("notifier", "position", "bottom-left");

      toast.error("Vui Lòng Kiểm Tra Lại Đăng Nhập!", {
        position: "top-right",
        autoClose: 1100,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    } else {
      let path = "/checkout";
      Post(path);
    }

    setRedirect(true);
  };

  const handlerDown = (getIdUser, getIdProduct, getCount, getId) => {
    if (getCount === 1) {
      return;
    }

    if (sessionStorage.getItem("id_user")) {
      const count = parseInt(getCount) - 1;
      console.log("id", getId);
      const fetchpatch = async () => {
        const params = {
          count: count,
        };
        const response = await CardApis.patchToCart(getId, params);
      };
      fetchpatch();
      setLoadAPI(true);
    } else {
      if (getCount === 1) {
        return;
      }

      const updateCount = parseInt(getCount) - 1;
      const data = {
        idProduct: getIdProduct,
        idUser: getIdUser,
        count: updateCount,
      };

      // const onUpdateCount = (getIdUser, getIdProduct, updateCount);
      dispatch(CartSlice.actions.updateCard(data));
      setLoadRedux({
        idProduct: "",
        count: updateCount,
      });
    }
  };

  const handlerUp = (getIdUser, getIdProduct, getCount, getId) => {
    if (sessionStorage.getItem("id_user")) {
      const count = parseInt(getCount) + 1;
      console.log("id", getId);
      const fetchpatch = async () => {
        const params = {
          count: count,
        };
        const response = await CardApis.patchToCart(getId, params);
      };
      fetchpatch();
      setLoadAPI(true);
    } else {
      const updateCount = parseInt(getCount) + 1;
      const data = {
        idProduct: getIdProduct,
        idUser: getIdUser,
        count: updateCount,
      };
      console.log("số lượng:", updateCount);
      dispatch(CartSlice.actions.updateCard(data));
      setLoadRedux({
        idProduct: "",
        count: updateCount,
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (sessionStorage.getItem("id_user")) {
        const params = {
          idUser: sessionStorage.getItem("id_user"),
        };

        const query = "?" + queryString.stringify(params);

        // console.log(query);

        const response = await CardApis.getCart(query);

        setCart(response.data);
      }
    };

    fetchData();

    setLoadAPI(false);
  }, [loadAPI]);

  console.log("kết quả", cart);
  return (
    <>
      <div className="cart">
        <h1>GIỎ HÀNG</h1>
        {cart.length > 0 ? (
          <>
            <Table>
              <thead>
                <tr>
                  <th>
                    <strong>ẢNH</strong>
                  </th>
                  <th>
                    <strong>TÊN</strong>
                  </th>
                  <th>
                    <strong>GIÁ</strong>
                  </th>
                  <th>
                    <strong>SỐ LƯỢNG</strong>
                  </th>
                  <th>
                    <strong>TỔNG</strong>
                  </th>
                  <th>
                    <strong></strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart &&
                  cart.map((value, index) => (
                    <tr key={index}>
                      <td>
                        <div>
                          <img src={value.img} alt="" />
                        </div>
                      </td>
                      <td className="text">
                        <div>
                          <span>
                            <b>{value.nameProduct}</b>
                          </span>
                        </div>
                      </td>
                      <td className="text">
                        <div>
                          <span>
                            <b>
                              {value.priceProduct?.toLocaleString("en-US")}đ
                            </b>
                          </span>
                        </div>
                      </td>
                      <td className="text">
                        <div>
                          <button
                            value="minus"
                            className="dec-btn p-0"
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              handlerDown(
                                value.idUser,
                                value.idProduct,
                                value.count,
                                value.id
                              )
                            }
                          >
                            <i class="fa-solid fa-minus"></i>
                          </button>
                          <input disabled type="text" value={value.count} />
                          <button
                            value="plus"
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              handlerUp(
                                value.idUser,
                                value.idProduct,
                                value.count,
                                value.id
                              )
                            }
                          >
                            <i class="fa-solid fa-plus"></i>
                          </button>
                        </div>
                      </td>
                      <td className="text">
                        <div>
                          <b>
                            {(
                              parseInt(value.priceProduct) *
                              parseInt(value.count)
                            )?.toLocaleString("en-US")}
                            đ
                          </b>
                        </div>
                      </td>
                      <td className="text">
                        <div>
                          <a
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              handleDelete(
                                value.idUser,
                                value.idProduct,
                                value.id
                              )
                            }
                          >
                            <i class="fa-solid fa-trash-can"></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
            <span className="btn btn-outline-dark btn-sm" onClick={onCheckout}>
              <b>Mua Ngay</b>
              <i className="fas fa-long-arrow-alt-right ml-2"></i>
            </span>
          </>
        ) : (
          <>
            <h2>Giỏ hàng không có sản phẩm nào</h2>
          </>
        )}
      </div>
      <ToastContainer />
    </>
  );
}

export default Cart;
