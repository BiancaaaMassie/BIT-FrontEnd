import Logo from "./Logo";
import Search from "./Search";

function Header({ title }) {
  return (
    <header className="bg-red-500 text-white p-4 flex justify-between items-center">
      <Logo text={title} />
      <Search />
    </header>
  );
}

export default Header;
