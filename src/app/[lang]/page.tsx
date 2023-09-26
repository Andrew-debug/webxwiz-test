import GetIPhone from "@/components/getIPhone/GetIPhone";
import HeroLeft from "@/components/hero/HeroLeft";
import HeroRight from "@/components/hero/HeroRight";
import ProductsMain from "@/components/products/ProductsMain";
import { dictionary } from "@/constants/content";

export default function Home({ params }: { params: { lang: string } }) {
  return (
    <>
      <section className="flex mx-auto w-full max-w-[1440px] relative min-h-[750px]">
        <HeroLeft dict={dictionary[params.lang]} />
        <HeroRight />
      </section>
      <GetIPhone dict={dictionary[params.lang]} />
      <ProductsMain dict={dictionary[params.lang]} />
    </>
  );
}
