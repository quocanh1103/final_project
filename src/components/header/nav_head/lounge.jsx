import React from "react";

function Lounge() {
  return (
    <div className="lounge">
      <ul>
        <li>
          <div className="title">
            <a href="/ban_tra_sofa">
              <h5>BÀN TRÀ, BÀN SOFA</h5>
            </a>
          </div>
        </li>
        <li className="list">
          <div className="col-1">
            <a href="/ban_sofa_thong_minh">Bàn sofa thông minh</a>
          </div>
          <div className="col-1">
            <a href="/ban_sofa_ban_tra_mat_kinh">Bàn sofa, bàn trà mặt kính</a>
          </div>
          <div className="col-1">
            <a href="/ban_sofa_ban_tra_mat_da">Bàn sofa, bàn trà mặt đá</a>
          </div>
          <div className="col-1">
            <a href="/ban_sofa_ban_tra_tan_co_dien">
              Bàn sofa, bàn trà tân cỗ điển
            </a>
          </div>
        </li>
        <li>
          <a href="/sofa">
            <h5>SOFA</h5>
          </a>
        </li>
        <li className="list">
          <div className="col-1">
            <a href="/sofa_bo">Sofa bộ</a>
          </div>
          <div className="col-1">
            <a href="/sofa_goc">Sofa góc</a>
          </div>
          <div className="col-1">
            <a href="/sofa_bang">Sofa băng</a>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Lounge;
