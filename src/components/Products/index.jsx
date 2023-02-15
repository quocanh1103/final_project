import React, { useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import TableProduct from "./tableProduct";
import productApis from "../../apis/products/ProductsAPI";
import SearchForm from "./SearchForm";

function Product(props) {
  const [filters, setFilters] = useState({});
  const [loadAPI, setLoadAPI] = useState(false);

  const [products, setProducts] = useState([]);
  const [productss, setProductss] = useState([]);

  const getProductData = async () => {
    try {
      const response = await productApis.getProducts();
      return setProductss(response.data);
    } catch (error) {}
  };
  useEffect(() => {
    getProductData();
    setLoadAPI(true);
  }, [loadAPI]);

  useEffect(() => {
    const getProductDataByName = async () => {
      try {
        const response = await productApis.getProductByName(filters);
        // console.log("Data tra ve: ", response.data);
        setProducts(response.data);
      } catch (error) {}
    };

    getProductDataByName();
  }, [filters]);

  function handleFiltersChange(newfilters) {
    console.log("New: ", newfilters);
    setFilters(newfilters.search);
  }

  // lấy data từ table lên form:

  const [editFormData, setEditFormData] = useState({
    name: "",
    image: "",
    quantity: "",
    status: "",
    pricenew: "",
    category: "",
    color: "",
  });
  const [editProductId, setEditProductId] = useState(null);

  const handleEditClick = (event, item) => {
    event.preventDefault();
    console.log(item.id);
    setEditProductId(item.id);

    const formValues = {
      name: item.name,
      image: item.image,
      quantity: item.quantity,
      status: item.status,
      pricenew: item.pricenew,
      category: item.category,
      color: item.color,
    };
    setEditFormData(formValues);
  };
  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };
  // chỉnh sửa form products:

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editContact = {
      name: editFormData.name,
      image: editFormData.image,
      quantity: editFormData.quantity,
      status: editFormData.status,
      price: editFormData.price,
      category: editFormData.category,
      color: editFormData.color,
    };

    const newContacts = [...productss];

    const index = productss.findIndex((item) => item.id === editProductId);

    newContacts[index] = editContact;
    setProductss(newContacts);
    setEditProductId(null);
  };

  const deleteForm = (id) => {
    const deleteProductsData = async () => {
      try {
        const res = await productApis.deleteProducts(id);
        console.log("id :", id);
      } catch (errors) {}
    };
    deleteProductsData();
    setLoadAPI(false);
  };

  return (
    <div className="col-12">
      <div className="container-fluid">
        <div className="row">
          <header className="col-12">
            <p className="text_head">
              <b>Sản phẩm</b>
            </p>
          </header>
          <main className="main">
            <div className="col-12 text-center">
              <ul id="item_menu_products" className="mb-5">
                <Link to="/admin/addProducts">
                  <li className="text_product">
                    <em className="fa fa-plus"></em>Tạo sản phẩm mới
                  </li>
                </Link>
                <li className="text_product_1">
                  <em className="fa fa-trash"></em>Xóa tất cả sản phẩm
                </li>
              </ul>

              <div className="search">
                <SearchForm onSubmit={handleFiltersChange} />
              </div>

              <table class="table w-100 col-11">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">Tên sản phẩm</th>
                    <th scope="col">Ảnh</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Tình trạng</th>
                    <th scope="col">Giá tiền(vnđ)</th>
                    <th scope="col">Danh mục</th>
                    <th scope="col">Màu sắc</th>
                    <th scope="col">Chức năng</th>
                  </tr>
                </thead>
                <tbody>
                  {products.length > 0
                    ? products.map((item) => {
                        return (
                          <TableProduct
                            props={item}
                            key={item.id}
                            handleEditFormChange={handleEditFormChange}
                            editFormData={editFormData}
                            handleEditClick={handleEditClick}
                            deleteForm={deleteForm}
                            handleEditFormSubmit={handleEditFormSubmit}
                          />
                        );
                      })
                    : productss.map((item) => {
                        return (
                          <TableProduct
                            props={item}
                            key={item.id}
                            handleEditFormChange={handleEditFormChange}
                            editFormData={editFormData}
                            handleEditClick={handleEditClick}
                            deleteForm={deleteForm}
                            handleEditFormSubmit={handleEditFormSubmit}
                          />
                        );
                      })}
                </tbody>
              </table>
              <nav
                className="d-flex justify-content-end"
                aria-label="Page navigation example"
              >
                <ul className="pagination">
                  <li className="page-item">
                    <a class="page-link bg-dark" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link bg-dark" href="#">
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link bg-dark" href="#">
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link bg-dark" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a class="page-link bg-dark" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Product;
