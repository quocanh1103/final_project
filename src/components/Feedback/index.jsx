import React, { useEffect, useState } from "react";
import productApis from "../../apis/products/ProductsAPI";
import "./index.css";

function Feedback(props) {
  const [data, setData] = useState([]);
  const getDataFB = async () => {
    try {
      const res = await productApis.getFeedbacks();
      return setData(res.data);
    } catch (error) {}
  };
  useEffect(() => {
    getDataFB();
  }, []);

  return (
    <div>
      <header>
        <p className="text_head">
          <b>Đánh giá</b>
        </p>
      </header>
      <main className="main">
        {data.map((item) => {
          return (
            <div className="container">
              <div className="row col-2">
                <h5>{item.name}</h5>
                <img
                  src={item.image}
                  alt=""
                  className="img-fluid"
                  width={120}
                />
                <br />
                <label htmlFor="">Nhận xét: {item.comment}</label>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default Feedback;
