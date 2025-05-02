import Image from "next/image";
import styles from "./page.module.css";

'use client';

import React, { useState } from 'react';

export default function Home() {
  const [selectedTime, setSelectedTime] = useState<'1h' | '24h' | '7d'>('24h');

  const timeOptions = ['1h', '24h', '7d'];

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-6 font-sans">
      <h1 className="text-3xl font-bold text-center mb-10">Solana Alpha Wallet Tracker</h1>

      {/* Trending Memecoins Section */}
      <section className="mb-10 bg-gray-900 p-6 rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Trending Memecoins</h2>
          <div className="space-x-2">
            {timeOptions.map((option) => (
              <button
                key={option}
                className={`px-4 py-1 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  selectedTime === option
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-700 text-gray-200 hover:bg-purple-500 hover:text-white'
                }`}
                onClick={() => setSelectedTime(option as '1h' | '24h' | '7d')}
              >
                {option.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 10 }).map((_, idx) => (
            <li
              key={idx}
              className="bg-gray-800 p-4 rounded-lg hover:bg-purple-800 transition-colors"
            >
              <p className="font-medium">$TOKEN{idx + 1}</p>
              <p className="text-sm text-gray-400">Volume: Placeholder</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Wallet Analyser Section */}
      <section className="mb-10 bg-gray-900 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Wallet Analyser</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter Solana Wallet Address"
            className="px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 transition-colors px-4 py-2 rounded-lg text-white font-medium"
          >
            Analyse Wallet
          </button>
        </form>
      </section>

      {/* Wallet Confluence Section */}
      <section className="bg-gray-900 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Wallet Confluence</h2>
        <form className="flex flex-col gap-4">
          <textarea
            placeholder="Enter Solana Token Addresses (one per line)"
            className="px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-500 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 transition-colors px-4 py-2 rounded-lg text-white font-medium"
          >
            Find Profitable Wallets
          </button>
        </form>
      </section>
    </main>
  );
}
