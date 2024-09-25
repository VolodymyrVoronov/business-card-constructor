import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="flex justify-between border-b-[1px] border-black p-2">
      <div>1</div>
      <div>2</div>
      <ThemeToggle />
    </header>
  );
};

export default Header;
