import Evolution from "./Evolution.jsx";
import TypeEffect from "./TypeEffect.jsx";
import Logo from "./Logo.jsx";

export default function CardInfo() {
  return (
    <div className="bg-purple-100 p-4 my-4 rounded">
      <h3 className="font-semibold mb-2">CardInfo Component</h3>
      <div className="space-y-2">
        <Evolution />
        <TypeEffect />
        <Logo />
      </div>
    </div>
  );
}
