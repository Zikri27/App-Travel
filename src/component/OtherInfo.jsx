/* eslint-disable no-unused-vars */
import React from 'react';
import { FaFacebookSquare, FaLinkedin, FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

function OtherInfo() {
  return (
    <>
      <div className=" bg-slate-100">
        <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 p-12 ">
          <section>
            <h3 className="font-semibold mb-2">Partner</h3>
            <img src="./img/logo/wonderful-indo.png" alt="wonderful indonesia" className="w-40" />
            <p className="text-sm w-40 text-slate-500">Partner Resmi Kementrian Pariwisata Republik Indonesia</p>
          </section>

          <section className="-ms-5">
            <h3 className="font-semibold mb-2 ">Keamanan transaksimu</h3>
            <div className="flex items-center gap-3 mt-2">
              <img src="./img/logo/visa.webp" alt="visa" className="w-16" />
              <img src="./img/logo/master-card.webp" alt="master-card" className="w-16" />
              <img src="./img/logo/jcb.webp" alt="jcb" className="w-16" />
              <img src="./img/logo/safe-key.webp" alt="safe-key" className="w-16" />
            </div>
          </section>

          <section className="ms-10">
            <h3 className="font-semibold mb-2">Penghargaan</h3>
            <div className="flex items-center gap-3 mt-2">
              <img src="./img/logo/IATA.webp" alt="IATA" className="w-12" />
              <img src="./img/logo/TOP.webp" alt="TOP" className="w-12" />
              <img src="./img/logo/koin.webp" alt="koin" className="w-12" />
            </div>
          </section>
          <section>
            <h3 className="font-semibold mb-2">Ikuti kami</h3>
            <div className="flex items-center flex-wrap gap-3 mt-2 space-x-4">
              <FaFacebookSquare className="w-10 h-10" />
              <FaSquareXTwitter className="w-10 h-10" />
              <FaLinkedin className="w-10 h-10" />
              <FaYoutube className="w-10 h-10" />
              <FaInstagram className="w-10 h-10" />
              <FaTiktok className="w-10 h-10" />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default OtherInfo;
