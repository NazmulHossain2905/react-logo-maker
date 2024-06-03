import React from "react";
import { CheckCircle } from "lucide-react";

const About = () => {
  const featuresAndBenefits = [
    {
      title: "User-Friendly Interface",
      description:
        "Our intuitive drag-and-drop interface makes logo design a breeze.",
    },
    {
      title: "Extensive Icon Library",
      description: "Choose from thousands of professionally designed icons",
    },
    {
      title: "Customizable Designs",
      description: "ailor your logo with various fonts, colors, and layouts.",
    },
    {
      title: "Instant Download",
      description: "Get high-resolution logo files instantly.",
    },
  ];

  return (
    <div className="body-height overflow-auto">
      <div className="h-[450px] bg-[url('/about_bg.png')] bg-cover bg-no-repeat">
        <div className="flex h-full flex-col items-center justify-center gap-5 bg-black bg-opacity-15">
          <h1 className="rounded-full border-b-4 border-slate-300 bg-black bg-opacity-80 p-2 px-8 text-2xl font-bold uppercase text-blue-400 sm:text-4xl md:text-7xl">
            Welcome to LogoMaker
          </h1>
          <p className="rounded-full border-b-4 border-gray-300 bg-white bg-opacity-30 p-1.5 px-6 text-lg italic text-black sm:text-2xl md:p-3 md:text-5xl">
            Create your own logo with{" "}
            <span className="rounded-full border-b-4 border-blue-500 bg-black px-3 font-medium not-italic text-white">
              LogoMaker
            </span>
          </p>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-screen-xl px-3">
        <h2 className="border-l-8 border-l-blue-500 pl-3 text-3xl font-semibold text-blue-500">
          Features and Benefits
        </h2>
        <ul className="ml-5 mt-5 flex flex-col gap-3">
          {featuresAndBenefits.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-lg">
              <CheckCircle className="mt-1.5 size-[22px] text-blue-500" />
              <div>
                <strong className="text-gray-700">
                  {feature.title}
                  {": "}
                </strong>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto mt-20 max-w-screen-xl px-3">
        <h2 className="border-l-8 border-l-blue-500 pl-3 text-3xl font-semibold text-blue-500">
          Logos Created By "LogoMaker"
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {Array(12)
            .fill(0)
            .map((_, i) => (
              <div className="group aspect-square cursor-pointer border border-dashed">
                <img
                  className="size-full transition group-hover:scale-110"
                  src={`/logo-${i + 1}.png`}
                  alt={`Logo-${i + 1}`}
                />
              </div>
            ))}
        </div>
      </div>

      <div className="mx-auto mb-28 mt-20 max-w-screen-xl px-3">
        <h2 className="border-l-8 border-l-blue-500 pl-3 text-3xl font-semibold text-blue-500">
          How It Works
        </h2>
        <p className="ml-5 mt-2 text-lg text-gray-700">
          Creating your logo with <strong>LogoMaker</strong> is simple
        </p>

        <div className="mt-5">
          <ol className="ml-8 flex list-decimal flex-col gap-2 text-lg text-gray-700">
            <li>Select an icon from our extensive library.</li>
            <li>Customize your design with our intuitive tools.</li>
            <li>Preview your logo and make any final adjustments.</li>
            <li>Download your logo in high resolution, ready for use.</li>
          </ol>
        </div>
      </div>

      <div className="bg-gray-800 p-12 text-center text-lg text-gray-300">
        Developed by <strong>Nazmul Hossain</strong>. All Rights Reserved 2024.
        •{" "}
        <a
          className="text-blue-500 hover:text-blue-600 hover:underline"
          href="https://github.com/NazmulHossain2905/react-logo-maker"
          target="_blank"
        >
          GitHub Repository
        </a>
      </div>
    </div>
  );
};

export default About;
