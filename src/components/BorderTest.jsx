import { useEffect, useState } from "react";

function BorderTest() {
  const borderSides = [
    "border",
    "borderTop",
    "borderRight",
    "borderBottom",
    "borderLeft",
  ];

  const [selectedBorderSides, setSelectedBorderSides] = useState(["border"]);
  const [selectedBorderSidesStyle, setSelectedBorderSidesStyle] = useState({});

  const handleSideChange = (side, index) => {
    const isExist = selectedBorderSides.indexOf(side) !== -1;

    if (isExist) {
      setSelectedBorderSides((prev) => prev.filter((s) => s !== side));
    } else {
      setSelectedBorderSides((prev) => [...prev, side]);
    }

    if (side === "border") {
      setSelectedBorderSides([side]);
    }

    if (side !== "border") {
      setSelectedBorderSides((prev) => prev.filter((s) => s !== "border"));
    }

    // setSelectedBorderSides((prev) =>
    //   prev.includes(side) ? prev.filter((s) => s !== side) : [...prev, side],
    // );
  };

  useEffect(() => {
    const convertToObj = selectedBorderSides.reduce((prev, curr) => {
      return { ...prev, [curr]: "10px solid red" };
    }, {});

    setSelectedBorderSidesStyle(convertToObj);
  }, [selectedBorderSides]);

  return (
    <div className="flex h-[90vh] flex-col items-center justify-center gap-10">
      <div className="flex gap-4">
        {borderSides.map((side, index) => (
          <div
            key={side}
            style={{ [side]: "5px solid green" }}
            className={`size-8 cursor-pointer ${selectedBorderSides.includes(side) ? "bg-green-400" : "bg-gray-300"}`}
            onClick={() => handleSideChange(side, index)}
          ></div>
        ))}
      </div>

      <div
        style={selectedBorderSidesStyle}
        className="size-80 rounded-full bg-green-400"
      ></div>
    </div>
  );
}

export default BorderTest;
