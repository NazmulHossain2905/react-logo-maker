import React, { useState } from "react";
import ColorPicker from "react-best-gradient-color-picker";

const CustomColorPicker = ({ hideControls = false }) => {
  const [color, setColor] = useState("rgba(255,255,255,1)");

  return (
    <ColorPicker
      hideControls={hideControls}
      hidePresets={true}
      value={color}
      onChange={setColor}
    />
  );
};

export default CustomColorPicker;
