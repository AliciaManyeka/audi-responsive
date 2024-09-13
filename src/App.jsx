import React, { Component, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import CarList from "./components/CarList/CarList";
import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner";
import Contact from "./components/Contact/Contact";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import image from './assets/background.png'
import ImageSlider from "./components/ImageSlider/ImageSlider";



const App = () => {

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className=" dark:bg-black background ">
      <div className="blur-effect">
        <Navbar theme={theme} setTheme={setTheme} />
        <Hero theme={theme} />
        <About />
        <Services />
        <CarList />
        <ImageSlider />
        
        <Testimonial />
        <AppStoreBanner />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
