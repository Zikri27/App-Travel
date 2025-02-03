/* eslint-disable no-unused-vars */
import React from 'react';

function InfoTicket() {
  return (
    <>
      <section>
        <h2 className="text-2xl font-bold text-center mt-12">Kenali Lebih Jauh Kelas Bus Sebelum Pesan Tiket Bus</h2>
        <div className="grid grid-cols-1 mx-auto md:w-[900px] lg:w-[1100px] sm:w-[550px] h-36 overflow-scroll translate-y-8 ">
          <p>Sebelum beli tiket bus online di tiket.com, nggak ada salahnya buat kenal lebih jauh kelas bus. Biar nanti nggak bingung waktu menentukan ingin pesan kelas tiket bus apa. Intip daftarnya!</p> <br />
          <h5 className="text-base font-bold font-sans">1. Bus Ekonomi</h5>
          <p>Bus Ekonomi memiliki harga tiket bus lebih murah dibanding dengan bus kelas lain. Bus Ekonomi biasanya terbagi menjadi dua, yaitu Bus Ekonomi AC dan Bus Ekonomi Non-AC. Konfigurasi tempat duduk bus ekonomi terdiri dari 3-2.</p>
          <br />
          <h5 className="text-base font-bold font-sans">2. Bus VIP</h5>
          <br />
          <p>
            Bus VIP merupakan bus prioritas yang menawarkan fasilitas eksklusif. Jika naik Bus VIP kamu akan mendapatkan fasilitas seperti bantal, selimut, kursi recliner, CCTV, colokan USB, hiburan, toilet, kursi recliner, sandaran kaki,
            lampu baca, dan konfigurasi kursi 2-2. Lazimnya Bus VIP memiliki waktu perjalanan lebih singkat.
          </p>
          <br />
          <h5 className="text-base font-bold font-sans">3. Bus Eksekutif</h5>
          <br />
          <p>
            Bus Eksekutif bisa menjadi pilihan buat kamu yang punya bujet lebih dan menginginkan fasilitas berkelas. Fasilitas yang didapatkan dari Bus Eksekutif antara lain full AC, kursi recliner, toilet, hiburan, selimut, lampu baca,
            bantal, hingga colokan USB. Konfigurasi tempat duduk di Bus Eksekutif biasanya 2-2. Dalam beberapa kasus, Bus Eksekutif cenderung memiliki waktu tempuh lebih lama dibanding Bus VIP.
          </p>
          <br />
          <h5 className="text-base font-bold font-sans">4. Bus Super Eksekutif</h5>
          <br />
          <p>Bus Super Eksekutif memiliki jarak tempuh lebih cepat dibandingkan dengan Bus Eksekutif. Meski begitu, fasilitas yang didapatkan dari Bus Super Eksekutif hampir sama dengan Bus Eksekutif.</p>
          <br />
          <h5 className="text-base font-bold font-sans">5. Bus Suite Class</h5>
          <br />
          <p>Bus Suite Class adalah opsi tepat buat kamu yang ingin merasakan pengalaman naik sleeper bus. Yup, Bus Suite Class memiliki kursi yang bisa direbahkan (sleeper) dengan pengaturan kursi 1-1.</p>
          <br />
        </div>
      </section>
    </>
  );
}

export default InfoTicket;
