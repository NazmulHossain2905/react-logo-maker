import { PaintBucket, PencilRuler, Wrench } from "lucide-react";
import React, { useState } from "react";

const Sidebar = () => {
  const buttons = [
    {
      id: 1,
      title: "Icon",
      icon: PencilRuler,
    },
    {
      id: 2,
      title: "Background",
      icon: PaintBucket,
    },
    {
      id: 3,
      title: "Upgrade",
      icon: Wrench,
    },
  ];

  const [activeBtnIndex, setActiveBtnIndex] = useState(0);

  return (
    <div className="m-3 mt-5 flex flex-col gap-4">
      {buttons.map((btn, index) => (
        <button
          className={`flex items-center justify-start gap-4
           rounded-md border p-4 px-5 font-semibold transition-colors
          hover:bg-blue-400 hover:text-white
              ${
                activeBtnIndex === index
                  ? "bg-blue-500 text-white"
                  : "bg-transparent text-blue-500"
              }`}
          key={btn.id}
          onClick={() => setActiveBtnIndex(index)}
        >
          <btn.icon className="size-5" />
          {btn.title}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
