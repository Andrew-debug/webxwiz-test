"use client";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { IFetchedProduct } from "@/types";

export interface ICartItem extends IFetchedProduct {
  count: number;
}

interface CartState {
  cartItems: ICartItem[];
  total: number;
}

const initialState: CartState = {
  cartItems: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ICartItem>) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    calcTotals: (state) => {
      let total = 0;
      state.cartItems.forEach((item) => {
        total += item.price * item.count;
      });
      state.total = total;
    },
    increaseProductCount: (state, action) => {
      const updatedCartItems = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });

      state.cartItems = updatedCartItems;
    },
    decreaseProductCount: (state, action) => {
      const updatedCartItems = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, count: item.count - 1 };
        }
        return item;
      });

      state.cartItems = updatedCartItems;
    },
  },
});

export const {
  addItem,
  deleteItem,
  calcTotals,
  increaseProductCount,
  decreaseProductCount,
} = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart;

export default cartSlice.reducer;
