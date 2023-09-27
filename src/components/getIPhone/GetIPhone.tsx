import Link from "next/link";
import generalStyles from "../components.module.scss";
import { ArrowRight } from "lucide-react";
import Product from "../Product";
import { IFetchedProduct } from "@/types";
import { DictionaryEntry } from "@/constants/content";
import styles from "./getIPhone.module.scss";
import axios from "axios";

const GetIPhone = async ({ dict }: { dict: DictionaryEntry }) => {
  const res = await axios.get("https://dummyjson.com/products");
  const products: IFetchedProduct[] = res?.data?.products.slice(0, 4) || [];
  const {
    getIPhone: { startPrice },
    details,
  } = dict;
  return (
    <section className={styles["getIPhone"]}>
      <div className={generalStyles["products-bg"]}></div>
      <div className={styles["getIPhone-wrap"]}>
        <div className={styles["getIPhone-title"]}>
          <h2 className="text-4xl">
            {dict.getIPhone.title} <span className="font-semibold">iPhone</span>
          </h2>
          <Link href={"/"} className="flex items-center gap-4">
            <span className="font-semibold">{dict.getIPhone.allLink}</span>
            <ArrowRight size={20} />
          </Link>
        </div>
        <ul className={`${generalStyles["products-wrap"]} mt-10`}>
          {products.map((product, index) => (
            <Product
              key={index}
              startPrice={startPrice}
              details={details}
              product={product}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default GetIPhone;
