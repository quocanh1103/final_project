import React from "react";
import { Link } from "react-router-dom";

function HeaderList(props) {
  return (
    <div>
      <div className="module-title">
        <div className="container-sl-pd">
          <h3>Danh mục sản phẩm</h3>

          <div className="row-category">
            <div className="category-box">
              <Link to="/more-new-collection">
                <img
                  src="https://noithattvp.vn/image/cache/catalog/2022-banner/ban-ghe-an-tvp-cr-400x400.png"
                  alt=""
                />
              </Link>
              <h3 className="h5">BỘ SƯU TẬP MỚI</h3>
            </div>
            <div className="category-box">
              <Link to="/more-ban-tra-ban-sofa">
                <img
                  src="https://noithattvp.vn/image/cache/catalog/2022-banner/ban-tra-ban-sofa-cr-400x400.png"
                  alt=""
                />
              </Link>
              <h3 className="h5">BÀN TRÀ, BÀN SOFA</h3>
            </div>
            <div className="category-box">
              <Link to="/more-sofa">
                <img
                  src="https://noithattvp.vn/image/cache/catalog/2022-banner/sofa-tvp-cr-400x400.png"
                  alt=""
                />
              </Link>
              <h3 className="h5">SOFA</h3>
            </div>
            <div className="category-box">
              <Link to="/more-van-phong">
                <img
                  src="https://noithattvp.vn/image/cache/catalog/2022-banner/thiet-ke-hinh-tron-05-cr-400x400.png"
                  alt=""
                />
              </Link>
              <h3 className="h5">GHẾ VĂN PHÒNG</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderList;
