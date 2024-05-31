import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import LogoPreview from "../components/LogoPreview";
import IconControl from "../components/IconControl";
import BackgroundControl from "../components/BackgroundControl";
import { LogoContextProvider, useLogoContext } from "../context/LogoContext";

const Home = () => {
  const [activeBtnIndex, setActiveTabIndex] = useState(0);

  const { icon, background } = useLogoContext();

  const [iconStyle, setIconStyle] = useState(icon);
  const [backgroundStyle, setBackgroundStyle] = useState(background);

  return (
    <LogoContextProvider
      value={{
        icon: iconStyle,
        setIconStyle,
        background: backgroundStyle,
        setBackgroundStyle,
      }}
    >
      <div className="body-height grid w-full grid-cols-1 md:grid-cols-6">
        <div className="col-span-1">
          <Sidebar handleOnChangeBtn={(index) => setActiveTabIndex(index)} />
        </div>
        <div className="col-span-2 overflow-visible border-x-2 p-3 pb-16 md:overflow-auto">
          {activeBtnIndex === 0 ? <IconControl /> : <BackgroundControl />}
        </div>
        <div className="md:col-span-3">
          <LogoPreview />
        </div>
      </div>
    </LogoContextProvider>
  );
};

export default Home;
