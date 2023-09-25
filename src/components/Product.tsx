import Image from "next/image";
import React from "react";
import { IFetchedProduct } from "@/types";
import ProductModal from "./products/ProductModal";

interface IProduct {
  product: IFetchedProduct;
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

const Product = ({
  product,
  id,
  title,
  price,
  image,
  category,
  description,
}: IProduct) => {
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
          style={{ objectFit: "cover" }}
        />
      </div>
      <ProductModal
        id={id}
        product={product}
        title={title}
        price={price}
        image={image}
        category={category}
        description={description}
      />
    </li>
  );
};

export default Product;
