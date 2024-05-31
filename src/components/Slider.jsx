import React, { useState } from "react";

const Slider = ({
  name,
  label,
  unit = "px",
  min = 0,
  max = 100,
  defaultValue = 0,
  onChange = () => {},
}) => {
  const [value, setValue] = useState(defaultValue);
  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="font-medium" htmlFor={name}>
          {label}
        </label>

        <span>{`${value}${unit}`}</span>
      </div>
      <input
        className="range-slider"
        type="range"
        name={name}
        id={name}
        min={min}
        max={max}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </div>
  );
};

export default Slider;
