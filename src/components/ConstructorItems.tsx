import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store/app";

const ConstructorItems = () => {
  const [dimension, constructorItems] = useAppStore(
    useShallow((state) => [state.dimension, state.constructorItems]),
  );

  console.log("constructorItems", constructorItems);

  return null;
};

export default ConstructorItems;
