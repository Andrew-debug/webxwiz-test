"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
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
  product,
  details,
}: {
  product: IFetchedProduct;
  details: string;
}) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const { cartItems } = useSelector(selectCartItems);

  const handleOpen = () => {
    router.push(`?product=${product.id}`, { scroll: false });
    setOpen(true);
  };

  const handleClose = () => {
    router.replace(`/${pathname === "en" ? "en" : "uk"}`, { scroll: false });
    setOpen(false);
  };

  useEffect(() => {
    const productQueryParam = searchParams.get("product");
    if (productQueryParam && parseInt(productQueryParam) === product.id) {
      handleOpen();
    }
  }, [searchParams]);

  const handleAdd = () => {
    if (cartItems.some((item) => item.id === product.id)) {
      dispatch(increaseProductCount(product));
    } else {
      dispatch(addItem({ ...product, count: 1 } as ICartItem));
    }
  };

  return (
    <>
      <div className="absolute right-2 bottom-4 bg-white rounded-lg p-2">
        <PrimaryButton handleClick={handleOpen} text={details} />
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
            {product.title}
          </Typography>
          <Image
            width={300}
            height={300}
            src={product.thumbnail}
            className="mx-auto w-auto h-auto"
            alt={product.category}
          />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {product.description}
          </Typography>
          <Typography sx={{ fontWeight: 600 }}>
            Price: ${product.price}
          </Typography>

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
