/* eslint-disable no-unused-vars */
import { footer } from 'framer-motion/client';
import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container flex justify-center lg:gap-[600px] sm:gap-56 p-12 bg-slate-300 max-w-full">
        <h3 className="text-slate-700 md:text-lg sm:text-base">© 2011-2025 PT. Global Tiket Network. All Rights Reserved.</h3>
        <h2 className="md:text-xl sm:text-lg font-bold text-blue-600">
          Blibli<span className="inline-block bg-yellow-400 w-3 h-3 rounded-full "></span>ticket
        </h2>
      </div>
    </footer>
  );
}

export default Footer;
