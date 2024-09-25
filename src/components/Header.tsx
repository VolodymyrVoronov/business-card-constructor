import RedoUndoButtons from "./RedoUndoButtons";
import ResetButton from "./ResetButton";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="flex justify-between border-b-[1px] border-black p-2">
      <ResetButton />
      <RedoUndoButtons />
      <ThemeToggle />
    </header>
  );
};

export default Header;
