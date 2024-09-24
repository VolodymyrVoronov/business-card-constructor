import { ShellIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface LoaderProps {
  containerClassName?: string;
  iconClassName?: string;
}

const Loader = ({ containerClassName, iconClassName }: LoaderProps) => {
  return (
    <div
      className={cn(
        "flex flex-col h-screen w-full justify-center items-center",
        containerClassName
      )}
    >
      <ShellIcon
        className={cn("animate-spin-reverse size-10", iconClassName)}
      />
    </div>
  );
};

export default Loader;
