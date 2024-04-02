"use client";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SearchComponent from "../components/searchComponent";

export default function Header() {
  const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <>
      <header
        className={`header z-50 fixed px-14 py-4 flex justify-between flex-wrap w-full ${
          scrolling
            ? "bg-secondary-foreground transition-colors duration-700"
            : "bg-transparent transition-colors duration-700"
        }`}
      >
        <div className="flex items-center gap-10 flex-wrap">
          {!isSearchOpen && (
            <Link href={"./"}>
              <h2
                className="title scroll-m-20 text-xl font-bold tracking-tight lg:text-3xl text-red-600 cursor-pointer"
                onClick={closeMenu}
              >
                NotFlix
              </h2>
            </Link>
          )}

          <div className="md:hidden">
            {isMenuOpen && (
              <ul className="dropdown-menu absolute top-0 left-0 w-screen h-screen bg-zinc-900 flex flex-col justify-center items-center">
                <CloseIcon
                  className="text-white absolute top-5 right-5 cursor-pointer"
                  onClick={toggleMenu}
                />
                <Link href={"./"}>
                  <li className="cursor-pointer" onClick={closeMenu}>
                    Hem
                  </li>
                </Link>
                <li className="text-white">Serier</li>
                <li className="text-white">Filmer</li>
                <li className="text-white">Nytt och populärt</li>
                <Link href={"./mylist"}>
                  <li className="text-white cursor-pointer" onClick={closeMenu}>
                    Min lista
                  </li>
                </Link>
                <li className="text-white">Bläddra efter språk</li>
              </ul>
            )}
          </div>

          <ul className="navbar hidden md:flex gap-4 text-sm lg:text-sm md:text-xs font-normal">
            <Link href={"./"}>
              <li className="cursor-pointer" onClick={closeMenu}>
                Hem
              </li>
            </Link>
            <li>Serier</li>
            <li>Filmer</li>
            <li>Nytt och populärt</li>
            <Link href={"./mylist"}>
              <li className="cursor-pointer" onClick={closeMenu}>
                Min lista
              </li>
            </Link>
            <li>Bläddra efter språk</li>
          </ul>
        </div>
        <div className="flex flex-wrap">
          <ul className="second-navbar flex gap-4 lg:text-sm items-center">
            {!(
              pathname.startsWith("/filmview") || pathname.startsWith("/mylist")
            ) && (
              <SearchComponent
                isOpen={isSearchOpen}
                toggleSearch={toggleSearch}
              />
            )}
            <div className="hidden max-md:block">
              <MenuIcon
                className="text-white cursor-pointer"
                onClick={toggleMenu}
              />
            </div>

            <li>
              <img
                className="profile-picture w-6 h-6 object-cover"
                src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-dyrp6bw6adbulg5b.jpg"
                alt=""
              />
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
