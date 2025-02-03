/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function RuteBus() {
  const [activeTab, setActiveTab] = useState('ramai');

  return (
    <div className="w-full max-w-5xl mt-24 mx-auto ">
      <h2 className="text-2xl font-bold mb-5">Rute Bus Populer</h2>
      <div className=" flex gap-4 border-b border-b-slate-300">
        <button onClick={() => setActiveTab('ramai')} className={`text-lg ${activeTab === 'ramai' ? `text-sky-700 border-b-2 border-blue-600` : `text-gray-400 `} cursor-pointer `}>
          Rute Bus Paling Ramai
        </button>
        <button onClick={() => setActiveTab('lainnya')} className={`text-lg ${activeTab === 'lainnya' ? `text-sky-700 border-b-2 border-blue-600` : `text-gray-400 `} cursor-pointer`}>
          Rute Lainnya
        </button>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'ramai' && (
          <motion.div
            key="ramai"
            className="p-4 grid md:grid-cols-4 sm:grid-cols-2 font-primary text-base space-y-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <p className="hover:text-blue-400 hover:underline">
              <a href="#"> Bus Surabaya - Jakarta</a>{' '}
            </p>
            <p className="hover:text-blue-400 hover:underline">
              <a href="#"> Bus Malang - Jakarta</a>
            </p>
            <p className="hover:text-blue-400 hover:underline">
              {' '}
              <a href="#"> Bus Semarang - Jakarta</a>
            </p>
            <p className="hover:text-blue-400 hover:underline">
              <a href="#"> Bus Bali - Jakarta</a>
            </p>

            <p className="hover:text-blue-400 hover:underline">
              <a href="#"> Bus Jakarta - Jogja</a>
            </p>
            <p className="hover:text-blue-400 hover:underline">
              <a href="#"> Bus Surabaya - Bali</a>{' '}
            </p>
            <p className="hover:text-blue-400 hover:underline">
              <a href="#"> Bus Surabaya - Bandung</a>{' '}
            </p>
            <p className="hover:text-blue-400 hover:underline">
              <a href="#"> Bus Padang - Jakarta</a>
            </p>

            <p className="hover:text-blue-400 hover:underline">
              {' '}
              <a href="#"> Bus Jogja - Jakarta</a>
            </p>
            <p className="hover:text-blue-400 hover:underline">
              {' '}
              <a href="#"> Bus Jakarta - Malang</a>
            </p>
            <p className="hover:text-blue-400 hover:underline">
              {' '}
              <a href="#"> Bus Bandung - Surabaya</a>
            </p>
            <p className="hover:text-blue-400 hover:underline">
              <a href="#"> Bus Malang - Bali</a>
            </p>

            <p className="hover:text-blue-400 hover:underline">
              <a href="#"> Bus Jakarta - Surabaya</a>
            </p>
            <p className="hover:text-blue-400 hover:underline">
              <a href="#"> Bus Palembang - Jakarta</a>
            </p>
            <p className="hover:text-blue-400 hover:underline">
              <a href="#"> Bus Jakarta - Lampung</a>
            </p>
            <p className="hover:text-blue-400 hover:underline">
              <a href="#"> Bus Jakarta - Padang</a>
            </p>
          </motion.div>
        )}

        {activeTab === 'lainnya' && (
          <motion.div key="lainnya" className="p-4 grid md:grid-cols-4 sm:grid-cols-2 font-primary text-base" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
            <p className="hover:text-blue-400 hover:underline">
              <a href="#"> Bus Bali - Malang</a>
            </p>
            <p className="hover:text-blue-400 hover:underline">
              <a href="#"> Bus Jakarta - Padang</a>
            </p>
            <p className="hover:text-blue-400 hover:underline">
              <a href="#"> Bus Solo - Jakarta</a>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default RuteBus;
