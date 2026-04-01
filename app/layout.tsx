import Navbar from "../component/navbar";
import Footer from "../component/footer";
import { ReactNode } from "react";
import "./globals.css";
import '../component/cart-icon';

export const metadata = {
  title: "ZiyadBooks - Katalog Buku Terbaik Indonesia",
  description: "Temukan buku favoritmu dari koleksi self-improvement, bisnis, psikologi, dan lainnya. Production-ready landing page.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="id">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
