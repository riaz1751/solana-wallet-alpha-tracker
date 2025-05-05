import Image from "next/image";
import styles from "./page.module.css";

'use client';

import React, { useState } from 'react';
import SavedWallets from '../components/savedWallets';
import WalletTracker from '../components/walletTracker';
import WalletAnalyser from '../components/walletAnalyser';
import WalletConfluence from '../components/walletConfluence';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-6 font-sans">
      <h1 className="text-3xl font-bold text-center mb-10">Solana Alpha Wallet Tracker</h1>

      <SavedWallets />
      <WalletTracker />
      <WalletAnalyser />
      <WalletConfluence />
    </main>
  );
}
