import ColorPicker from "react-best-gradient-color-picker";

const CustomColorPicker = ({
  defaultColor = "rgba(255,255,255,1)",
  colorOnChange = () => {},
  hideControls = false,
}) => {
  return (
    <ColorPicker
      hideControls={hideControls}
      hidePresets={true}
      value={defaultColor}
      onChange={(color) => {
        colorOnChange(color);
      }}
    />
  );
};

export default CustomColorPicker;
