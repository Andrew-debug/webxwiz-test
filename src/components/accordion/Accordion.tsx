"use client";
import { useState } from "react";
import { cards } from "./data";
import styles from "./accordion.module.scss";
import Image from "next/image";
import PrimaryButton from "../PrimaryButton";
import PlayCircle from "@/assets/icons/play-circle.svg";
export const Accordion = () => {
  const [active, setActive] = useState<number | undefined>(0);
  const handleToggle = (index: number) =>
    setActive(active === index ? undefined : index);

  return (
    <section className="flex justify-center bg-[#fafafa] my-14">
      <div className={styles.accordion}>
        {cards.map((card, index) => {
          const isActive = active === index ? styles.active : "";
          return (
            <article
              key={index}
              className={`${styles.slide} ${isActive}`}
              onClick={() => handleToggle(index)}
            >
              <Image
                src={card.image}
                style={{ objectFit: "cover" }}
                className={`${styles.img} ${!isActive && styles.blur}`}
                alt={card.header}
                priority={true}
              />
              {isActive && (
                <div className={styles["button-wrap"]}>
                  <PrimaryButton text="Stream Now">
                    <div className="flex items-center gap-1">
                      <p>Stream Now</p>
                      <span className="w-6 h-6 pt-[1px]">
                        <PlayCircle />
                      </span>
                    </div>
                  </PrimaryButton>
                </div>
              )}
              {isActive && (
                <h1 className="max-w-[400px] truncate absolute -left-[7px] -top-[5px] bg-white rounded-lg p-2 z-10 text-3xl font-semibold">
                  {card.header}
                </h1>
              )}
              {isActive && (
                <span className="absolute -left-[7px] top-[45px] font-medium bg-white rounded-b-lg p-2 z-10">
                  {card.text}
                </span>
              )}
              {!isActive && (
                <h2 className={styles["inactive-title"]}>{card.header}</h2>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
};
