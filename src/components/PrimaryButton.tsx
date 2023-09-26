"use client";
import { ReactNode } from "react";
import styles from "./components.module.scss";
const PrimaryButton = ({
  text,
  handleClick,
  children,
}: {
  text: string;
  handleClick?: () => void;
  children?: ReactNode;
}) => {
  return (
    <button onClick={handleClick} className={styles["primary-button"]}>
      {children ? children : text}
    </button>
  );
};

export default PrimaryButton;
