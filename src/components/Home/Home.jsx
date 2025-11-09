import Search from "./Search.jsx";
import CardInfo from "./CardInfo/CardInfo.jsx";

export default function Home() {
  return (
    <div className="bg-blue-50 p-6 text-center">
      <h2 className="text-xl font-bold mb-4">[Home Component]</h2>
      <Search />
      <CardInfo />
    </div>
  );
}
