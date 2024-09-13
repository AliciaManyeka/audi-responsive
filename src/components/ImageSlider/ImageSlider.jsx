import React, { useState } from "react";
import Two from "../../assets/audi_images/one.png";
import Three from "../../assets/audi_images/two.png";
import One from "../../assets/audi_images/three.png";
import Four from "../../assets/audi_images/four.png";
import Five from "../../assets/audi_images/five.png";
import { motion } from "framer-motion";


const ImageSlider = () => {
  const [positionIndex, setPositionIndexs] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexs((prevIndexs) => {
      const updatedIndexs = prevIndexs.map((prevIndex) => (prevIndex + 1) % 5);
      return updatedIndexs;
    });
  };

  const images = [One, Two, Three, Four, Five];
  const position = ["center", "left", "left1", "right1", "right"];
  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 2 },
    left: { x: "-90%", scale: 0.5, zIndex: 1 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 2 },
  };

  return (
    <div className="">
      <span id="ImageSlider"></span>
      <div className=" dark:bg-black flex items-center flex-col justify-center  h-screen relative">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={Image}
            className="rounded-[12px]"
            initial="center"
            animate={position[positionIndex[index]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            style={{ width: "30%", position: "absolute" }}
          />
        ))}
      </div>
      <div className="w-full flex  justify-center  dark:bg-black">
        <button
          className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black "
          onClick={handleNext}
        >
          Next
        </button>
        {/* <button
          data-aos="fade-up"
          className="button-outline"
          onClick={handleNext}
        >
          Next
        </button> */}
      </div>
    </div>
  );
};

export default ImageSlider;
