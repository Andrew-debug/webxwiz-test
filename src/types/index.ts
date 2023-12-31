import { StaticImageData } from "next/image";

export interface IFetchedProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: string;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export type ICards = {
  header: string;
  image: StaticImageData;
  text: string;
};
