import React, { useState } from "react";
import ColorPicker from "react-best-gradient-color-picker";

const CustomColorPicker = ({
  defaultColor = "rgba(255,255,255,1)",
  colorOnChange = () => {},
  hideControls = false,
}) => {
  const [color, setColor] = useState(defaultColor);

  return (
    <ColorPicker
      hideControls={hideControls}
      hidePresets={true}
      value={color}
      onChange={(color) => {
        setColor(color);
        colorOnChange(color);
      }}
    />
  );
};

export default CustomColorPicker;
