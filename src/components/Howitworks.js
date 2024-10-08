import React from "react";
import Works from "./Works";

export const Howitworks = () => {
  return (
    <>
      <div className="w-full mt-36 text-center plus-jakarta-sans flex justify-center items-center flex-col">
        <h1 className="text-blue-600 plus-jakarta-sans lg:text-2xl text-xl ">How it works</h1>
        <div className="w-2/3">
          <h1 className="text-black mt-10 lg:text-6xl text-2xl plus-jakarta-sans leading-snug">
            <span className="text-yellow-400">Diversify your portfolio</span><br /> with <span className="text-blue-600" >high income generating </span>Real Estate Easily
          </h1>
        </div>
      </div>
      <Works />
    </>
  );
};
