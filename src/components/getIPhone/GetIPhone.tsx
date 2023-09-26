import Link from "next/link";
import generalStyles from "../components.module.scss";
import { ArrowRight } from "lucide-react";
import axios from "axios";
import Product from "../Product";
import { IFetchedProduct } from "@/types";
import { DictionaryEntry } from "@/constants/content";

const GetIPhone = async ({ dict }: { dict: DictionaryEntry }) => {
  const res = await axios.get("https://dummyjson.com/products");
  const products: IFetchedProduct[] = res?.data?.products.slice(0, 4) || [];
  const {
    getIPhone: { startPrice },
    details,
  } = dict;
  return (
    <section className="relative mt-20">
      <div className={generalStyles["products-bg"]}></div>
      <div className="flex justify-between items-center max-w-[1440px] mx-auto pt-10">
        <h2 className="text-4xl">
          {dict.getIPhone.title} <span className="font-semibold">iPhone</span>
        </h2>
        <Link href={"/"} className="flex items-center gap-4">
          <span className="font-semibold">{dict.getIPhone.allLink}</span>
          <ArrowRight size={20} />
        </Link>
      </div>
      <div className="flex justify-center max-w-[1440px] mx-auto">
        <ul className="flex flex-wrap items-center gap-4 mt-10">
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
