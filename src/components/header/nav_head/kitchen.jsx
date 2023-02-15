import React from "react";

function Kitchen(props) {
  return (
    <div className="kitchen">
      <ul>
        <li>
          <div>
            <a href="/ban-ghe-an">
              <h5> BÀN GHẾ ĂN</h5>
            </a>
          </div>
        </li>
        <li className="kitchen-row">
          <div className="col">
            <a href="/ban_an_mat_da">Bàn ăn mặt đá</a>
          </div>
          <div className="col">
            <a href="/ban_an_thong_minh">Bàn ăn thông minh</a>
          </div>
          <div className="col">
            <a href="/ban_tron">Bàn tròn</a>
          </div>
          <div className="col">
            <a href="/ban_ghe_an_tan_co_dien">Bàn ghế ăn tân cỗ điển</a>
          </div>
          <div className="col">
            <a href="/ban_an_mat_gom_ceramic">Bàn ăn mặt gốm Ceramic</a>
          </div>
          <div className="col">
            <a href="/ghe_an">Ghế ăn</a>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Kitchen;
