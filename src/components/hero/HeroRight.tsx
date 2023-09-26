import HeroImage from "@/assets/images/hero-home-img.png";
import Image from "next/image";
import styles from "./hero.module.scss";
const HeroRight = () => {
  return (
    <div className={styles["hero-right--wrap"]}>
      <div className={`${styles["hero-wrap"]}`}>
        <Image
          src={HeroImage}
          width={650}
          sizes="(max-width: 1200px) 400px"
          priority={true}
          alt="hero"
        />
        <div className={styles["hero-bg"]}></div>
        <div className={styles["hero-shadow--first"]}></div>
        <div className={styles["hero-shadow--second"]}></div>
      </div>
    </div>
  );
};

export default HeroRight;
