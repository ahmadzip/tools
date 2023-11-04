'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaReact } from 'react-icons/fa6';
import { GiHamburgerMenu } from 'react-icons/gi';
export default function Navbar() {
  const [isHidden, setIsHidden] = useState(true);

  const toggleMenu = () => {
    setIsHidden(!isHidden);
  };

  return (
    <nav className="bg-card">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <FaReact className="w-8 h-8 mr-3 text-font" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-font">Logo</span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={toggleMenu}>
          <span className="sr-only">Open main menu</span>
          <GiHamburgerMenu className="w-6 h-6" />
        </button>
        <div className={isHidden ? 'hidden w-full md:block md:w-auto' : 'w-full md:block md:w-auto'} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-font rounded-lg bg-card md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-card">
            <li>
              <Link href={'/'} className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
                Home
              </Link>
            </li>
            <li>
              <Link href={'/socialmedia/tiktok'} className="block py-2 pl-3 pr-4 text-font rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500md:dark:hover:bg-transparent">
                Tiktok
              </Link>
            </li>
            <li>
              <Link href={'/office/imagepdf'} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 md:dark:hover:bg-transparent">
                Image TO Pdf
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
