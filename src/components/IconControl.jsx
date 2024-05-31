import { Smile } from "lucide-react";
import React from "react";
import Slider from "./Slider";
import MovementControl from "./MovementControl";
import CustomColorPicker from "./CustomColorPicker";
import { useLogoContext } from "../context/LogoContext";

const IconControl = () => {
  const { icon, setIconStyle } = useLogoContext();

  return (
    <div>
      <div className="mb-1 font-medium">Icon</div>
      <div className="group flex size-12 cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-gray-200 hover:bg-gray-300">
        <Smile className="transition duration-500 group-hover:rotate-[360deg]" />
      </div>
      <div className="mt-5 flex flex-col gap-5">
        <Slider
          label="Size"
          min={10}
          max={500}
          name="size"
          defaultValue={icon.size}
          onChange={(size) => setIconStyle((prev) => ({ ...prev, size }))}
        />
        <Slider
          label="Rotate"
          max={360}
          name="rotate"
          unit="°"
          defaultValue={icon.rotate}
          onChange={(rotate) => setIconStyle((prev) => ({ ...prev, rotate }))}
        />

        <div>
          <div>
            <Slider
              label="Movement Step"
              min={1}
              max={30}
              name="movement"
              unit="px"
              defaultValue={icon.movementStep}
              onChange={(move) =>
                setIconStyle((prev) => ({ ...prev, movementStep: move }))
              }
            />
          </div>
          <div className="mt-3 flex items-center justify-center">
            <MovementControl />
          </div>
        </div>
        <div>
          <label className="mb-3 block font-medium">Icon Color</label>
          <CustomColorPicker
            hideControls
            defaultColor={icon.color}
            colorOnChange={(color) =>
              setIconStyle((prev) => ({ ...prev, color }))
            }
          />
        </div>
      </div>
    </div>
  );
};

export default IconControl;
