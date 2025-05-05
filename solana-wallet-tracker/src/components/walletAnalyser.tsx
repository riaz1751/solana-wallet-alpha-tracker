import React, { useState } from 'react';

export default function WalletAnalyser() {
  const [walletAddress, setWalletAddress] = useState('');
  const [stats, setStats] = useState<any>(null);

  const handleAnalyse = () => {
    // Placeholder logic for now
    setStats({
      tokensBought: 24,
      tokensSold: 18,
      avgHoldTime: '3 days',
      profitableSales: '72%',
    });
  };

  return (
    <section className="bg-gray-800 p-6 rounded-xl shadow mb-8">
      <h2 className="text-xl font-semibold mb-4">Wallet Analyser</h2>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <input
          type="text"
          placeholder="Enter Solana wallet address"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          className="flex-1 p-2 rounded bg-gray-700 text-white"
        />
        <button
          onClick={handleAnalyse}
          className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
        >
          Analyse
        </button>
      </div>

      {stats && (
        <div className="mt-6 text-sm">
          <p><strong>Tokens Bought:</strong> {stats.tokensBought}</p>
          <p><strong>Tokens Sold:</strong> {stats.tokensSold}</p>
          <p><strong>Average Hold Time:</strong> {stats.avgHoldTime}</p>
          <p><strong>Profitable Sales:</strong> {stats.profitableSales}</p>
        </div>
      )}
    </section>
  );
}
