import React from "react";
import { Route, Routes } from "react-router-dom";

function NewCollection(props) {
  return (
    <div className="new_collection">
      <ul>
        <li>
          <a href="/newcollection1">
            <h5>BÀN ĂN MẶT ĐÁ TVP-2022 THIẾT KẾ TRÊN NỀN CHẤT LIỆU VÀNG</h5>
          </a>
        </li>
        <li>
          <a href="newcollection2">
            <h5>BỘ BÀN ĂN TVP-LV</h5>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NewCollection;
