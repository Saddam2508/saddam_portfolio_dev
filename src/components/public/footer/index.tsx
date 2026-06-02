import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/portfolio";
import { socialLinks } from "@/data/socialLinks";
import { footerLinks } from "./footerLinks";
import { FooterSocialIcon } from "./FooterSocialIcon";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-4 pb-10 pt-14 sm:px-6 lg:px-8">
      <div className="footer-shell mx-auto max-w-7xl rounded-[2rem] px-5 py-8 sm:rounded-[2.5rem] sm:px-10 sm:py-10">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social inline-flex h-[3.2rem] w-[3.2rem] items-center justify-center rounded-full"
              aria-label={link.label}
            >
              <FooterSocialIcon label={link.label} />
            </Link>
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:mt-10">
          <div className="footer-logo flex h-24 w-24 items-center justify-center sm:h-28 sm:w-28">
            <Image
              src="/favicon-logo.png"
              alt={`${profile.name} logo`}
              width={112}
              height={112}
              className="h-[4.75rem] w-[4.75rem] object-contain sm:h-[5.75rem] sm:w-[5.75rem]"
            />
          </div>
        </div>

        <nav className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:mt-10 sm:gap-x-8 sm:gap-y-4">
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="footer-link text-base font-semibold sm:text-xl"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <p className="footer-copy mt-8 text-center text-sm sm:mt-10 sm:text-base">
          &copy; {year} All rights reserved by {profile.name}
        </p>
      </div>
    </footer>
  );
}
