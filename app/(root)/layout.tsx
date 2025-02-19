import Footer from "@/components/shared/footer/footer";
import Navbar from "@/components/shared/navbar/navbar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-yellow-50">{children}</main>
      <Footer />
    </div>
  );
}
