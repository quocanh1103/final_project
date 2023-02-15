import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserApis from "../../apis/Users/userApis";
import Dropdown from "react-bootstrap/Dropdown";
import "./index.css";

function Name(props) {
  const [name, setName] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await UserApis.getUserId(
        sessionStorage.getItem("id_user")
      );
      setName(response.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {name.name}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/info">Thông tin cá nhân</Dropdown.Item>
          <Dropdown.Item href="/history">Lịch sử mua hàng</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default Name;
