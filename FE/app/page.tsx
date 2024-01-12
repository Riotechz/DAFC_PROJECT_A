'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Profile from './components/profile';
import DafcInfo from './components/DafcInfo';

export default function Home() {
  return (
    <>
      <main className="overflow-hidden w-[500px] max-w-[100%] m-auto">
        <Profile />
        <DafcInfo />
      </main>
    </>
  );
}