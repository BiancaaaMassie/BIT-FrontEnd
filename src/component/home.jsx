import React from "react";

function Home({ title }) {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-blue-600">{title}</h1>
      <p className="text-gray-700 mt-2">
        Ini adalah Home. Konten diambil dari props.
      </p>
    </div>
  );
}

export default Home;
