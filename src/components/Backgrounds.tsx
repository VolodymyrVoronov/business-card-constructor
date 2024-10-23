import BackgroundColors from "./BackgroundColors";
import BackgroundGradients from "./BackgroundGradients";
import BackgroundOpacity from "./BackgroundOpacity";
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

      <div className="flex flex-col gap-y-3">
        <BackgroundOptions />
        <BackgroundOpacity />
      </div>
    </div>
  );
};

export default Backgrounds;
