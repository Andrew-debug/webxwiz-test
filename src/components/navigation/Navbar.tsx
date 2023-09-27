import UserButton from "../UserButton";
import NavLink from "./NavLink";
import styles from "./navbar.module.scss";
import Apple from "@/assets/icons/apple.svg";
import Search from "@/assets/icons/search.svg";
import Person from "@/assets/icons/person.svg";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import { DictionaryEntry } from "@/constants/content";
import { Menu } from "lucide-react";

const Navbar = ({ dict }: { dict: DictionaryEntry }) => {
  return (
    <nav className={`flex justify-between items-center ${styles.nav}`}>
      <div className={styles.burger}>
        <Menu />
      </div>
      <ul className={`flex gap-6 ${styles["nav-links"]}`}>
        <NavLink href={`/`} text={dict.header.nav.home} />
        <NavLink href={`/`} text={dict.header.nav.products} isDropdown />
        <NavLink href={`/`} text={dict.header.nav.entertainment} />
        <NavLink href={`/`} text={dict.header.nav.support} />
      </ul>
      <div
        className={`flex justify-center items-center ${styles["apple-wrap"]}`}
      >
        <Apple />
      </div>
      <div className={styles["nav-user--action"]}>
        <div className={`flex items-center ${styles["input-wrap"]}`}>
          <div
            className={`flex justify-center items-center ${styles["search-wrap"]}`}
          >
            <Search />
          </div>
          <input
            className={styles.input}
            type="text"
            placeholder={dict.header.search}
          />
        </div>
        <ShoppingCart />
        <UserButton>
          <Person />
        </UserButton>
      </div>
    </nav>
  );
};

export default Navbar;
