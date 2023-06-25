import { roboto } from "./Fonts/Fonts";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./globals.css";
import StoreProvider from "./redux/StoreProvider";

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
