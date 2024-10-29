import { ImageConfig } from "konva/lib/shapes/Image";
import { ChangeEvent, useRef } from "react";
import { useShallow } from "zustand/react/shallow";

import convertToBase64 from "@/helpers/convertToBase64";
import { useAppStore } from "@/store/app";

import { Hint } from "./Hint";
import { Input } from "./ui/input";

const ImageUploader = () => {
  const [selectedType, selectedId, constructorItems, updateConstructorItems] =
    useAppStore(
      useShallow((state) => [
        state.selectedType,
        state.selectedId,
        state.constructorItems,
        state.updateConstructorItems,
      ]),
    );

  const uploadImageRef = useRef<HTMLInputElement>(null);

  if (!selectedId || selectedType !== "image") {
    return null;
  }

  const selectedConstructorItem = constructorItems
    ? constructorItems.find((item) => item.itemId === selectedId)
    : null;

  const onImageInputChange = async (
    e: ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    const file = e.target?.files?.[0];

    if (file) {
      const base64 = (await convertToBase64(file)) as Extract<
        ImageConfig,
        "image"
      >;

      if (base64) {
        if (selectedConstructorItem) {
          const newItem = {
            ...selectedConstructorItem,
            image: base64,
          };

          updateConstructorItems([
            ...constructorItems.filter((item) => item.itemId !== selectedId),
            newItem,
          ]);
        }

        if (uploadImageRef.current) {
          uploadImageRef.current.value = "";
        }
      }
    }
  };

  return (
    <div className="flex flex-col gap-y-2 border-b-[1px] border-black p-2 dark:border-slate-500">
      <span className="text-center text-sm font-semibold">ImageUploader</span>

      <Hint label="Size up to 3MB max.">
        <Input
          ref={uploadImageRef}
          id="bg-image"
          type="file"
          className="w-full cursor-pointer bg-transparent"
          onChange={onImageInputChange}
        />
      </Hint>
    </div>
  );
};

export default ImageUploader;
