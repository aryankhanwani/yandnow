import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LenisProvider from "@/components/ui/LenisProvider";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LenisProvider>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </LenisProvider>
  );
}
