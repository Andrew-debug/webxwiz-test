import Link from "next/link";
import styles from "./components.module.scss";
const PrimaryButton = ({ href, text }: { href: string; text: string }) => {
  return (
    <button className={styles["primary-button"]}>
      <Link href={href}>{text}</Link>
    </button>
  );
};

export default PrimaryButton;
