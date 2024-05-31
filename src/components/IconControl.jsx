import { Smile } from "lucide-react";
import React from "react";
import Slider from "./Slider";
import MovementControl from "./MovementControl";

const IconControl = () => {
  return (
    <>
      <div className="mb-1 font-medium">Icon</div>
      <div className="group flex size-12 cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-gray-200 hover:bg-gray-300">
        <Smile className="transition duration-500 group-hover:rotate-[360deg]" />
      </div>
      <div className="mt-5 flex flex-col gap-5">
        <Slider
          label="Size"
          max={512}
          name="size"
          onChange={(size) => console.log(size)}
        />
        <Slider
          label="Rotate"
          max={360}
          name="rotate"
          unit="°"
          onChange={(rotate) => console.log(rotate)}
        />

        <div>
          <div>
            <Slider
              label="Movement Step"
              min={1}
              max={30}
              name="movement"
              unit="px"
              defaultValue={1}
              onChange={(move) => console.log(move)}
            />
          </div>
          <div className="mt-3 flex items-center justify-center">
            <MovementControl />
          </div>
        </div>
      </div>
    </>
  );
};

export default IconControl;
