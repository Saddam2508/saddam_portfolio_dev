import Link from "next/link";
import { NavItem } from "./types";

type Props = {
  navItems: NavItem[];
  activeIndex: number;
  onNavClick: (href: string) => void;
  onClose: () => void;
};

export default function NavMobile({
  navItems,
  activeIndex,
  onNavClick,
  onClose,
}: Props) {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
      <nav className="navbar-mobile-panel grid gap-2 rounded-[1.6rem] p-3 sm:rounded-[2rem] sm:p-4 lg:hidden">
        {navItems.map((item, index) => (
          <Link
            key={`${item.label}-${index}`}
            href={item.href}
            onClick={() => {
              onNavClick(item.href);
              onClose();
            }}
            className={`navbar-mobile-link rounded-2xl px-4 py-3 text-base font-medium transition-colors ${
              activeIndex === index ? "is-active" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="#contact"
          onClick={onClose}
          className="button-hover-soft theme-outline-button mt-2 inline-flex items-center justify-center rounded-full px-5 py-3 text-base font-semibold"
        >
          Hire Me!
        </Link>
      </nav>
    </div>
  );
}
