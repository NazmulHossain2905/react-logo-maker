import React from "react";
import { icons } from "lucide-react";

const LucideIcon = ({ name, size, color, className, style }) => {
  const Icon = icons[name];
  return Icon ? (
    <Icon color={color} size={size} className={className} style={style} />
  ) : null;
};

export default LucideIcon;
