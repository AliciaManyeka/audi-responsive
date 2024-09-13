import React from "react";
import person1 from "../../assets/audi-2.png"
import person2 from "../../assets/audi-3.png"
import person3 from "../../assets/audi-4.png"

const testimonialData = [
  {
    name: "LASSY",
    image: person1,
    description:
      "Outstanding! I have bought many cars from Audi North Scottsdale and will continue to do so. The personal care and attention is unmatched, and the overall experience is fantastic. Joe, my salesperson, was informative, helpful, and had a wonderful sense of humor. We immediately connected, and I drove away with my new Audi on the spot",
    aosDelay: "0",
  },
  {
    name: "ANOTIDA",
    image: person2,
    description:
      "Right from the moment my daughter and I entered the Audi Approved Plus showroom until I took delivery of my Audi A6, the experience was purely fantastic! The team's handling of prospects and clients was exemplary, and the reception given to my family made the experience memorable. Thank you for the great service",
    aosDelay: "300",
  },
  {
    name: "TINASHE",
    image: person3,
    description:
      "My experience was very pleasant! Jerry Sayre was thorough, knowledgeable, and kind. As a single female, I was nervous about making such a significant purchase, but Jerry made me feel confident and comfortable throughout the process. He ensured I got the car I wanted within my budget, and I couldn't be happier!",
    aosDelay: "1000",
  },
];
const Testimonial = () => {
  return (
    <>
      <span id="Testimonials"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
        <div className="container">
          {/* Header */}
          <div className="space-y-4 pb-12">
            <p
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              What Our Clients Say About Us
            </p>
            <p data-aos="fade-up" className="text-center sm:px-44">
              The trust our clients place in Audi is evident in their loyalty
              and repeat purchases.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black ">
            {testimonialData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark  hover:bg-primary duration-300 text-white hover:text-black rounded-lg "
              >
                <div className="grid place-items-center ">
                  <img
                    src={skill.image}
                    alt=""
                    className="rounded-full w-20 h-20"
                  />
                </div>
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                <p>{skill.description}</p>
                <p className="text-center font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
