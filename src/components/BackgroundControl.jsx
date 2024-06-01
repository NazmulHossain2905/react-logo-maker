import React from "react";
import Slider from "./Slider";
import CustomColorPicker from "./CustomColorPicker";
import { useLogoContext } from "../context/LogoContext";

const BackgroundControl = () => {
  const { background, setBackgroundStyle } = useLogoContext();

  return (
    <div className="mt-1 flex flex-col gap-5">
      <Slider
        label="Rounded"
        max={256}
        name="rounded"
        defaultValue={background.rounded}
        onChange={(rounded) =>
          setBackgroundStyle((prev) => ({ ...prev, rounded }))
        }
      />
      <Slider
        label="Padding"
        max={224}
        name="padding"
        defaultValue={background.padding}
        onChange={(padding) =>
          setBackgroundStyle((prev) => ({ ...prev, padding }))
        }
      />

      <div>
        <label className="mb-3 block font-medium">Background Color</label>
        <CustomColorPicker
          defaultColor={background.background}
          colorOnChange={(color) =>
            setBackgroundStyle((prev) => ({ ...prev, background: color }))
          }
        />
      </div>
    </div>
  );
};

export default BackgroundControl;
