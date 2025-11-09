import React from "react";
import Home from "./components/Home/Home.jsx";


export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow">
        <Home />
      </main>
    </div>
  );
}
