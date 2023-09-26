import Image from "next/image";
import { IFetchedProduct } from "@/types";
import ProductModal from "./products/ProductModal";

const Product = ({
  product,
  startPrice,
  details,
}: {
  product: IFetchedProduct;
  startPrice: string;
  details: string;
}) => {
  return (
    <li className="relative w-[310px] h-[400px] bg-white rounded-lg">
      <h3 className="max-w-[200px] truncate absolute left-2 top-2 bg-white rounded-lg p-2 z-10 text-3xl font-semibold">
        {product.title}
      </h3>
      <span className="absolute left-2 top-[58px] bg-white rounded-b-lg p-2 z-10">
        {startPrice} ${product.price}
      </span>
      <div className="relative w-[280px] h-[360px] mx-auto mt-4 bg-zinc-200">
        <Image
          sizes="600px"
          fill
          src={product.thumbnail}
          alt={product.category}
          className="rounded-md"
          quality={80}
          style={{ objectFit: "cover" }}
        />
      </div>
      <ProductModal details={details} product={product} />
    </li>
  );
};

export default Product;
