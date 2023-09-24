import Link from "next/link";
import styles from "./getIPhone.module.scss";
import { ArrowRight } from "lucide-react";
import axios from "axios";
import Product from "../Product";
import { IFetchedProduct } from "@/types";

const GetIPhone = async () => {
  const res = await axios.get("https://dummyjson.com/products");
  const products = res?.data?.products.slice(0, 4) || [];
  return (
    <div className="relative mt-20">
      <div className={styles.bg}></div>
      <div className="flex justify-between items-center mx-14 pt-10">
        <h2 className="text-4xl">
          Get Your <span className="font-semibold">iPhone</span>
        </h2>
        <Link href={"/"} className="flex items-center gap-4">
          <span className="font-semibold">See All</span>
          <ArrowRight size={20} />
        </Link>
      </div>
      <div className="flex">
        {products.map((product: IFetchedProduct, index: number) => {
          const { category, thumbnail, price, title } = product;
          return (
            <Product
              key={index}
              category={category}
              href="/"
              image={thumbnail}
              price={price}
              title={title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GetIPhone;
