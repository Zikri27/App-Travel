/* eslint-disable no-unused-vars */
import React from 'react';

function TypeCars() {
  return (
    <>
      <section>
        <h2 className="text-2xl font-bold text-center mt-12">Jenis-jenis Mobil Travel atau Shuttle Bus</h2>
        <div className="grid grid-cols-1 mx-auto md:w-[900px] lg:w-[1100px] sm:w-[550px] h-40 overflow-scroll translate-y-8 ">
          <p>Sudah mengetahui jenis-jenis bus, sekarang saatnya mengenal jenis-jenis mobil shuttle atau travel yang biasa digunakan untuk perjalanan yang lebih singkat. Yuk cek jenis-jenis mobil shuttle yang ada di tiket.com berikut:</p>{' '}
          <br />
          <h5 className="text-base font-bold font-sans">1. Mobil Shuttle</h5>
          <br />
          <p>
            Mobil Shuttle lazimnya memiliki kapasitas penumpang 8-14 kursi. Fasilitas yang didapatkan saat naik mobil shuttle bus antara lain full AC, air mineral, kursi recliner, lampu baca, dan colokan USB. Untuk konfigurasi tempat duduk
            tergantung dengan masing-masing jenis mobil shuttle, ada yang 1-1, 1-2, atau 2-3.
          </p>
          <br />
          <h5 className="text-base font-bold font-sans">2. Shuttle Toyota Hiace</h5>
          <br />
          <p>
            Shuttle Toyota Hiace memiliki kapasitas penumpang sekitar 8-15 kursi. Saat naik Shuttle Toyota Hiace kamu akan mendapatkan fasilitas seperti full AC, colokan USB, kursi recliner, dan lampu baca. Bahkan di beberapa agen travel
            menyediakan fasilitas makan dan air mineral.
          </p>
          <br />
        </div>
      </section>
    </>
  );
}

export default TypeCars;
