import Footer from "@/components/footer";
import Header from "@/components/header";
import { Inter } from "next/font/google";
import MovieProvider from "../context/MovieContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MovieProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </MovieProvider>
      </body>
    </html>
  );
}
