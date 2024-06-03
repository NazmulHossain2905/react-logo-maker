import React, { useEffect, useState } from "react";
import { useLogoContext } from "../context/LogoContext";
import LucideIcon from "./LucideIcon";

const LogoPreview = () => {
  const { icon, background, border } = useLogoContext();
  const [borderStyles, setBorderStyles] = useState({});

  useEffect(() => {
    const convertToObj = border?.reduce((prev, key) => {
      return {
        ...prev,
        [key.side]: `${key.properties?.width}px ${key.properties?.style} ${key.properties?.color}`,
      };
    }, {});

    setBorderStyles(convertToObj);
  }, [border]);

  return (
    <div className="flex h-full items-center justify-center">
      <div
        style={{ padding: `${background.padding}px` }}
        className="flex size-[512px] items-center justify-center border-2 border-dashed border-gray-300"
      >
        <div
          id="downloadLogo"
          style={{
            borderRadius: `${background.rounded}px`,
            background: background.background,
            ...borderStyles,
          }}
          className="flex h-full w-full items-center justify-center bg-blue-500"
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
