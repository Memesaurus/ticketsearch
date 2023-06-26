import { roboto } from "@/app/Fonts/Fonts";
import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";
import StoreProvider from "@/app/redux/StoreProvider";
import "./globals.css";

export const metadata = {
  title: "Билетопоиск",
  description: "Сайт для Шри",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <StoreProvider>
          <Header />
          <div className="container">{children}</div>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
