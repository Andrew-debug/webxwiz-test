import UserButton from "../UserButton";
import NavLink from "./NavLink";
import styles from "./navbar.module.scss";
import Apple from "@/assets/icons/apple.svg";
import Search from "@/assets/icons/search.svg";
import Bag from "@/assets/icons/bag.svg";
import Person from "@/assets/icons/person.svg";
const Navbar = () => {
  return (
    <nav
      className={`flex justify-between items-center mx-auto my-4 w-full max-w-[1440px] ${styles.nav}`}
    >
      <ul className="flex gap-6">
        <NavLink href={`/`} text="Home" />
        <NavLink href={`/products`} text="Products" isDropdown />
        <NavLink href={`/entertainment`} text="Entertainment" />
        <NavLink href={`/support`} text="Support" />
      </ul>
      <section
        className={`flex justify-center items-center ${styles["apple-wrap"]}`}
      >
        <Apple />
      </section>
      <section className="flex items-center gap-4 mr-16">
        <div className={`flex items-center ${styles["input-wrap"]}`}>
          <div
            className={`flex justify-center items-center ${styles["search-wrap"]}`}
          >
            <Search />
          </div>
          <input className={styles.input} type="text" placeholder="Search" />
        </div>
        <UserButton href="/" Icon={Bag} />
        <UserButton href="/" Icon={Person} />
      </section>
    </nav>
  );
};

export default Navbar;
