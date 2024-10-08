import React from "react";
import CarPng from "../../assets/audi-2.png";

const About = () => {
  return (
    <div
      className="  dark:bg-black sm:min-h-[600px] sm:grid sm:place-items-center duration-300"
      id="About"
    >
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={CarPng}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-5xl font-bold font-serif"
              >
                About Us
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
                At the heart of the Audi brand lies a deep passion for
                performance.From the legendary quattro all-wheel drive system to
                the exhilarating power of our turbocharged engines,every Audi is
                engineered to deliver an unparalleled driving experience.
                Whether carving through tight mountain roads or effortlessly
                accelerating onto the highway,an Audi responds with
                precision,agility, and pure driving pleasure.
              </p>
              <p data-aos="fade-up">
                We have always been synonymous with premium quality, innovative
                technology, and thrilling performance. But what if we told you
                that you can enjoy all of those benefits without breaking the
                bank? Our commitment to providing affordable luxury means that
                you can experience the Audi difference without sacrificing your
                financial well-being.
              </p>
              <button data-aos="fade-up" className="button-outline">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
