import { Smile } from "lucide-react";
import React from "react";
import { useLogoContext } from "../context/LogoContext";

const LogoPreview = () => {
  const { icon, background } = useLogoContext();

  console.log(background.padding);

  return (
    <div className="flex h-full items-center justify-center">
      <div
        style={{ padding: `${background.padding}px` }}
        className="grid size-[512px] place-items-center border-2 border-dashed border-gray-300"
      >
        <div
          style={{
            borderRadius: `${background.rounded}px`,
            background: background.background,
          }}
          className="flex h-full w-full items-center justify-center bg-orange-500"
        >
          <Smile
            size={icon.size}
            color={icon.color}
            style={{ transform: `rotate(${icon.rotate}deg)` }}
            className="text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default LogoPreview;
