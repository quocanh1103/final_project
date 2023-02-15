import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "reducercart",
  initialState: {
    id_User: "",
    listcart: [],
  },
  reducers: {
    addUser: (state, action) => {
      const Userid = action.payload;
      state.id_User = Userid;
    },
    addCard: (state, action) => {
      const data_add_cart = action.payload;
      const add_cart = state.listcart;
      if (add_cart.length < 1) {
        add_cart.push(data_add_cart);
      } else {
        //Tìm Vị Trí của sản phẩm đã mua
        const indexCart = add_cart.findIndex((value) => {
          return value.idProduct === data_add_cart.idProduct;
        });

        //Tìm xem thử sản phẩm này đã mua hay chưa
        const findCart = add_cart.find((value) => {
          return value.idProduct === data_add_cart.idProduct;
        });

        //Nếu này chưa được mua thì mình push vào
        //Còn đã từng mua rồi thì mình update tại vị trí indexCart mà mình vừa tìm được
        if (!findCart) {
          add_cart.push(data_add_cart);
          console.log("Push");
        } else {
          add_cart[indexCart].count =
            parseInt(add_cart[indexCart].count) + parseInt(data_add_cart.count);
          console.log("Update");
        }
      }
    },
    deleteCard: (state, action) => {
      const data_delete_cart = action.payload;

      //Lấy dữ diệu có sẵn trong state
      const delete_cart = state.listcart;

      //Tìm kiểm vị trí mà cần xóa
      const indexDelete = delete_cart.findIndex((value) => {
        return value.idProduct === data_delete_cart.idProduct;
      });
      //Xóa theo vị trí
      delete_cart.splice(indexDelete, 1);

      state = {
        id_user: state.id_user,
        listCart: delete_cart,
      };

      // return state;
    },
    updateCard: (state, action) => {
      const data_update_cart = action.payload;

      const update_cart = state.listcart;

      const index = update_cart.findIndex((value) => {
        return value.idProduct === data_update_cart.idProduct;
      });

      update_cart[index].count = data_update_cart.count;

      state = {
        id_user: state.id_user,
        listCart: update_cart,
      };

      // return state;
    },
  },
});
