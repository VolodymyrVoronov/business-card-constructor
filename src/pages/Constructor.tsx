import Header from "@/components/Header";

const Constructor = () => {
  return (
    <>
      <Header />

      <div className="grid h-full grid-cols-[300px_1fr_300px]">
        <div className="">1</div>
        <div className="">2</div>
        <div className="">3</div>
      </div>
    </>
  );
};

export default Constructor;
