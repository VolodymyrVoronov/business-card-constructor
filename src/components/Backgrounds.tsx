import BackgroundColors from "./BackgroundColors";
import BackgroundGradients from "./BackgroundGradients";
import BackgroundOptions from "./BackgroundOptions";
import { Separator } from "./ui/separator";

const Backgrounds = () => {
  return (
    <div className="flex flex-col gap-y-2 border-b-[1px] border-black p-2 dark:border-slate-500">
      <BackgroundColors />
      <BackgroundGradients />

      <Separator
        orientation="horizontal"
        className="bg-black dark:bg-slate-500"
      />

      <BackgroundOptions />
    </div>
  );
};

export default Backgrounds;
