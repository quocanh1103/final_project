import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserApis from "../../../apis/Users/userApis";
import ModalCheckout from "../modal/modalcheckout";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Checkout(props) {
  let Post = useNavigate();
  var idUsers = useSelector((state) => state.checklogin.idUser);
  const [address, setAddress] = useState("");
  const [information, setInformation] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const params = {
        id: idUsers,
      };
      const queryy = queryString.stringify(params);
      const response = await UserApis.getUserIdCheckout(queryy);
      setInformation(response.data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const Data = async () => {
      const response = await UserApis.getUserId(idUsers);

      setAddress(response.data.address);
    };
    Data();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (address) {
      const Fetchdata = async () => {
        const params = {
          address: address,
        };
        const response = await UserApis.editUser(idUsers, params);
      };

      Fetchdata();
      let path = "/payment";
      Post(path);
    } else {
      toast.error("Vui lòng điền địa chỉ!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
  };

  return (
    <>
      {information &&
        information.map((value) => {
          return (
            <div key={value.id} className="checkout">
              <form onSubmit={handleSubmit}>
                <h1>THÔNG TIN GIAO HÀNG</h1>
                <div className="form-check">
                  <span htmlFor="">Họ và tên :</span>
                  <p>{value.name}</p>
                </div>
                <div className="form-check">
                  <span htmlFor="">Điện thoại :</span>
                  <p>{value.phone}</p>
                </div>
                <div className="form-check">
                  <span htmlFor="">Email :</span>
                  <p>{value.email}</p>
                </div>
                <div className="form-check">
                  <span htmlFor="">Địa chỉ :</span>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                {address ? <button type="submit"> Xác Nhận</button> : <></>}
              </form>
            </div>
          );
        })}
    </>
  );
}

export default Checkout;
