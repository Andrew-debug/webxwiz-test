"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { IFetchedProduct } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import {
  ICartItem,
  addItem,
  increaseProductCount,
  selectCartItems,
} from "@/app/redux/features/cart/cartSlice";
import PrimaryButton from "../PrimaryButton";
import Image from "next/image";
import styles from "./productsMain.module.scss";
import { X } from "lucide-react";

export default function ProductModal({
  id,
  product,
  title,
  price,
  image,
  category,
  description,
}: {
  id: number;
  product: IFetchedProduct;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
}) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const { cartItems } = useSelector(selectCartItems);

  const handleOpen = () => {
    router.push(`?product=${id}`, { scroll: false });
    setOpen(true);
  };

  const handleClose = () => {
    router.replace("/", { scroll: false });
    setOpen(false);
  };

  useEffect(() => {
    const productQueryParam = searchParams.get("product");
    if (productQueryParam && parseInt(productQueryParam) === id) {
      handleOpen();
    }
  }, [searchParams]);

  const handleAdd = () => {
    if (cartItems.some((item) => item.id === id)) {
      dispatch(increaseProductCount(product));
    } else {
      dispatch(addItem({ ...product, count: 1 } as ICartItem));
    }
  };

  return (
    <>
      <div className="absolute right-2 bottom-4 bg-white rounded-lg p-2">
        <PrimaryButton handleClick={handleOpen} text="Details" />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles["modal-inner"]}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ fontWeight: 600, textAlign: "center" }}
          >
            {title}
          </Typography>
          <Image
            width={300}
            height={300}
            src={image}
            className="mx-auto w-auto h-auto"
            alt={category}
          />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {description}
          </Typography>
          <Typography sx={{ fontWeight: 600 }}>Price: ${price}</Typography>

          <div className="flex justify-end py-2">
            <PrimaryButton text="Add to Cart" handleClick={handleAdd} />
          </div>
          <button onClick={handleClose} className="absolute right-4 top-2">
            <X />
          </button>
        </div>
      </Modal>
    </>
  );
}
