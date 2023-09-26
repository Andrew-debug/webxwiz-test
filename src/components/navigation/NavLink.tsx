"use client";
import Link from "next/link";

import { ChevronDown } from "lucide-react";
const NavLink = ({
  href,
  text,
  isDropdown,
}: {
  href: string;
  text: string;
  isDropdown?: boolean;
}) => {
  return (
    <li>
      <Link className={`flex gap-3 items-center`} href={href}>
        {text}
        {isDropdown && <ChevronDown size={22} className="pt-[2px]" />}
      </Link>
    </li>
  );
};

export default NavLink;
