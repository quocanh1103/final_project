import queryString from "query-string";
import React, { useEffect, useState } from "react";
import CardApis from "../../../apis/cards/cardApis";
import Table from "react-bootstrap/Table";
import "./cart.css";
import UserApis from "../../../apis/Users/userApis";
import { ToastContainer, toast } from "react-toastify";
import ModalCheckout from "../modal/modalcheckout";

function CartPayment(props) {
  const [success, setSuccess] = useState(false);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [payment, setPayment] = useState("");
  const [name, setName] = useState("");
  const [count, setCount] = useState("");
  const [id, setId] = useState();
  const [index, setIndex] = useState();
  const deliver = "Chưa được vận chuyển";
  const status = "Chưa được xác nhận";
  function getTotal(carts) {
    let sub_total = 0;

    const sum_total = carts.map((value) => {
      return (sub_total +=
        parseInt(value.priceProduct) * parseInt(value.count));
    });

    setTotal(sub_total + parseInt(50000));
  }

  const getName = (carts) => {
    let name_product = "";
    const sum_name = carts.filter((value) => {
      return (name_product += value.nameProduct + ", ");
    });
    setName(name_product);
  };
  const getCount = (carts) => {
    let count_product = "";
    const sum_name = carts.filter((value) => {
      return (count_product += value.count + " ");
    });
    setCount(count_product);
  };
  // cart.flatMap;
  const getId = (carts) => {
    let id_product = "";
    const sum_name = carts.filter((value) => {
      return (id_product += value.idProduct + " ");
    });
    // console.log(id_product);
    setId(id_product);
  };
  console.log(index);
  useEffect(() => {
    const fetchData = async () => {
      if (sessionStorage.getItem("id_user")) {
        const params = {
          idUser: sessionStorage.getItem("id_user"),
        };

        const query = "?" + queryString.stringify(params);
        const response = await CardApis.getCart(query);

        setCart(response.data);
        getTotal(response.data);
        getName(response.data);
        getCount(response.data);
        getId(response.data);
      }
    };
    fetchData();
  }, []);

  const [user, setUser] = useState();

  useEffect(() => {
    const Data = async () => {
      const response = await UserApis.getUserId(
        sessionStorage.getItem("id_user")
      );
      setUser(response.data);
    };
    Data();
  }, []);

  const handleSubmitOrder = () => {
    const postData = async () => {
      const params = {
        idUser: sessionStorage.getItem("id_user"),
        nameUser: user.name,
        phone: user.phone,
        idProduct: id,
        total: total,
        nameProduct: name,
        count: count,
        address: user.address,
        deliver: deliver,
        status: status,
      };

      const response = await CardApis.postOrder(params);
    };
    const deleteData = async () => {
      for (let i = 0; i < cart.length; i++) {
        const response = await CardApis.deleteToCartOder(cart[i].id);
      }
    };
    postData();
    deleteData();
    setSuccess(true);
  };

  return (
    <>
      {success && <ModalCheckout />}
      <div className="payment">
        <h1>THANH TOÁN</h1>
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
                        <b>{value.priceProduct?.toLocaleString("en-US")}đ</b>
                      </span>
                    </div>
                  </td>
                  <td className="text">
                    <div>
                      <input disabled type="text" value={value.count} />
                    </div>
                  </td>
                  <td className="text">
                    <div>
                      <b>
                        {(
                          parseInt(value.priceProduct) * parseInt(value.count)
                        )?.toLocaleString("en-US")}
                        đ
                      </b>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>

          <div className="ship">
            <b>
              Chi phí vận chuyển:
              <span>{parseInt(50000)?.toLocaleString("en-US")}đ</span>
            </b>

            <b>
              Tổng:
              <span>{total?.toLocaleString("en-US")} đ</span>
            </b>
          </div>
        </Table>
        <h4>PHƯƠNG THỨC THANH TOÁN</h4>
        <div className="pay">
          <div className="pay-ship">
            <input
              type="radio"
              name="payment"
              value="visa"
              onClick={(e) => setPayment(e.target.value)}
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkvnhA88zOLNVliJlEDPlFHNz7gZ0CSXnk2lSJBn5oKyaqTEL6dxXWg3uPS7jDSs7WcRQ&usqp=CAU"
              alt=""
              srcset=""
            />
          </div>
          <div className="pay-ship-1">
            <input
              type="radio"
              name="payment"
              value="ShipCod"
              onClick={(e) => setPayment(e.target.value)}
            />
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>
          <div className="pay-ship-2">
            <input
              type="radio"
              name="payment"
              value="momo"
              onClick={(e) => setPayment(e.target.value)}
            />
            <img
              className="img2"
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
        </div>
        {payment ? (
          <button onClick={() => handleSubmitOrder()}>Thanh toán</button>
        ) : (
          <></>
        )}
      </div>
      <ToastContainer />
    </>
  );
}

export default CartPayment;
