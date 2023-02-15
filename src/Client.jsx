import React from 'react';
import PropTypes from 'prop-types';
import Header from "./components/header";
import Content from "./components/content";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";
import Newcollection1 from "./components/header/nav_head_content/newcollection1";
import Newcollection2 from "./components/header/nav_head_content/newcollection2";
import DingingTable from "./components/header/nav_head_content/banghean";
import BanAnMatDa from "./components/header/nav_head_content/ban_an_mat_da";
import BanAnThongMinh from "./components/header/nav_head_content/ban_an_thong_minh";
import BanTron from "./components/header/nav_head_content/ban_tron";
import BanGheAnTanCoDien from "./components/header/nav_head_content/ban_ghe_an_tan_co_dien";
import BanAnMatGom from "./components/header/nav_head_content/ban_an_mat_gom_ceramic";
import GheAn from "./components/header/nav_head_content/ghe_an";
import BantraBansofa from "./components/header/nav_head_content/ban_tra_ban_sofa";
import BansofaThongminh from "./components/header/nav_head_content/ban_sofa_thong_minh";
import BansofaBantraMatkinh from "./components/header/nav_head_content/ban_sofa_ban_tra_mat_kinh";
import BansofaBantraMatda from "./components/header/nav_head_content/ban_sofa_ban_tra_mat_da";
import BansofaBantraTancoDien from "./components/header/nav_head_content/ban_sofa_ban_tra_tan_co_dien";
import Sofa from "./components/header/nav_head_content/sofa";
import Sofabo from "./components/header/nav_head_content/sofa_bo";
import SofaGoc from "./components/header/nav_head_content/sofa_goc";
import SofaBang from "./components/header/nav_head_content/sofa_bang";
import BantrangDiem from "./components/header/nav_head_content/ban_trang_diem";
import Ghemassage from "./components/header/nav_head_content/ghe_massage";
import BangheCafe from "./components/header/nav_head_content/ban_ghe_cafe";
import GhequayBar from "./components/header/nav_head_content/ghe_quay_bar";
import GhevanPhong from "./components/header/nav_head_content/ghe_van_phong";

const Client = props => {
    return (
        <div className="App_test">
      
      <Header />

      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/ban-ghe-an" element={<DingingTable />} />
        <Route path="/newcollection1" element={<Newcollection1 />} />
        <Route path="/newcollection2" element={<Newcollection2 />} />
        <Route path="/ban_an_mat_da" element={<BanAnMatDa />} />
        <Route path="/ban_an_thong_minh" element={<BanAnThongMinh />} />
        <Route path="/ban_tron" element={<BanTron />} />
        <Route path="/ban_ghe_an_tan_co_dien" element={<BanGheAnTanCoDien />} />
        <Route path="/ban_an_mat_gom_ceramic" element={<BanAnMatGom />} />
        <Route path="/ghe_an" element={<GheAn />} />
        <Route path="/ban_tra_sofa" element={<BantraBansofa />} />
        <Route path="/ban_sofa_thong_minh" element={<BansofaThongminh />} />
        <Route
          path="/ban_sofa_ban_tra_mat_kinh"
          element={<BansofaBantraMatkinh />}
        />
        <Route
          path="/ban_sofa_ban_tra_mat_da"
          element={<BansofaBantraMatda />}
        />
        <Route
          path="/ban_sofa_ban_tra_tan_co_dien"
          element={<BansofaBantraTancoDien />}
        />
        <Route path="/sofa" element={<Sofa />} />
        <Route path="/sofa_bo" element={<Sofabo />} />
        <Route path="/sofa_goc" element={<SofaGoc />} />
        <Route path="/sofa_bang" element={<SofaBang />} />
        <Route path="/ban-trang-diem" element={<BantrangDiem />} />
        <Route path="/ghe-massage" element={<Ghemassage />} />
        <Route path="/banghecafe" element={<BangheCafe />} />
        <Route path="/ghequaybar" element={<GhequayBar />} />
        <Route path="/ghevanphong" element={<GhevanPhong />} />
        <Route path="/khuyenmai" element={<GhequayBar />} />
      </Routes>
      <Footer />
    </div>
    );
};

Client.propTypes = {
    
};

export default Client;