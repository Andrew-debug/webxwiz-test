"use client";
import styles from "./components.module.scss";
const PrimaryButton = ({
  text,
  handleClick,
}: {
  text: string;
  handleClick?: () => void;
}) => {
  return (
    <button onClick={handleClick} className={styles["primary-button"]}>
      {text}
    </button>
  );
};

export default PrimaryButton;
