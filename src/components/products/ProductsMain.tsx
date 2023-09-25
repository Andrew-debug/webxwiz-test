import axios from "axios";
import generalStyles from "../components.module.scss";
import ProductsClient from "./ProductsClient";
import { IFetchedProduct } from "@/types";

const ProductsMain = async () => {
  const res = await axios.get("https://dummyjson.com/products");
  const products: IFetchedProduct[] = res?.data?.products.slice(4, 12) || [];
  return (
    <section className="relative flex justify-center items-center mt-20">
      <div className={generalStyles["products-bg"]}></div>
      <div className="flex flex-col items-center gap-3">
        <h4 className="text-4xl mt-4">
          Explore in <span className="font-semibold">Products</span>
        </h4>
        <ProductsClient products={products} />
      </div>
    </section>
  );
};

export default ProductsMain;
