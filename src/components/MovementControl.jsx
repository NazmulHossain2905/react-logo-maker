import { useEffect, useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Dot,
} from "lucide-react";
import { useLogoContext } from "../context/LogoContext";

const MovementControl = ({ onChangeIconPosition = () => {} }) => {
  const { icon } = useLogoContext();

  const [top, setTop] = useState(-50);
  const [left, setLeft] = useState(-50);

  const movementStep = Number(icon.movementStep);

  const handleTop = () => {
    setTop((prev) =>
      prev > -200
        ? prev - movementStep < -200
          ? -200
          : prev - movementStep
        : -200,
    );
  };

  const handleBottom = () => {
    setTop((prev) =>
      prev < 100
        ? prev + movementStep > 100
          ? 100
          : prev + movementStep
        : 100,
    );
  };

  const handleLeft = () => {
    setLeft((prev) =>
      prev > -200
        ? prev - movementStep < -200
          ? -200
          : prev - movementStep
        : -200,
    );
  };

  const handleRight = () => {
    setLeft((prev) =>
      prev < 100
        ? prev + movementStep > 100
          ? 100
          : prev + movementStep
        : 100,
    );
  };

  const handleCenter = () => {
    setTop(-50);
    setLeft(-50);
  };

  useEffect(() => {
    onChangeIconPosition({ top, left });
  }, [top, left]);

  return (
    <div className="flex size-28 flex-col items-center justify-center">
      <button
        onClick={handleTop}
        title="Up"
        className="group flex size-9 items-center justify-center border bg-gray-500 font-semibold text-white hover:bg-gray-600"
      >
        <ChevronUp className="transition group-hover:-translate-y-1" />
      </button>
      <div className="flex">
        <button
          title="Left"
          onClick={handleLeft}
          className="group flex size-9 items-center justify-center border bg-gray-500 font-semibold text-white hover:bg-gray-600"
        >
          <ChevronLeft className="transition group-hover:-translate-x-1" />
        </button>
        <button
          title="Center"
          onClick={handleCenter}
          className="group flex size-9 items-center justify-center border bg-gray-500 font-semibold text-white hover:bg-gray-600"
        >
          <Dot className="transition group-hover:scale-125" />
        </button>
        <button
          title="Right"
          onClick={handleRight}
          className="group flex size-9 items-center justify-center border bg-gray-500 font-semibold text-white hover:bg-gray-600"
        >
          <ChevronRight className="transition group-hover:translate-x-1" />
        </button>
      </div>
      <button
        title="Down"
        onClick={handleBottom}
        className="group flex size-9 items-center justify-center border bg-gray-500 font-semibold text-white hover:bg-gray-600"
      >
        <ChevronDown className="transition group-hover:translate-y-1" />
      </button>
    </div>
  );
};

export default MovementControl;
