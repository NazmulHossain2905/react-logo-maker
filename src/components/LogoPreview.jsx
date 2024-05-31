import { Smile } from "lucide-react";
import React from "react";

const LogoPreview = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="grid size-[512px] place-items-center border-2 border-dashed border-gray-300">
        <div className="flex h-full w-full items-center justify-center bg-orange-500">
          <Smile className="size-28 text-white" />
        </div>
      </div>
    </div>
  );
};

export default LogoPreview;
