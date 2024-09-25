import LeftSide from "@/layouts/LeftSide";
import RightSide from "@/layouts/RightSide";

import Header from "@/components/Header";

const Main = () => {
  return (
    <>
      <Header />

      <div className="grid h-[calc(100%-53px)] grid-cols-[300px_minmax(500px,1fr)_300px]">
        <LeftSide />
        <div className="">2</div>
        <RightSide />
      </div>
    </>
  );
};

export default Main;
