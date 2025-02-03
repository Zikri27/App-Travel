/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function OrderBusPopuler() {
  const [activeTab, setActiveTab] = useState('PO');

  return (
    <div className="w-full max-w-5xl mt-14 mx-auto ">
      <h2 className="text-2xl font-bold mb-5">PO Bus Populer</h2>
      <div className=" flex gap-4 border-b border-b-slate-300">
        <button onClick={() => setActiveTab('PO')} className={` text-lg ${activeTab === 'PO' ? `text-sky-700 border-b-2 border-blue-600` : `text-gray-400 `} cursor-pointer `}>
          PO Bus Populer
        </button>
        <button onClick={() => setActiveTab('coba')} className={`text-lg ${activeTab === 'coba' ? `text-sky-700 border-b-2 border-blue-600` : `text-gray-400 `} cursor-pointer`}>
          Cobain Bus Ini!
        </button>
        <button onClick={() => setActiveTab('lainnya')} className={`text-lg ${activeTab === 'lainnya' ? `text-sky-700 border-b-2 border-blue-600` : `text-gray-400 `} cursor-pointer`}>
          Bus Lainnya
        </button>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'PO' && (
          <motion.div key="PO" className="p-4 grid md:grid-cols-4 sm:grid-cols-2 font-primary text-base space-y-6" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
            <p className="hover:text-blue-400 hover:underline">
              <a href="#"> Pahala Kencana</a>{' '}
            </p>
            <p className="hover:text-blue-400 hover:underline">
              <a href="#"> Gunung Harta</a>
            </p>
            <p className="hover:text-blue-400 hover:underline">
              {' '}
              <a href="#"> Haryanto</a>
            </p>
            <p className="hover:text-blue-400 hover:underline">
              <a href="#"> Raya</a>
            </p>

            <p className="hover:text-blue-400 hover:underline">
              <a href="#"> DAMRI</a>
            </p>
            <p className="hover:text-blue-400 hover:underline">
              <a href="#"> Agramas</a>{' '}
            </p>
            <p className="hover:text-blue-400 hover:underline">
              <a href="#"> 27Trans</a>{' '}
            </p>
            <p className="hover:text-blue-400 hover:underline">
              <a href="#"> Sembodo</a>
            </p>

            <p className="hover:text-blue-400 hover:underline">
              {' '}
              <a href="#"> Sinar Jaya</a>
            </p>
            <p className="hover:text-blue-400 hover:underline">
              {' '}
              <a href="#"> Safari Dharma Raya</a>
            </p>
            <p className="hover:text-blue-400 hover:underline">
              {' '}
              <a href="#"> Sumber Alam</a>
            </p>
            <p className="hover:text-blue-400 hover:underline">
              <a href="#"> NPM</a>
            </p>

            <p className="hover:text-blue-400 hover:underline">
              <a href="#"> Harapan Jaya</a>
            </p>
            <p className="hover:text-blue-400 hover:underline">
              <a href="#">Handoyo</a>
            </p>
            <p className="hover:text-blue-400 hover:underline">
              <a href="#"> Mtrans</a>
            </p>
            <p className="hover:text-blue-400 hover:underline">
              <a href="#"> MPM</a>
            </p>
          </motion.div>
        )}
        {activeTab === 'coba' && (
          <motion.div
            key="coba"
            className="p-4 grid md:grid-cols-4 sm:grid-cols-2 font-primary text-base space-y-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <p>
              <a href="#" className="hover:text-blue-400 hover:underline">
                {' '}
                ANS
              </a>
              <p className="text-[14px] text-slate-500">Bus Jawa Sumatra</p>
            </p>
            <p className="hover:text-blue-400 hover:underline">
              <a href="#"> Brave</a>
            </p>
            <p className="hover:text-blue-400 hover:underline">
              {' '}
              <a href="#"> Medali Mas</a>
            </p>
            <p className="hover:text-blue-400 hover:underline">
              <a href="#"> Sahaalah</a>
            </p>

            <p className="hover:text-blue-400 hover:underline">
              <a href="#"> Bejeu</a>
            </p>
            <p className="hover:text-blue-400 hover:underline">
              <a href="#"> Gunung Harta Solution</a>{' '}
            </p>
            <p className="hover:text-blue-400 hover:underline">
              <a href="#"> MGI</a>{' '}
            </p>
            <p>
              <a href="#" className="hover:text-blue-400 hover:underline">
                {' '}
                SAN
              </a>
              <p className="text-[14px] text-slate-500">Siliwangi Antar Nusa</p>
            </p>

            <p className="hover:text-blue-400 hover:underline">
              {' '}
              <a href="#"> Berlian Jaya</a>
            </p>
            <p className="hover:text-blue-400 hover:underline">
              {' '}
              <a href="#"> Kalisari</a>
            </p>
            <p className="hover:text-blue-400 hover:underline">
              {' '}
              <a href="#"> Muji Jaya</a>
            </p>
            <p className="hover:text-blue-400 hover:underline">
              <a href="#"> Sant Gold</a>
            </p>

            <p className="hover:text-blue-400 hover:underline">
              <a href="#"> Bintang Timur</a>
            </p>
            <p className="hover:text-blue-400 hover:underline">
              <a href="#"> Kupu-Kupu Ayu</a>
            </p>
            <p className="hover:text-blue-400 hover:underline">
              <a href="#"> Putra Pelangi</a>
            </p>
            <p className="hover:text-blue-400 hover:underline">
              <a href="#">Sari Indah</a>
            </p>
          </motion.div>
        )}

        {activeTab === 'lainnya' && (
          <motion.div key="lainnya" className="p-4 grid md:grid-cols-4 sm:grid-cols-2 font-primary text-base" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
            <p className="hover:text-blue-400 hover:underline">
              <a href="#"> Sudiro Tunggal Jaya</a>
            </p>
            <p className="hover:text-blue-400 hover:underline">
              <a href="#"> Tividi</a>
            </p>
            <p className="hover:text-blue-400 hover:underline">
              <a href="#">Unicorn Indorent</a>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default OrderBusPopuler;
