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

export type IFaq = {
  id: number;
  header: string;
  text: string;
};

export type IAccordionItem = {
  active: number | null | undefined;
  handleToggle: (index: number) => void;
  faq: IFaq;
};

export type ICards = {
  header: string;
  image: StaticImageData;
  text: string;
};
