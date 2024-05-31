import React from "react";
import Sidebar from "../components/Sidebar";
import Controls from "../components/Controls";
import LogoPreview from "../components/LogoPreview";

const Home = () => {
  return (
    <div className="fixed grid h-[97vh] w-full grid-cols-1 md:grid-cols-4">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-1 border-x-2">
        <Controls />
      </div>
      <div className="md:col-span-2">
        <LogoPreview />
      </div>
    </div>
  );
};

export default Home;
