import React from "react";
// import Logo from '../../assets/i love my Audi!.png';
import Logo from "../../assets/car-log.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
  {
    id: 1,
    title: "HOME",
    link: "/#",
  },
  {
    id: 1,
    title: "Services",
    link: "/#services",
  },
  {
    id: 2,
    title: "Gallery",
    link: "/#cars",
  },
  {
    id: 1,
    title: "ABOUT",
    link: "/#About",
  },
  {
    id: 1,
    title: "Contact",
    link: "/#Contact",
  },
  {
    id: 1,
    title: "Testimonial",
    link: "/#Testimonials",
  },
];
const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
      <section className="container">
        <div className=" grid md:grid-cols-3 py-5">
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif">
              Audi Exclusive
            </h1>
            <p className="text-sm">
              Experience the Audi difference, where luxury meets performance.
              Join us on the road to innovation and excellence. Your journey
              begins here.{" "}
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Harare Zimbabwe</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+263 71366 2322</p>
            </div>

            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>
        
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  {FooterLinks.map((link) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200">
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <img src={Logo} alt="Audi logo" />
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 "></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
