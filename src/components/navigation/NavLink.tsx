"use client";
import Link from "next/link";

import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
const NavLink = ({
  href,
  text,
  isDropdown,
}: {
  href: string;
  text: string;
  isDropdown?: boolean;
}) => {
  const pathname = usePathname();
  // ofc i'd make much complex logic with the dropdown, but it's sufficient imo
  return (
    <li>
      <Link
        className={`${
          pathname === href ? "font-semibold" : "font-normal"
        } flex gap-3 items-center`}
        href={href}
      >
        {text}
        {isDropdown && <ChevronDown size={22} className="pt-[2px]" />}
      </Link>
    </li>
  );
};

export default NavLink;
