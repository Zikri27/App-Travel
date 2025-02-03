/* eslint-disable no-unused-vars */
import React from 'react';
import Carousel from './Carousel';
import Feature from './feature';
import Rute from './Rute';
import SectionEnd from './SectionEnd';

function Promosi() {
  return (
    <div>
      <section className="grid  justify-center mt-10">
        <h2 className="text-3xl font-bold text-slate-950 mb-7">Fitur Bus & Travel di travel.com</h2>
        <img src="./img/logo/fitur.webp" alt="fitur" className="w-full" />
      </section>
      <section className="grid  justify-center mt-10">
        <h2 className="text-3xl font-bold text-slate-950 mb-7">Beli tiket Hanya dengan Mata Uang IDR</h2>
        <img src="./img/logo/uang.webp" alt="uang" className="w-full" />
      </section>
    </div>
  );
}

function Main() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center bg-gray-900">
        <img src="./img/logo/bus.avif" alt="bus" className="absolute top-0 left-0 w-full h-full object-cover object-center" />
        <div className="relative z-10 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold shadow-lg">Yuk Cari Tiket!</h2>
        </div>
      </section>

      {/* Keuntungan */}
      <section className="mt-10 px-6 sm:px-10 lg:px-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Lebih Hemat dan Bebas Khawatir</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start space-x-4">
            <img src="./img/logo/chair.png" alt="chair" className="w-14" />
            <div>
              <h5 className="text-xl font-semibold">Pasti Dapat Kursi</h5>
              <p className="text-gray-600 text-base">Bisa langsung berangkat dengan nyaman, bebas khawatir.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <img src="./img/logo/diskon.png" alt="diskon" className="w-14" />
            <div>
              <h5 className="text-xl font-semibold">Diskon Setiap Hari</h5>
              <p className="text-gray-600 text-base">Nikmati harga spesial biar budget perjalanan makin aman.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Informasi Perjalanan */}
      <section className="w-full mt-12 px-6 sm:px-10 lg:px-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Penting untuk Perjalananmu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex items-start space-x-4">
            <img src="./img/logo/lampu.png" alt="lampu" className="w-16" />
            <div>
              <h5 className="text-lg font-semibold">Cara Memesan Bus & Travel</h5>
              <p className="text-gray-600 text-sm">Yuk, cari tahu mudahnya cara memesan Bus & Travel di ticket.com</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <img src="./img/logo/tanya.png" alt="tanya" className="w-14" />
            <div>
              <h5 className="text-lg font-semibold">Pertanyaan Sering Diajukan</h5>
              <p className="text-gray-600 text-sm">Temukan jawaban atas pertanyaan seputar Bus & Travel di ticket.com</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <img src="./img/logo/buku.png" alt="buku" className="w-14" />
            <div>
              <h5 className="text-lg font-semibold">Persyaratan Perjalanan</h5>
              <p className="text-gray-600 text-sm">Cek Protokol dan syarat perjalanan selama pandemi</p>
            </div>
          </div>
        </div>
      </section>

      <Promosi />
      <Carousel />
      <Feature />
      <Rute />
      <SectionEnd />
    </main>
  );
}

export default Main;
