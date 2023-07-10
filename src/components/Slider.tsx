import clsx from "clsx";
import React from "react";

const Slider = () => {
  const arr = [1, 2, 3, 4];

  return (
    <section className="max-w-[400vw] overflow-hidden ">
      <div>
        {arr.map((slide, index) => (
          <div
            className={clsx(
              `bg-blue-${slide + 1}00`,
              "w-full h-[250px] inline-block rounded-2xl border"
            )}
            key={index}
          >
            {slide}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Slider;
