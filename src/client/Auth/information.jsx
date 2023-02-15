import "./index.css";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserApis from "../../apis/Users/userApis";
import { ToastContainer, toast } from "react-toastify";

function Information(props) {
  const [information, setInformation] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const Data = async () => {
      const res = await UserApis.getAll();
      setUser(res.data);
    };
    Data();
  }, []);
  console.log(user);

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [errorEmail, setEmailError] = useState(false);
  const [emailRegex, setEmailRegex] = useState(false);
  const [errorname, setNameError] = useState(false);
  const [errorPhone, setErrorphone] = useState(false);

  var idUsers = useSelector((state) => state.checklogin.idUser);
  useEffect(() => {
    const fetchData = async () => {
      const response = await UserApis.getUserId(idUsers);
      setInformation(response.data);
      setName(response.data.name);
      setPhone(response.data.phone);
      setEmail(response.data.email);
      setAddress(response.data.address);
    };
    fetchData();
  }, []);
  const [name, setName] = useState();

  console.log(name);
  console.log("info", information);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone || (findUser && findUser.email !== email)) {
      if (!name) {
        setNameError(true);
        setEmailError(false);
        setEmailRegex(false);
        setErrorphone(false);
        return;
      }
      if (!email) {
        setNameError(false);
        setEmailError(true);
        setEmailRegex(false);
        setErrorphone(false);
        return;
      }
      if (!phone || phone.length < 10 || phone.length > 11) {
        setNameError(false);
        setEmailError(false);
        setEmailRegex(false);
        setErrorphone(true);
        return;
      }

      if (findUser && findUser.email !== email) {
        console.log(findUser);
        console.log(email);
        setNameError(false);
        setEmailError(false);
        setEmailRegex(true);
        setErrorphone(false);
        return;
      } else {
        setNameError(false);
        setEmailError(false);
        setEmailRegex(false);
        setErrorphone(false);
      }
    } else {
      const fetchData = async () => {
        const params = {
          name: name,
          email: email,
          phone: phone,
          address: address,
        };
        const res = await UserApis.editUser(idUsers, params);
        setInformation(res.data);
        console.log(information);
      };
      fetchData();
      toast.success(" Cập nhập thông tin cá nhân thành công!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const findUser = user.find((value) => {
    return value.email === email;
  });

  return (
    <div className="contain">
      <div className="information">
        <form className="infoform" onSubmit={handleSubmit}>
          <h1 className="H1_login">THÔNG TIN CÁ NHÂN</h1>
          {errorname && (
            <span className="text-danger">* Vui lòng điền tên!</span>
          )}
          {errorEmail && (
            <span className="text-danger">* Vui lòng điền email!</span>
          )}
          {emailRegex && (
            <span className="text-danger">* Email đã tồn tại!</span>
          )}
          {errorPhone && (
            <span className="text-danger">
              * Vui lòng điền số điện thoai chính xác!
            </span>
          )}
          <div className="info">
            <label htmlFor="">Họ và tên : </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="info">
            <label htmlFor="">Điện thoại :</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="info">
            <label htmlFor="">Email :</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="info">
            <label htmlFor="">Địa chỉ :</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          {name == information.name &&
          phone == information.phone &&
          email == information.email &&
          address == information.address ? (
            <></>
          ) : (
            <button className="btninfo" type="submit">
              Cập Nhập
            </button>
          )}
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Information;
