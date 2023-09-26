import heroText1 from "@/assets/images/hero-text-1.png";
import heroText2 from "@/assets/images/hero-text-2.png";
import Image, { StaticImageData } from "next/image";
import styles from "./hero.module.scss";
import PrimaryButton from "../PrimaryButton";
import { DictionaryEntry } from "@/constants/content";

const HeroHeader = ({
  text,
  image,
  width,
  reversed,
}: {
  text: string;
  image?: StaticImageData;
  width?: number;
  reversed?: boolean;
}) => {
  if (reversed)
    return (
      <header className="flex items-center">
        {image && (
          <Image src={image} className="pt-3" width={width} alt="glasses" />
        )}
        <span className={`${styles.text}`}>
          <h1>{text}</h1>
        </span>
      </header>
    );
  return (
    <header className="flex items-center">
      <span className={`${styles.text}`}>
        <h1>{text}</h1>
      </span>
      {image && (
        <Image src={image} className="pt-3" width={width} alt="glasses" />
      )}
    </header>
  );
};

const HeroLeft = ({ dict }: { dict: DictionaryEntry }) => {
  return (
    <div className="w-[50%] flex items-center">
      <div className="">
        <HeroHeader
          text={dict.heroLeft.firstTitle}
          image={heroText1}
          width={190}
        />
        <HeroHeader text={dict.heroLeft.secondTitle} />
        <HeroHeader
          text={dict.heroLeft.thirdTitle}
          reversed
          image={heroText2}
          width={150}
        />
        <p className="max-w-[600px] text-[#464646] mt-4">
          {dict.heroLeft.paragraph}
        </p>
        <div className="mt-10">
          <PrimaryButton text={dict.heroLeft.button} />
        </div>
      </div>
    </div>
  );
};

export default HeroLeft;
