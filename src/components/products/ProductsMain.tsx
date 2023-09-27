import generalStyles from "../components.module.scss";
import ProductsClient from "./ProductsClient";
import { IFetchedProduct } from "@/types";
import { DictionaryEntry } from "@/constants/content";
import axios from "axios";

const ProductsMain = async ({ dict }: { dict: DictionaryEntry }) => {
  const res = await axios.get("https://dummyjson.com/products");
  const products: IFetchedProduct[] = res?.data?.products.slice(0, 4) || [];
  const {
    getIPhone: { startPrice },
    details,
  } = dict;
  return (
    <section className="relative flex justify-center items-center mt-20">
      <div className={generalStyles["products-bg"]}></div>
      <div className="flex flex-col items-center gap-3">
        <h4 className="text-4xl mt-4">
          Explore in <span className="font-semibold">Products</span>
        </h4>
        <ProductsClient
          startPrice={startPrice}
          details={details}
          products={products}
        />
      </div>
    </section>
  );
};

export default ProductsMain;
