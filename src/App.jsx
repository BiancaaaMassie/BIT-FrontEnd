import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-center">
      <Header title="Pokédex Project" />
      <main className="flex-1 p-6">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
