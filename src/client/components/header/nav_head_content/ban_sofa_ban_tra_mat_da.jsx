import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productApis from "../../../../apis/products/productApis";

function BansofaBantraMatda(props) {
  const [products, setProducts] = useState([]);

  var category = "banghecafe";
  const fetchData = async () => {
    try {
      const response = await productApis.getProductByCateAll(category);
      setProducts(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container">
      <div className="ban_sofa_ban_tra_mat_da">
        <p>
          <h1>BÀN SOFA, BÀN TRÀ MẶT ĐÁ</h1>
        </p>

        <p>
          <strong>Bàn sofa, bàn trà mặt đá</strong>
        </p>

        <p>
          Đây là mẫu bàn sofa được yêu thích nhất từ năm 2020. Với mặt bàn là đá
          Marble, đá cẩm thạch hay đá phiến ceramic. Kết hợp cùng với các kiểu
          chân bàn làm từ chất liệu: gỗ, sắt, inox. Bàn sofa, bàn trà mặt đá đem
          lại sự hiện đại khi kết hợp với các kiều sofa băng , sofa góc L <br />
          Ngoài ra chất liệu đá giúp bạn lau chùi dễ dàng và chống thấm nước.
        </p>
      </div>
      <div className="ban_sofa_ban_tra_mat_da_product">
        <div className="row">
          {products.map((value) => (
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
        </div>
      </div>
    </div>
  );
}

export default BansofaBantraMatda;
