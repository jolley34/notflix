import Footer from "@/components/footer";
import Header from "@/components/header";
import SearchProvider from "@/context/SearchContext";
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
        <SearchProvider>
          <MovieProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </MovieProvider>
        </SearchProvider>
      </body>
    </html>
  );
}
