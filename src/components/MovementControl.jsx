import { useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Dot,
} from "lucide-react";

const MovementControl = () => {
  const [top, setTop] = useState(-50);
  const [left, setLeft] = useState(-50);
  const [movementStep, setMovementStep] = useState(40);

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

  return (
    <div className="flex size-28 flex-col items-center justify-center">
      <button
        onClick={handleTop}
        title="Up"
        className="flex size-9 items-center justify-center border bg-gray-500 font-semibold text-white"
      >
        <ChevronUp />
      </button>
      <div className="flex">
        <button
          title="Left"
          onClick={handleLeft}
          className="flex size-9 items-center justify-center border bg-gray-500 font-semibold text-white"
        >
          <ChevronLeft />
        </button>
        <button
          title="Center"
          onClick={handleCenter}
          className="flex size-9 items-center justify-center border bg-gray-500 font-semibold text-white"
        >
          <Dot />
        </button>
        <button
          title="Right"
          onClick={handleRight}
          className="flex size-9 items-center justify-center border bg-gray-500 font-semibold text-white"
        >
          <ChevronRight />
        </button>
      </div>
      <button
        title="Down"
        onClick={handleBottom}
        className="flex size-9 items-center justify-center border bg-gray-500 font-semibold text-white"
      >
        <ChevronDown />
      </button>
    </div>
  );
};

export default MovementControl;
