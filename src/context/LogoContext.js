import { Smile } from "lucide-react";
import { createContext, useContext } from "react";

export const LogoContext = createContext({
  icon: {
    iconName: Smile,
    size: 200,
    rotate: 0,
    movementStep: 1,
    color: "#fff",
  },
  background: {
    rounded: 50,
    padding: 50,
    background: "#f0f",
  },

  setIconStyle: () => {},
  setBackgroundStyle: () => {},
});
export const LogoContextProvider = LogoContext.Provider;
export const useLogoContext = () => {
  return useContext(LogoContext);
};
