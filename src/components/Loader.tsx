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
        "flex h-screen w-full scale-x-[-1] flex-col items-center justify-center",
        containerClassName,
      )}
    >
      <ShellIcon
        className={cn(
          "size-10 animate-spin-reverse text-purple-700",
          iconClassName,
        )}
      />
    </div>
  );
};

export default Loader;
