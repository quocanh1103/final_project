import React from "react";
import "reactjs-popup/dist/index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormatPrice from "./format";

function TableProduct({
	props,
	editFormData,
	handleEditFormChange,
	handleEditClick,
	deleteForm,
	handleEditFormSubmit,
}) {
	const notify = () => toast("Xóa rồi á!");

	return (
		<>
			<tr>
				<th className="align-middle" scope="row">
					{props.name}
				</th>
				<td class="align-middle">
					<img className="img-fluid" src={props.image} />
				</td>
				<td className="align-middle">{props.quantity}</td>
				<td className="align-middle">{props.status}</td>
				<td className="align-middle">{props.pricenew}</td>
				<td className="align-middle">{props.category}</td>
				<td className="align-middle">{props.color}</td>
				<td className="align-middle">
					<div className="d-flex">
						<button
							data-toggle="modal"
							data-target="#staticBackdrop"
							className="btn btn-success mr-2"
							onClick={(event) => handleEditClick(event, props)}
						>
							Sửa
						</button>
						<div
							class="modal fade"
							data-backdrop="static"
							id="staticBackdrop"
							tabindex="-1"
							data-keyboard="false"
							aria-labelledby="staticBackdropLabel"
						>
							<div className="modal-dialog modal-dialog-scrollable ">
								<div className="modal-content">
									<div className="modal-header">
										<h5 className="my-4 text-center modal-title">
											Edit Form
										</h5>
										<button
											type="button"
											className="close"
											data-dismiss="modal"
											aria-label="Close"
										>
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div className="modal-body">
										<div className="container">
											<form className="row">
												<div className="form-group mr-2">
													<label>Tên Sản Phẩm</label>
													<input
														value={editFormData.name}
														name="name"
														type="text"
														className="form-control"
														aria-describedby="emailHelp"
														onChange={handleEditFormChange}
													/>
												</div>
												<div className="form-group col-6">
													<label>Ảnh</label>
													<input
														value={editFormData.image}
														name="image"
														type="text"
														className="form-control"
														aria-describedby="emailHelp"
														onChange={handleEditFormChange}
													/>
												</div>
												<div className="form-group col-6">
													<label>Số lượng</label>
													<input
														value={editFormData.quantity}
														name="quantity"
														type="text"
														className="form-control"
														aria-describedby="emailHelp"
														onChange={handleEditFormChange}
													/>
												</div>
												<div className="form-group col-6">
													<label>Tình trạng</label>
													<select
														value={editFormData.status}
														name="status"
														className="custom-select"
														onChange={handleEditFormChange}
													>
														<option selected>Chọn</option>
														<option value="còn hàng">
															còn hàng
														</option>
														<option value="hết hàng">
															hết hàng
														</option>
													</select>
												</div>
												<div className="form-group col-6">
													<label>Giá tiền</label>
													<input
														value={editFormData.pricenew}
														name="pricenew"
														type="text"
														className="form-control"
														aria-describedby="emailHelp"
														onChange={handleEditFormChange}
													/>
													<FormatPrice />
												</div>
												<div className="form-group col-6">
													<label>Danh mục</label>
													<input
														value={editFormData.category}
														name="category"
														type="text"
														className="form-control"
														aria-describedby="emailHelp"
														onChange={handleEditFormChange}
													/>
												</div>
												<div className="form-group col-6">
													<label>Màu sắc</label>
													<input
														value={editFormData.color}
														name="color"
														type="text"
														className="form-control"
														aria-describedby="emailHelp"
														onChange={handleEditFormChange}
													/>
												</div>
												<div className="form-group col-6"></div>
												<div className="form-group col-12 d-flex justify-content-end">
													<button
														type="submit"
														class="btn btn-primary"
														onClick={handleEditFormSubmit}
													>
														Save
													</button>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>

						<button
							onClick={() => {
								notify();
								deleteForm(props.id);
							}}
							className="btn btn-danger col-6"
						>
							Xóa
						</button>
						<ToastContainer
							position="top-right"
							autoClose={1000}
							hideProgressBar={false}
							newestOnTop={false}
							closeOnClick
							rtl={false}
							pauseOnFocusLoss
							draggable
							pauseOnHover
							theme="dark"
						/>
					</div>
				</td>
			</tr>
		</>
	);
}

export default TableProduct;
