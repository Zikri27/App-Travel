/* eslint-disable no-unused-vars */
import React from 'react';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = ['./img/logo/p-1.webp', './img/logo/p-2.webp', './img/logo/p-3.webp', './img/logo/p-4.webp', './img/logo/p-5.webp', './img/logo/p-6.webp', './img/logo/p-7.webp', './img/logo/p-8.webp'];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () => setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <section className="grid md:grid-cols-2 sm:grid-cols-1  place-items-center mt-20">
      <div>
        <h2 className="text-3xl font-bold">Promo Spesial Bus & Travel</h2>
        <img src="./img/logo/diskon2.png" alt="diskon" className="w-20 mx-auto" />
      </div>
      <div className="relative w-full max-w-lg mx-auto lg:-ms-16 p-4">
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <motion.img key={index} src={images[index]} alt="Carousel Image" className="w-full h-64 object-cover" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.5 }} />
        </div>
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow cursor-pointer">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow cursor-pointer">
          <ChevronRight className="w-6 h-6" />
        </button>
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, i) => (
            <span key={i} className={`w-3 h-3 rounded-full ${i === index ? 'bg-blue-500' : 'bg-gray-300'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
