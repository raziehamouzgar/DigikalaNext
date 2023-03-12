import Image from "next/image";
import { useState } from "react";
import Capture1 from "../../public/images/baner1.jpg";
import Capture2 from "../../public/images/baner2.jpg";
import Capture3 from "../../public/images/baner3.jpg";

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [Capture1, Capture2, Capture3];

  const handlePrevClick = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentIndex - 1;
    setCurrentIndex(index);
  };

  const handleNextClick = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      <div className="flex absolute bottom-0 right-0 m-4 gap-3">
        <button
          className=" place-content-end bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-full"
          onClick={handlePrevClick}
        >
          {`<`}
        </button>
        <button
          className=" bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-full"
          onClick={handleNextClick}
        >
          {`>`}
        </button>
      </div>
      {images.map((imageName, index) => (
        <Image
        className="cursor-pointer h-56 md:h-auto object-cover"
          key={index}
          src={imageName}
          alt="slider"
          style={{ display: index === currentIndex ? "block" : "none" }}
        />
      ))}
    </div>
  );
}

export default Slider;
