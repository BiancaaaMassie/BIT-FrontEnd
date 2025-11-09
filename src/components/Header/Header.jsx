// src/components/Header/Header.jsx
import React from 'react';
import Logo from './Logo.jsx';
import Generations from './Generations/Generations.jsx';

export default function Header() {
  return (
    <header className="bg-pink-100 p-6 text-center shadow-md">
      <h1 className="text-2xl font-bold text-pink-800">[Header Component]</h1>
      <div className="mt-4">
        <Logo />
      </div>
      <div className="mt-6">
        <Generations />
      </div>
    </header>
  );
}