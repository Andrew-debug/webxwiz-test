import Link from "next/link";
import styles from "./components.module.scss";

const UserButton = ({ href, Icon }: { href: string; Icon: string }) => {
  return (
    <button className={styles["user-button"]}>
      <Link href={href}>
        <Icon />
      </Link>
    </button>
  );
};

export default UserButton;
