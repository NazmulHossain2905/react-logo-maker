import React from "react";
import Sidebar from "../components/Sidebar";
import Controls from "../components/Controls";
import LogoPreview from "../components/LogoPreview";

const Home = () => {
  return (
    <div className="body-height grid w-full grid-cols-1 md:grid-cols-6">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-2 overflow-visible border-x-2 pb-16 md:overflow-auto">
        <Controls />
      </div>
      <div className="md:col-span-3">
        <LogoPreview />
      </div>
    </div>
  );
};

export default Home;
