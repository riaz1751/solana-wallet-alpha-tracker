import React, { useState } from 'react';

export default function SavedWallets() {
  const [wallets, setWallets] = useState<{ address: string; tag: string }[]>([]);
  const [address, setAddress] = useState('');
  const [tag, setTag] = useState('');

  const addWallet = () => {
    if (address && tag) {
      setWallets([...wallets, { address, tag }]);
      setAddress('');
      setTag('');
    }
  };

  const removeWallet = (index: number) => {
    setWallets(wallets.filter((_, i) => i !== index));
  };

  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Saved Wallets</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Wallet address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="p-2 rounded bg-gray-800 text-white w-1/2"
        />
        <input
          type="text"
          placeholder="Tag"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          className="p-2 rounded bg-gray-800 text-white w-1/3"
        />
        <button
          onClick={addWallet}
          className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white"
        >
          Add
        </button>
      </div>
      <ul>
        {wallets.map((wallet, index) => (
          <li key={index} className="flex justify-between items-center bg-gray-800 p-2 rounded mb-2">
            <span>{wallet.address} ({wallet.tag})</span>
            <button
              onClick={() => removeWallet(index)}
              className="text-red-500 hover:underline"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
