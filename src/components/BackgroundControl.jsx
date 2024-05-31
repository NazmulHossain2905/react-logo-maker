import { Smile } from "lucide-react";
import React from "react";
import Slider from "./Slider";
import MovementControl from "./MovementControl";
import CustomColorPicker from "./CustomColorPicker";

const BackgroundControl = () => {
  return (
    <>
      <div className="mt-5 flex flex-col gap-5">
        <Slider
          label="Rounded"
          max={150}
          name="rounded"
          onChange={(rounded) => console.log(rounded)}
        />
        <Slider
          label="Padding"
          max={360}
          name="padding"
          onChange={(padding) => console.log(padding)}
        />

        <div>
          <label className="mb-3 block font-medium">Background Color</label>
          <CustomColorPicker />
        </div>
      </div>
    </>
  );
};

export default BackgroundControl;
