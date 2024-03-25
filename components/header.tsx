"use client";

import { useEffect, useState } from "react";
import SearchComponent from "./searchComponent";

export default function Header() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setScrolling(false);
      } else {
        setScrolling(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`header z-50 fixed px-20 py-4 flex justify-between flex-wrap w-full ${
          scrolling
            ? "bg-black transition-colors duration-700"
            : "bg-transparent transition-colors duration-700"
        }`}
      >
        <div className="flex items-center gap-10 flex-wrap">
          <h2 className="title scroll-m-20 text-xl font-bold tracking-tight lg:text-3xl text-red-600 ">
            NotFlix
          </h2>
          <ul className="navbar flex gap-4 lg:text-sm font-normal">
            <li>Hem</li>
            <li>Serier</li>
            <li>Filmer</li>
            <li>Nytt och populärt</li>
            <li>Min lista</li>
            <li>Bläddra efter språk</li>
          </ul>
        </div>
        <div className="flex flex-wrap">
          <ul className="second-navbar flex gap-4 lg:text-sm items-center">
            <SearchComponent />
            <li>Barn</li>
            <li>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14 3V3.28988C16.8915 4.15043 19 6.82898 19 10V17H20V19H4V17H5V10C5 6.82898 7.10851 4.15043 10 3.28988V3C10 1.89543 10.8954 1 12 1C13.1046 1 14 1.89543 14 3ZM7 17H17V10C17 7.23858 14.7614 5 12 5C9.23858 5 7 7.23858 7 10V17ZM14 21V20H10V21C10 22.1046 10.8954 23 12 23C13.1046 23 14 22.1046 14 21Z"
                  fill="currentColor"
                />
              </svg>
            </li>
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
