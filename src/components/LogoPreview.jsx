import { Smile } from "lucide-react";
import React from "react";
import { useLogoContext } from "../context/LogoContext";
import LucideIcon from "./LucideIcon";

const LogoPreview = () => {
  const { icon, background } = useLogoContext();

  return (
    <div className="flex h-full items-center justify-center">
      <div
        style={{ padding: `${background.padding}px` }}
        className="flex size-[512px] items-center justify-center border-2 border-dashed border-gray-300"
      >
        <div
          style={{
            borderRadius: `${background.rounded}px`,
            background: background.background,
          }}
          className="flex h-full w-full items-center justify-center bg-orange-500"
        >
          <LucideIcon
            name={icon.iconName}
            size={icon.size}
            color={icon.color}
            style={{ transform: `rotate(${icon.rotate}deg)` }}
          />
        </div>
      </div>
    </div>
  );
};

export default LogoPreview;
