import { createContext, useContext } from "react";

export const LogoContext = createContext({
  icon: {
    iconName: "Atom",
    size: 300,
    rotate: 0,
    movementStep: 1,
    color: "#fff",
    position: {
      top: -50,
      left: -50,
    },
  },
  background: {
    rounded: 250,
    padding: 10,
    background:
      "linear-gradient(180deg, rgb(179, 226, 153) 0%, rgb(1, 163, 115) 100%)",
  },
  border: [
    {
      side: "border",
      properties: {
        width: 15,
        style: "solid",
        color: "#DDDDDD",
      },
    },
  ],

  setIconStyle: () => {},
  setBackgroundStyle: () => {},
  setBorderStyle: () => {},
});
export const LogoContextProvider = LogoContext.Provider;
export const useLogoContext = () => {
  return useContext(LogoContext);
};
