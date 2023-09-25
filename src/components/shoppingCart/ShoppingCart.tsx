"use client";
import * as React from "react";
import styles from "./shoppingCart.module.scss";
import Modal from "@mui/material/Modal";
import UserButton from "../UserButton";
import Bag from "@/assets/icons/bag.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  ICartItem,
  calcTotals,
  decreaseProductCount,
  deleteItem,
  selectCartItems,
} from "@/app/redux/features/cart/cartSlice";
import { X } from "lucide-react";
import ShoppingCartItem from "./ShoppingCartItem";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxHeight: 800,
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ShoppingCart() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const { cartItems, total } = useSelector(selectCartItems);

  const handleDecrease = (product: ICartItem, id: number) => {
    if (cartItems.some((item) => item.id === id)) {
      if (product.count <= 1) dispatch(deleteItem(id));
      dispatch(decreaseProductCount(product));
    }
  };
  useEffect(() => {
    dispatch(calcTotals());
  }, [cartItems]);
  return (
    <>
      <UserButton handleClick={handleOpen}>
        <Bag />
      </UserButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles["shopping-cart"]}>
          {cartItems.length < 1 ? (
            <div className="text-center">empty cart</div>
          ) : (
            <>
              <ul className="flex flex-col gap-4">
                {cartItems.map((item, index) => (
                  <li key={index} className="relative flex h-[140px]">
                    <button
                      className="absolute top-0 right-0"
                      onClick={() => dispatch(deleteItem(item.id))}
                    >
                      <X />
                    </button>
                    <ShoppingCartItem
                      cartItems={cartItems}
                      category={item.category}
                      count={item.count}
                      img={item.thumbnail}
                      item={item}
                      price={item.price}
                      title={item.title}
                    />
                  </li>
                ))}
              </ul>
              <div className="text-end mx-2 mt-6">
                Total Price: $<strong>{total}</strong>
              </div>
            </>
          )}
        </div>
      </Modal>
    </>
  );
}
