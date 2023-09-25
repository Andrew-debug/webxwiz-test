import styles from "../components.module.scss";
import Link from "next/link";
import { footerLinks } from "@/constants";

const Footer = () => (
  <section className="max-w-[1440px] mx-auto">
    <div className="flex flex-wrap justify-between gap-12">
      {footerLinks.map((linksObj, index) => (
        <div key={index}>
          {Object.entries(linksObj).map(([key, value]) => (
            <div key={key}>
              <div className="text-lg font-bold mt-8 mb-4">{key}</div>
              <div className="flex flex-col gap-4">
                {value.map((link: string, i: number) => (
                  <Link key={i} href={"/"} className="text-sm">
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
    <div className="w-full h-[1px] bg-zinc-300 my-8 mx-auto"></div>
    <div className="flex justify-between items-center pt-4 mb-12">
      <p>Copyright &#64; 2023 Apple Inc. All rights reserved.</p>
      <ul className={styles["sub-footer--links"]}>
        <li>
          <Link href={"/"}>Privacy Policy</Link>
        </li>
        <li>
          <Link href={"/"}>Term of Use</Link>
        </li>
        <li>
          <Link href={"/"}>Sales and Refunds</Link>
        </li>
        <li>
          <Link href={"/"}>Legal</Link>
        </li>
        <li>
          <Link href={"/"}>Site Map</Link>
        </li>
      </ul>
      <div>USA English</div>
    </div>
  </section>
);

export default Footer;
