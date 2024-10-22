import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";
import VectorBG from "../../Images/VectorBG.png";

const testimonials = [
  {
    name: "NABIL",
    role: "Fullstack Developer",
    quote:
      "Tom is an outstanding developer who thrives on challenges. His ability to tackle complex problems and find effective solutions is truly impressive. He is a valuable asset to any team, and his enthusiasm and expertise inspire everyone around him. I highly recommend Tom for any project or team looking for a dedicated and skilled developer.",
  },
  {
    name: "HRODVAR",
    role: "Development manager",
    quote:
      "It has been educational and rewarding to have Tom in our development team. Tom has been a part of our development team during the years 2023 and 2024. His task has been to design and develop a new config editor. Tom is a kind, driven, and ambitious developer.",
  },
  {
    name: "VICTOR",
    role: "Multimedia producer",
    quote:
      "Tom created my website. He is quick and thorough. I am very happy with the result.",
  },
  {
    name: "EMMA",
    role: "IT Manager at Tele2",
    quote:
      "Tom has been an intern in my department for five months. During this time, he has become a part of the team and created value. He has easy to learn and is both humble and curious, he has a great personality. ",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <div
      className="testimonials-section bg-[#181818] min-h-screen p-10 flex flex-col items-center"
      style={{
        backgroundImage: `url(${VectorBG})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="text-4xl font-bold mb-20 mt-20 text-[#8A8A8A] text-center">
        WHAT OTHER PEOPLE SAY
      </h2>
      <div className="w-full p-4 md:p-20">
        <Slider {...settings} className="custom-dots">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-4 h-auto flex items-center justify-center"
            >
              <div className="testimonial-card bg-[#282828] text-white border-2 border-[#282828] rounded-2xl shadow-md p-10 md:h-[550px] h-[460px] flex flex-col justify-between items-center">
                <div className="flex flex-col items-center">
                  <h3 className="text-md font-bold text-[#D35400] mb-2">
                    {testimonial.name}
                  </h3>
                  <h4 className="text-sm text-[#8A8A8A] mb-4">
                    {testimonial.role}
                  </h4>
                  <div className="my-1 text-[#8A8A8A]">
                    <p className="md:text-lg text-sm">"{testimonial.quote}"</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
