import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productApis from "../../../../apis/products/productApis";

function Sofa(props) {
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
      <div className="sofa">
        <p>
          <h1>SOFA</h1>
        </p>

        <p>
          <strong>Bàn sofa, bàn trà mặt kính</strong>
        </p>

        <p>
          CÔNG TY CP XD TM DV THÀNH VẠN PHÁT VỚI THƯƠNG HIỆU NỘI THẤT TVP đã và
          đang trở nên quen thuộc với tổ ẩm của nhiều gia đình tại Tp. Hồ Chí
          Minh nói riêng và các tỉnh thành phía Nam nói chúng.Mỗi sản phẩm Sofa
          của nội thất TVP đều là những mẫu thiết kế mang tới nguồn cảm hứng
          tươi sáng, ấm áp cho không gian đầy sáng tạo và độc đáo <br /> NỘI
          THẤT TVP chuyên sản xuất và phân phối các sản phẩm SOFA chất lượng,
          cao cấp phù hợp tới từng nhu cầu của khách hàng. MUA SOFA ĐẾN SIÊU THỊ
          NỘI THẤT TVP
        </p>
      </div>
      <div className="sofa_product">
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

export default Sofa;
