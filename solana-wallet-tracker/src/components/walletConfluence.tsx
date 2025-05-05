'use client';

import React, { useState } from 'react';

export default function WalletConfluence() {
  const [tokenAddresses, setTokenAddresses] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const handleAddToken = () => {
    if (input.trim() !== '') {
      setTokenAddresses([...tokenAddresses, input.trim()]);
      setInput('');
    }
  };

  const handleRemoveToken = (index: number) => {
    setTokenAddresses(tokenAddresses.filter((_, i) => i !== index));
  };

  return (
    <section className="bg-gray-800 p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-xl font-semibold mb-4">Wallet Confluence</h2>
      <p className="mb-4 text-sm text-gray-400">
        Enter 1 or more Solana memecoin token addresses to find top profitable wallets that overlap across all tokens.
      </p>
      <div className="flex mb-4 gap-2">
        <input
          type="text"
          placeholder="Enter token address"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 rounded bg-gray-700 text-white border border-gray-600"
        />
        <button
          onClick={handleAddToken}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
      <ul className="mb-4">
        {tokenAddresses.map((address, index) => (
          <li key={index} className="flex justify-between items-center mb-2 bg-gray-700 p-2 rounded">
            <span>{address}</span>
            <button
              onClick={() => handleRemoveToken(index)}
              className="text-red-400 hover:text-red-600"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded disabled:opacity-50"
        disabled={tokenAddresses.length === 0}
      >
        Find Profitable Wallets
      </button>
    </section>
  );
}
