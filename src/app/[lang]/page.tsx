import GetIPhone from "@/components/getIPhone/GetIPhone";
import HeroLeft from "@/components/hero/HeroLeft";
import HeroRight from "@/components/hero/HeroRight";
import ProductsMain from "@/components/products/ProductsMain";
import { dictionary } from "@/constants/content";
import styles from "@/components/hero/hero.module.scss";
import { Accordion } from "@/components/accordion/Accordion";
import News from "@/components/news/News";

export default function Home({ params }: { params: { lang: string } }) {
  return (
    <>
      <section className={styles["hero--section"]}>
        <HeroLeft dict={dictionary[params.lang]} />
        <HeroRight />
      </section>
      <GetIPhone dict={dictionary[params.lang]} />
      <ProductsMain dict={dictionary[params.lang]} />
      <Accordion />
      <News />
    </>
  );
}
