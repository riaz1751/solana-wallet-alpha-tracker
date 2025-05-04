import Image from "next/image";
import styles from "./page.module.css";

'use client';

import React, { useState } from 'react';

export default function Home() {
  const [savedWallets, setSavedWallets] = useState<{ address: string; tag: string }[]>([]);
  const [newWallet, setNewWallet] = useState('');
  const [walletTag, setWalletTag] = useState('');

  const handleAddWallet = () => {
    if (newWallet && walletTag) {
      setSavedWallets([...savedWallets, { address: newWallet, tag: walletTag }]);
      setNewWallet('');
      setWalletTag('');
    }
  };

  const handleRemoveWallet = (index: number) => {
    const updated = [...savedWallets];
    updated.splice(index, 1);
    setSavedWallets(updated);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-6 font-sans">
      <h1 className="text-3xl font-bold text-center mb-10">Solana Alpha Wallet Tracker</h1>

      {/* Saved Wallet Addresses Section */}
      <section className="mb-10 bg-gray-900 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Saved Wallet Addresses</h2>
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <input
            type="text"
            placeholder="Wallet Address"
            value={newWallet}
            onChange={(e) => setNewWallet(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            placeholder="Tag"
            value={walletTag}
            onChange={(e) => setWalletTag(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={handleAddWallet}
            className="bg-purple-600 hover:bg-purple-700 transition-colors px-4 py-2 rounded-lg text-white font-medium"
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {savedWallets.map((wallet, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-800 px-4 py-2 rounded-lg"
            >
              <div>
                <p className="font-medium text-sm">{wallet.address}</p>
                <p className="text-gray-400 text-xs">Tag: {wallet.tag}</p>
              </div>
              <button
                onClick={() => handleRemoveWallet(index)}
                className="text-red-400 hover:text-red-600 text-sm"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Wallet Tracker Live Feed Section */}
      <section className="mb-10 bg-gray-900 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Wallet Tracker</h2>
        <p className="text-sm text-gray-400 mb-4">
          This feed will notify you when 3 or more saved wallets buy into the same token within 30 mins to 1 hour.
        </p>
        <div className="h-40 bg-gray-800 rounded-lg p-4 overflow-y-auto">
          <p className="text-gray-400 text-sm">Live activity feed will appear here...</p>
        </div>
      </section>

      {/* Wallet Analyzer Section */}
      <section className="mb-10 bg-gray-900 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Wallet Analyzer</h2>
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
            Analyze Wallet
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
