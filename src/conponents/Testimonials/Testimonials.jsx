import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css"; // Add this for custom styles

const testimonials = [
  {
    name: "Nabil",
    role: "Fullstack Developer",
    quote:
      "Tom is an outstanding developer who thrives on challenges. His ability to tackle complex problems and find effective solutions is truly impressive. He is a valuable asset to any team, and his enthusiasm and expertise inspire everyone around him. I highly recommend Tom for any project or team looking for a dedicated and skilled developer.",
  },
  { name: "Hrodvar", role: "Development manager", quote: "It has been educational and rewarding to have Tom in our development team. Tom has been a part of our development team during the years 2023 and 2024. His task has been to design and develop a new config editor. Tom is a kind, driven, and ambitious developer." },
  { name: "Victor", role: "Multimedia producer", quote: "Quote coming later." },
  { name: "TBA", role: "Manager", quote: "Quote coming later." },
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
    <div className="bg-tommy-background flex flex-col items-center justify-center text-center h-screen overflow-hidden border-b-4">
      <h2 className="text-4xl text-gray-800 mb-10 overflow-hidden">
        What Other People Say
      </h2>
      <div className="w-1/2">
        <Slider {...settings} className="custom-dots">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4 h-full">
              <div className="bg-gray-900 text-white border border-gray-700 rounded-2xl shadow-md p-6 h-full flex flex-col justify-between items-center">
                <div className="flex flex-col items-center">
                  <h3 className="text-md font-bold mb-2">{testimonial.name}</h3>
                  <h4 className="text-sm text-gray-400 mb-4">
                    {testimonial.role}
                  </h4>
                  <div className="text-sm h-40 overflow-y-auto custom-scrollbar my-5">
                    "{testimonial.quote}"
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
