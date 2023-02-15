import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productApis from "../../../../apis/products/productApis";

function BansofaBantraMatkinh(props) {
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
      <div className="ban_sofa_ban_tra_mat_kinh">
        <p>
          <h1>BÀN SOFA, BÀN TRÀ MẶT KÍNH</h1>
        </p>

        <p>
          <strong>Bàn sofa, bàn trà mặt kính</strong>
        </p>

        <p>
          Bàn sofa, bàn trà mặt đá Bàn sofa, bàn trà tân cổ điển BÀN SOFA, BÀN
          TRÀ MẶT KÍNH Bàn sofa, bàn trà mặt kính Nhắc đến bàn sofa không thể
          không nhắc đến bàn sofa, bàn trà mặt kính. Thiết kế vô cùng hiện đại
          tôn lên sự sang trọng cho ngôi nhà. Thay bì những mẫu bàn sofa kết hợp
          giữa kính và gỗ như trước đây, thì ngay nay những mẫu bàn sofa kết hợp
          giữa kính và sắt hay inox cũng được khách hàng yêu thích lựa chọn
          <br /> Nội thất TVP chuyên sản xuất mẫu bàn sofa mặt kính đẹp, hiện
          đại với nhiều kích thước khác nhau cho khách lựa chọn
        </p>
      </div>
      <div className="ban_sofa_ban_tra_mat_kinh_product">
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

export default BansofaBantraMatkinh;
