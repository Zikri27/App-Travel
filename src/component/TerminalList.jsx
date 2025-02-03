/* eslint-disable no-unused-vars */
import React from 'react';

function TerminalList() {
  return (
    <>
      <section>
        <h2 className="text-2xl font-bold text-center mt-12">Daftar Terminal Bus Terpopuler di Indonesia</h2>
        <div className="grid grid-cols-1 mx-auto md:w-[900px] lg:w-[1100px] sm:w-[550px] h-48 overflow-scroll translate-y-8 ">
          <p>
            Setelah mengenal jenis-jenis bus di Indonesia, kamu juga perlu mengetahui deretan terminal bus terpopuler yang tersebar di berbagai wilayah. Terminal bus ini cenderung luas dan memiliki fasilitas & layanan mumpuni. Berikut
            daftar terminal bus terpopuler di Indonesia:
          </p>{' '}
          <br />
          <h5 className="text-base font-bold font-sans">1. Terminal Kampung Rambutan Jakarta </h5>
          <br />
          <p>Terminal Kampung Rambutan merupakan terminal bus tipe A menjadi salah satu terminal andalan bagi warga yang hendak bepergian ke berbagai kota di provinsi maupun di wilayah Jabodetabek.</p>
          <br />
          <h5 className="text-base font-bold font-sans">2. Terminal Pulo Gebang Jakarta</h5>
          <br />
          <p>
            Terminal Pulo Gebang merupakan terminal bus tipe A dan menjadi terminal bus terbesar se-Asia Tenggara saat ini. Terminal Pulo Gebang memiliki konsep terminal modern dan dilengkapi dengan fasilitas-fasilitas penunjang. Bahkan
            Terminal Pulo Gebang sudah dilengkapi dengan sistem elektronik dalam hal pembelian tiket bus online, sistem informasi, dan boarding pass untuk memudahkan calon penumpang.
          </p>
          <br />
          <h5 className="text-base font-bold font-sans">3. Terminal Tirtonadi Solo</h5>
          <br />
          <p>
            Terminal Tirtonadi merupakan terminal bus tipe A dan merupakan terminal terbesar di Solo. Terminal Tirtonadi melayani bus AKAP (Antar Kota Antar Provinsi) dan AKDP (Angkutan Antar kota Dalam Provinsi). Terminal Tirtonadi juga
            memiliki jembatan penyebrangan yang terhubung dengan Stasiun Balapan Solo untuk mempermudah mobilitas penumpang.
          </p>
          <br />
          <h5 className="text-base font-bold font-sans">4. Terminal Leuwipanjang Bandung</h5>
          <br />
          <p>
            Terminal Leuwipanjang merupakan terminal di Bandung yang disebut-sebut fasilitasnya menyerupai bandara. Merupakan terminal bus tipe A, Terminal Leuwipanjang adalah terminal induk yang berada di area timur kota Bandung. Terminal
            Leuwipanjang melayani transportasi angkutan kota, bus kota, angkutan antar kota dalam provinsi (AKDP) sekaligus angkutan antarkota antar provinsi (AKAP).
          </p>
          <br />
          <h5 className="text-base font-bold font-sans">5. Terminal Purabaya Surabaya</h5>
          <br />
          <p>
            Terminal Purabaya atau biasa dikenal dengan Terminal Bungurasih adalah terminal bus tipe A yang melayani perjalanan bus Surabaya Raya dan sekitarnya. Setiap harinya terdapat lebih dari 1.000 unit bus yang mengantarkan perjalanan
            penumpang menjadikan Terminal Purabaya adalah salah satu terminal bus tersibuk di Asia Tenggara.
          </p>
          <br />
        </div>
      </section>
    </>
  );
}

export default TerminalList;
