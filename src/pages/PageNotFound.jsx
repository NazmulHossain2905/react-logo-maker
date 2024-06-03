import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="body-height flex items-center justify-center bg-gradient-to-b from-slate-200 to-slate-600">
      <div className="flex flex-col items-center gap-4 font-bold text-black">
        <h1 className="text-9xl">
          <span className="animate-pulse">4</span>
          <span className="animate-pulse">0</span>
          <span className="animate-pulse">4</span>
        </h1>
        <h1 className="animate-pulse font-mono text-7xl">Not Found</h1>
        <Link
          to="/"
          className="rounded-full bg-blue-400 p-1 px-5 font-semibold hover:bg-blue-500"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
