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
    <li className="relative w-[310px] h-[400px] bg-white rounded-lg">
      <h3 className="max-w-[200px] truncate absolute left-2 top-2 bg-white rounded-lg p-2 z-10 text-3xl font-semibold">
        {title}
      </h3>
      <span className="absolute left-2 top-[58px] bg-white rounded-b-lg p-2 z-10">
        From ${price}
      </span>
      <div className="relative w-[280px] h-[360px] mx-auto mt-4 bg-zinc-200">
        <Image
          sizes="600px"
          fill
          src={image}
          alt={category}
          className="rounded-md"
          quality={80}
        />
      </div>
      <div className="absolute right-2 bottom-4 bg-white rounded-lg p-2">
        <PrimaryButton href={href} text="Details" />
      </div>
    </li>
  );
};

export default Product;
