import CustomCursor from "@/components/ui/CustomCursor";
import IntroLoader from "@/components/ui/IntroLoader";
import ScrollTopButton from "@/components/ui/ScrollTopButton";
import ThemeToggle from "@/components/ui/ThemeToggle";
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
