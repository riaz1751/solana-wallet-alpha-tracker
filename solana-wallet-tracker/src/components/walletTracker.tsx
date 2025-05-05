'use client';

import React, { useEffect, useState } from 'react';

export default function WalletTracker() {
  const [notifications, setNotifications] = useState<string[]>([]);

  useEffect(() => {
    // Placeholder: Simulate real-time tracking of wallet buys
    const interval = setInterval(() => {
      const now = new Date().toLocaleTimeString();
      setNotifications((prev) => [
        `🚨 ${now}: 3 wallets bought token XYZ`,
        ...prev.slice(0, 9),
      ]);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Wallet Tracker</h2>
      <div className="bg-gray-800 rounded-xl p-4 space-y-2 max-h-60 overflow-y-auto">
        {notifications.map((note, idx) => (
          <div key={idx} className="text-sm bg-gray-700 p-2 rounded-md">
            {note}
          </div>
        ))}
      </div>
    </section>
  );
}
