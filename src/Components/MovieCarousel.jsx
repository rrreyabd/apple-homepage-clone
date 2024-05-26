import React, { useState, useEffect } from "react";
import { images } from "../lib/data";

const MovieCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center mt-4">
      <div className="relative w-[1250px] h-[667.25px] flex justify-center">
        {images.map((image, index) => {
          let positionClass = "translate-x-full -z-10";
          if (index === activeIndex) {
            positionClass = "translate-x-0";
          } else if (index === (activeIndex - 1 + images.length) % images.length) {
            positionClass = "-translate-x-full";
          }
          
          return (
            <div
              key={index}
              className={`absolute w-full h-full transition-all duration-1000 ease-in-out ${positionClass} p-4 bg-white`}
            >
              <img src={image} alt="Movie Cover" className={`h-full w-full object-cover z-0 ${
                index === activeIndex ? "" : "opacity-40"
              } `} />
            </div>
          );
        })}
        <div className="flex gap-4 py-4 absolute -bottom-8">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full ${
                index === activeIndex ? "bg-gray-900" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCarousel;