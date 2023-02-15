import React from "react";

import Header from "./components/header";
import Content from "./components/content";
import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "./components/header";
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
import Login from "./components/logIn/logIn";
import Signup from "./components/Signup/signup";

import Cardbuy from "./components/card/cardbuy";
import NewCollectionMore from "./more/NewCollection";
import SanVuonNgoaiTroiMore from "./more/SanVuon";
import VanPhongMore from "./more/VanPhong";
import BanGheCafeMore from "./more/BanGheCafe";
import GheQuayBarMore from "./more/GheQuayBar";
import SofaMore from "./more/Sofa";
import BanTraBanSofaMore from "./more/BanTra";
import GheThugianMore from "./more/GheThuGian";
import SearchResults from "./components/content/search/SearchResults";

import Cart from "./components/cart/Cart";

import Checkout from "./components/cart/cartcheckout";
import Information from "./Auth/information";
import ScrollToMid from "./share/scrolltomid";
import CartPayment from "./components/cart/cartpayment";
import History from "./components/cart/history";

function Client(props) {
  return (
    <>
      <ScrollToMid />
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
        <Route path="/cardbuy/:id" element={<Cardbuy />} />
        <Route path="/more-new-collection" element={<NewCollectionMore />} />
        <Route path="/more-san-vuon" element={<SanVuonNgoaiTroiMore />} />
        <Route path="/more-van-phong" element={<VanPhongMore />} />
        <Route path="/more-ban-ghe-cafe" element={<BanGheCafeMore />} />
        <Route path="/more-ghe-quay-bar" element={<GheQuayBarMore />} />
        <Route path="/more-sofa" element={<SofaMore />} />
        <Route path="/more-ban-tra-ban-sofa" element={<BanTraBanSofaMore />} />
        <Route path="/more-ghe-thu-gian" element={<GheThugianMore />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/list-cart" element={<Cart />} />
        <Route path="/dangnhap" element={<Login />} />
        <Route path="/dangky" element={<Signup />} />
        <Route path="/carts" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/info" element={<Information />} />
        <Route path="/payment" element={<CartPayment />} />
        <Route path="/history" element={<History />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Client;
