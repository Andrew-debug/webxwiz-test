import heroText1 from "@/assets/images/hero-text-1.png";
import heroText2 from "@/assets/images/hero-text-2.png";
import Image, { StaticImageData } from "next/image";
import styles from "./hero.module.scss";
import PrimaryButton from "../PrimaryButton";

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

const HeroLeft = () => {
  return (
    <div className="w-[50%] flex items-center">
      <div className="max-w-[520px]">
        <HeroHeader text="Elevating life" image={heroText1} width={190} />
        <HeroHeader text="To Pro-Level Precision" />
        <HeroHeader
          text="With Vision Pro"
          reversed
          image={heroText2}
          width={150}
        />
        <p className="text-[#464646] mt-4">
          With Vision Pro, you have an infinite canvas that transforms how you
          use the apps you love. Arrange apps anywhere and scale them to the
          perfect size, making the workspace of your dreams a reality — all
          while staying present in the world around you
        </p>
        <div className="mt-10">
          <PrimaryButton text="Pre-Order Now" />
        </div>
      </div>
    </div>
  );
};

export default HeroLeft;
