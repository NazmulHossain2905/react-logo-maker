import React, { useState } from "react";
import Slider from "./Slider";
import CustomColorPicker from "./CustomColorPicker";
import { useLogoContext } from "../context/LogoContext";
import { Check, CircleSlash2 } from "lucide-react";

const BorderControl = () => {
  const { border, setBorderStyle } = useLogoContext();

  const borderStyleValues = [
    "dotted",
    "dashed",
    "solid",
    "double",
    "groove",
    "ridge",
    "inset",
    "outset",
    "none",
  ];
  const borderSides = [
    "border",
    "borderTop",
    "borderRight",
    "borderBottom",
    "borderLeft",
  ];

  const [currentSide, setCurrentSide] = useState(border[0]?.side);

  const defaultStyle = {
    side: "border",
    properties: {
      width: 15,
      style: "solid",
      color: "rgb(96 165 250)",
    },
  };

  const handleBorderSideChange = (side) => {
    setCurrentSide(side);

    const isExist = border?.findIndex((b) => b.side === side) !== -1;

    if (side === "border" && isExist) {
      setBorderStyle((prevBorder) =>
        prevBorder?.filter((b) => b.side === "border"),
      );
    } else if (side === "border") {
      setBorderStyle([{ ...defaultStyle }]);
    }

    if (side !== "border" && !isExist) {
      setBorderStyle((prevBorder) => [
        ...prevBorder?.filter((b) => b.side !== "border"),
        { ...defaultStyle, side },
      ]);
    }
  };

  const handleBorderPropertyChange = (key, value) => {
    setBorderStyle((prevBorder) => {
      const index = prevBorder?.findIndex((s) => s.side === currentSide);

      const copyBdr = [...prevBorder];
      copyBdr[index].properties = {
        ...copyBdr[index]?.properties,
        [key]: value,
      };

      return copyBdr;
    });
  };

  const getDefaultValue = (key) => {
    return border?.find((b) => b.side === currentSide)?.properties[key];
  };

  return (
    <>
      <div className="mb-5">
        <label className="font-medium">
          Border{" "}
          {currentSide === ""
            ? "Sides"
            : currentSide === "border"
              ? "All"
              : currentSide?.replace("border", "")}
        </label>
        <div className="mt-2 flex gap-4">
          {borderSides.map((side) => (
            <div
              key={side}
              style={{ [side]: "5px solid rgb(96 165 250)" }}
              className={`flex size-8 cursor-pointer items-center justify-center border border-dashed border-gray-300 ${side === currentSide ? "scale-110 bg-blue-200" : "bg-gray-100"}`}
              onClick={() => handleBorderSideChange(side)}
            >
              {border?.findIndex((b) => b.side === side) !== -1 ? (
                <Check className="size-5 text-blue-600" />
              ) : null}
            </div>
          ))}
          <div
            className={`flex size-8 cursor-pointer items-center justify-center border border-dashed border-gray-300 bg-red-100`}
            onClick={() => {
              setBorderStyle([]);
              setCurrentSide("");
            }}
          >
            <CircleSlash2 className="size-5 text-red-500" />
          </div>
        </div>
      </div>

      <div className="mt-1 flex flex-col gap-5">
        <Slider
          label="Border Width"
          max={100}
          name="width"
          defaultValue={getDefaultValue("width")}
          onChange={(width) => handleBorderPropertyChange("width", width)}
        />

        <div>
          <label className="font-medium">Border Style</label>
          <div className="mt-2 flex flex-wrap items-center gap-2.5">
            {borderStyleValues.map((value) => (
              <button
                style={{ border: `3px ${value} rgb(96 165 250)` }}
                className={`rounded-md p-1 px-3 
              capitalize transition-colors
            hover:bg-blue-500 hover:text-white 
            ${
              getDefaultValue("style") === value
                ? "bg-blue-500 text-white"
                : "bg-transparent text-blue-500"
            }
            `}
                key={value}
                onClick={() => handleBorderPropertyChange("style", value)}
              >
                {value}
              </button>
            ))}
          </div>
        </div>

        <div className="border-">
          <label className="mb-3 block font-medium">Border Color</label>
          <CustomColorPicker
            hideControls
            defaultColor={getDefaultValue("color")}
            colorOnChange={(color) =>
              handleBorderPropertyChange("color", color)
            }
          />
        </div>
      </div>
    </>
  );
};

export default BorderControl;
