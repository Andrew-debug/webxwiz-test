import Link from "next/link";
import generalStyles from "../components.module.scss";
import { ArrowRight } from "lucide-react";
import axios from "axios";
import Product from "../Product";
import { IFetchedProduct } from "@/types";

const GetIPhone = async () => {
  const res = await axios.get("https://dummyjson.com/products");
  const products: IFetchedProduct[] = res?.data?.products.slice(0, 4) || [];
  return (
    <section className="relative mt-20">
      <div className={generalStyles["products-bg"]}></div>
      <div className="flex justify-between items-center max-w-[1440px] mx-auto pt-10">
        <h2 className="text-4xl">
          Get Your <span className="font-semibold">iPhone</span>
        </h2>
        <p>images are ugly af, but I cba searching for perfect ones 💀💀💀💀</p>
        <Link href={"/"} className="flex items-center gap-4">
          <span className="font-semibold">See All</span>
          <ArrowRight size={20} />
        </Link>
      </div>
      <div className="flex justify-center max-w-[1440px] mx-auto">
        <ul className="flex flex-wrap items-center gap-4 mt-10">
          {products.map((product, index) => {
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
          })}
        </ul>
      </div>
    </section>
  );
};

export default GetIPhone;
