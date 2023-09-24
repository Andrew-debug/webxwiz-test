import Image from "next/image";
import React from "react";
import PrimaryButton from "./PrimaryButton";

interface IProduct {
  title: string;
  price: number;
  image: string;
  href: string;
  category: string;
}

const Product = ({ title, price, image, href, category }: IProduct) => {
  return (
    <div>
      <h3>{title}</h3>
      <span>From ${price}</span>
      <Image width={100} height={100} src={image} alt={category} />
      <PrimaryButton href={href} text="Details" />
    </div>
  );
};

export default Product;
