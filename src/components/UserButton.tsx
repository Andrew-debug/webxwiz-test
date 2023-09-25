"use client";
import { ReactNode } from "react";
import styles from "./components.module.scss";

const UserButton = ({
  handleClick,
  children,
}: {
  handleClick?: () => void;
  children: ReactNode;
}) => {
  return (
    <button onClick={handleClick} className={styles["user-button"]}>
      {children}
    </button>
  );
};

export default UserButton;
