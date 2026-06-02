import Link from "next/link";
import { NavItem } from "./types";

type Props = {
  navItems: NavItem[];
  activeIndex: number;
  onNavClick: (href: string) => void;
};

export default function NavDesktop({
  navItems,
  activeIndex,
  onNavClick,
}: Props) {
  return (
    <nav className="hidden items-center gap-9 lg:flex">
      {navItems.map((item, index) => (
        <Link
          key={`${item.label}-${index}`}
          href={item.href}
          onClick={() => onNavClick(item.href)}
          className={`navbar-link navbar-navlink relative pb-2 text-lg font-semibold transition-colors ${
            activeIndex === index ? "is-active" : ""
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
