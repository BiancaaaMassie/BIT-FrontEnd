import React from "react";
import Search from "./Search";
import CardInfo from "./CardInfo/CardInfo";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        Welcome to Home Page
      </h1>

      <Search placeholder="Search your favorite card..." />

      <CardInfo
        name="Pikachu"
        description="An Electric-type Pokémon known for its cute appearance and lightning powers."
      />
    </div>
  );
}

export default Home;
