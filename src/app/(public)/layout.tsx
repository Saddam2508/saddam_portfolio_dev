import CustomCursor from "@/components/ui/custom-cursor";
import IntroLoader from "@/components/ui/intro-loader";
import ScrollTopButton from "@/components/ui/scroll-top-button";
import ThemeToggle from "@/components/ui/theme-toggle";
import Navbar from "@/components/public/navbar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <IntroLoader />
      <CustomCursor />
      <ThemeToggle />
      <ScrollTopButton />
      {children}
    </>
  );
}
