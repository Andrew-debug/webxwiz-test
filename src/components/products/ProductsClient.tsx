"use client";
import { useState } from "react";
import Product from "../Product";
import styles from "./productsMain.module.scss";
import { IFetchedProduct } from "@/types";

const ProductsClient = ({ products }: { products: IFetchedProduct[] }) => {
  const [filter, setFilter] = useState("all");

  const allFilters: string[] = products
    .map((item: IFetchedProduct) => item.category)
    .filter(
      (value: string, index: number, array: string[]) =>
        array.indexOf(value) === index
    );

  const filteredData = products.filter((item) => item.category === filter);
  return (
    <>
      <ul className="flex gap-4 my-4">
        <li
          onClick={() => setFilter("all")}
          className={filter === "all" ? styles["filter-active"] : styles.filter}
        >
          all Products
        </li>
        {allFilters.map((_filter, index) => (
          <li
            key={index}
            onClick={() => setFilter(_filter)}
            className={
              filter === _filter ? styles["filter-active"] : styles.filter
            }
          >
            {_filter}
          </li>
        ))}
      </ul>
      <div className="flex justify-center max-w-[1288px] mx-auto">
        <ul className="flex flex-wrap items-center gap-4">
          {(filter === "all" ? products : filteredData).map(
            (product, index) => {
              const { id, category, thumbnail, price, title, description } =
                product;
              return (
                <Product
                  key={index}
                  product={product}
                  id={id}
                  category={category}
                  image={thumbnail}
                  price={price}
                  title={title}
                  description={description}
                />
              );
            }
          )}
        </ul>
      </div>
    </>
  );
};

export default ProductsClient;
