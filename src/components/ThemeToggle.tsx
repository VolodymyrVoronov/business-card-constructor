import { Moon, Sun } from "lucide-react";
import { useShallow } from "zustand/react/shallow";

import { useThemeStore } from "../store/theme";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";

const ThemeToggle = (): JSX.Element => {
  const [setTheme] = useThemeStore(useShallow((state) => [state.setTheme]));

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button aria-label="Toggle theme" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="min-w-[8rem]">
        <DropdownMenuItem id="light" onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem id="dark" onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem id="system" onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggle;
