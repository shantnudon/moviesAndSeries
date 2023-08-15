import Link from "next/link";
import React from "react";

const navBar = () => {
  return (
    <>
      <nav class="bg-slate-500 mb-10 font-">
        <div class="w-full mx-auto">
          <div class="mx-2 flex flex-wrap items-center justify-between">
            <Link href="#" class="flex">
              ShantnuDON
            </Link>
            <div class="flex md:hidden md:order-2">
              <button
                data-collapse-toggle="mobileMenu"
                type="button"
                class="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
                aria-controls="mobileMenu"
                aria-expanded="false"
              >
                <span class="sr-only">Main Menu</span>
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  class="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              class="hidden md:flex justify-between items-end w-full md:w-auto md:order-1"
              id="mobileMenu"
            >
              <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                <Link href="/">
                  <li>All</li>
                </Link>
                <Link href="/">
                  <li>Movies</li>
                </Link>
                <Link href="/">
                  <li>Series</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default navBar;
