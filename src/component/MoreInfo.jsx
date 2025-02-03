/* eslint-disable no-unused-vars */
import React from 'react';

function MoreInfo() {
  return (
    <div className=" bg-slate-300">
      <div className="container mx-auto grid lg:grid-cols-5 sm:grid-cols-2 md:grid-cols-3 gap-8 p-9">
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-600">
            travel<span className="text-orange-400">.com</span>
          </h2>
          <div className="flex items-center w-56 flex-wrap gap-1 font-secondary">
            <img src="./img/logo/wa.png" alt="whatsapp" className="w-7 h-7 " />
            <p className="ms-1 text-slate-500 text-base"> WhatsApp</p>
            <span className="ms-7">
              {' '}
              <a href="#" className="hover:text-blue-700">
                +62 821 1234 5678
              </a>
            </span>
          </div>
          <div className="flex items-center w-36 flex-wrap font-secondary ">
            <img src="./img/logo/email.png" alt="email" className="w-7 h-7 " />
            <p className="ms-4 text-slate-500 text-base"> Email</p>
            <span className="ms-12">
              <a href="#" className="hover:text-blue-700">
                cs@travel.com
              </a>
            </span>
          </div>
          <div className="flex items-center w-72 flex-wrap gap-1 font-secondary">
            <img src="./img/logo/call-center.png" alt="pusat panggilan" className="w-7 h-7 -mt-20" />
            <div className="w-56  ms-3 space-y-2">
              <p className="text-slate-500 text-base"> Pusat Panggilan</p>
              <p className="text-sm"> Khusus Indonesia</p>
              <span>
                {' '}
                <a href="#" className="hover:text-blue-700">
                  +62 876 5432 9876
                </a>
              </span>
              <p className="text-sm">Internasional</p>
              <span>
                <a href="#" className="hover:text-blue-700">
                  +62 892 1234 4321
                </a>
              </span>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="font-semibold text-xl mb-4">Perusahaan</h3>
            <ul className="space-y-4 font-secondary">
              <li>
                <a href="#" className="hover:text-blue-700">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700">
                  Karir
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700">
                  Korporasi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700">
                  Afiliasi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700">
                  Blibli Ticket Rewards
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700">
                  Perlindungan
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <div>
            <h3 className="font-semibold text-xl mb-4">Produk</h3>
            <ul className="space-y-4 font-secondary">
              <li>
                <a href="#" className="hover:text-blue-700">
                  Pesawat
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700">
                  Hotel
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700">
                  Vila & Apt.
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700">
                  To do
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <div>
            <h3 className="font-semibold text-xl mb-4">Dukungan</h3>
            <ul className="space-y-4 font-secondary">
              <li>
                <a href="#" className="hover:text-blue-700">
                  Pusat Bantuan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700">
                  Group Booking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700">
                  Syarat & Ketentuan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700">
                  Daftarkan Hotel Kamu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700">
                  Daftarkan Aktivitas / Event Kamu
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <div>
            <h3 className="font-semibold text-xl mb-2 lg:ms-4 sm:ms-0">Lebih murah di aplikasi</h3>
            <a href="#">
              <img src="./img/logo/app-store.png" alt="app store" className="w-56" />
            </a>
            <a href="#">
              <img src="./img/logo/play-store.png" alt="play store" className="w-56 -mt-20" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MoreInfo;
