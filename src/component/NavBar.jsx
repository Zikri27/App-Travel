/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import { FaXmark } from 'react-icons/fa6';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { ChevronDownIcon } from 'lucide-react';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header>
        <div className="fixed flex items-center md:justify-evenly sm:justify-center gap-5 z-50 opacity-95 bg-gradient-to-r from-sky-500 via-orange-200 to-sky-600 w-full">
          <div className="md:w-36 sm:w-44">
            <img src="img/logo/travel.png" alt="logo travel" className="w-full" />
          </div>
          <div className="relative">
            <input type="text" placeholder="Mau Kemana ?" className="ring-black/40 ring-2 rounded-lg text-center text-slate-900 md:w-64 sm:w-52 h-12" />
            <img src="img/logo/icon.png" alt="Search Icon" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
          </div>

          {/* Large screen (lg ke atas) */}
          <nav className="hidden lg:flex">
            <ul className="flex gap-10 sm:gap-4">
              <li>
                <a href="#" className="md:text-2xl sm:text-xl hover:text-slate-100">
                  Bus
                </a>
              </li>
              <li>
                <a href="#" className="md:text-2xl sm:text-xl hover:text-slate-100">
                  Pesawat
                </a>
              </li>
              <li>
                <a href="#" className="md:text-2xl sm:text-xl hover:text-slate-100">
                  Kereta
                </a>
              </li>
              <li>
                <a href="#" className="md:text-2xl sm:text-xl hover:text-slate-100">
                  Villa & Hotel
                </a>
              </li>

              {/* Dropdown di layar besar */}
              <li>
                <Popover className="group">
                  <PopoverButton className="flex items-center gap-2">
                    <a href="#" className="md:text-2xl sm:text-xl hover:text-slate-100">
                      Lainnya
                    </a>
                    <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
                  </PopoverButton>
                  <PopoverPanel anchor="bottom" className="absolute mt-5 z-50 hover:bg-slate-400 sm:bg-linear-to-b from-sky-500 via-orange-200 to-sky-600  shadow-lg shadow-slate-950 rounded-md p-3 grid grid-cols-2 gap-4">
                    <a href="#" className="block hover:bg-gray-100 p-2">
                      Bus & Travel
                    </a>
                    <a href="#" className="block hover:bg-gray-100 p-2">
                      Ferry
                    </a>
                    <a href="#" className="block hover:bg-gray-100 p-2">
                      Sewa Mobil
                    </a>
                    <a href="#" className="block hover:bg-gray-100 p-2">
                      Event
                    </a>
                  </PopoverPanel>
                </Popover>
              </li>

              <li>
                <a href="#" className="md:text-2xl sm:text-xl hover:text-slate-500 bg-slate-100 rounded-lg p-2">
                  Masuk
                </a>
              </li>
              <li>
                <a href="#" className="md:text-2xl sm:text-xl hover:text-slate-500 rounded-lg bg-blue-400 p-2">
                  Daftar
                </a>
              </li>
            </ul>
          </nav>

          {/* Button toggle untuk hamburger menu */}
          <button onClick={() => setIsOpen(!isOpen)} className="p-4 z-30 lg:hidden text-white text-3xl cursor-pointer">
            {isOpen ? <FaXmark /> : <GiHamburgerMenu />}
          </button>

          {/* Hamburger menu untuk sm-md */}
          {isOpen && (
            <nav className="lg:hidden absolute top-0 left-0  bg-linear-to-b from-sky-500 via-orange-200 to-sky-600  text-center text-xl p-4 w-full">
              <ul className="flex flex-col space-y-3 gap-2">
                <li>
                  <a href="#" className="md:text-2xl sm:text-xl hover:text-slate-100">
                    Bus
                  </a>
                </li>
                <li>
                  <a href="#" className="md:text-2xl sm:text-xl hover:text-slate-100">
                    Pesawat
                  </a>
                </li>
                <li>
                  <a href="#" className="md:text-2xl sm:text-xl hover:text-slate-100">
                    Kereta
                  </a>
                </li>
                <li>
                  <a href="#" className="md:text-2xl sm:text-xl hover:text-slate-100">
                    Villa & Hotel
                  </a>
                </li>

                {/* Dropdown "Lainnya" selalu terbuka di layar kecil */}
                <li className="space-y-2">
                  <span className="md:text-2xl sm:text-xl font-semibold text-white">Lainnya</span>
                  <ul className="bg-blue-500 rounded-md p-3 grid grid-cols-2 gap-2">
                    <li>
                      <a href="#" className="block text-white hover:bg-blue-400 p-2">
                        Bus & Travel
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block text-white hover:bg-blue-400 p-2">
                        Ferry
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block text-white hover:bg-blue-400 p-2">
                        Sewa Mobil
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block text-white hover:bg-blue-400 p-2">
                        Event
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="md:text-2xl sm:text-xl hover:text-slate-500 bg-slate-100 rounded-lg p-2">
                    Masuk
                  </a>
                </li>
                <li>
                  <a href="#" className="md:text-2xl sm:text-xl hover:text-slate-500 rounded-lg bg-blue-400 p-2">
                    Daftar
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}

export default NavBar;
