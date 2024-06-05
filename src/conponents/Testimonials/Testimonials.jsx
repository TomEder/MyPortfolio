import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonials.css'; // Add this for custom styles

const testimonials = [
    { name: "Nabil Benali", role: "Fullstack Developer", quote: "Tom is an awesome dude with big brain developer skills. Hire him!" },
    { name: "Victor Lind", role: "Multimedia Producer", quote: "Tom is an awesome booba with big brain developer skills. Booba him!" },
    { name: "Hrodvar Johansson", role: "Development Manager", quote: "Tom is a dude" },
    { name: "Danne Persson", role: "Manager", quote: "I fired him!" },
    { name: "Tommy", role: "Fullstack Developer", quote: "I am the best! Tom is an awesome booba with big brain developer skills. Booba him! I am the best! Tom is an awesome booba with big brain developer skills. Booba him! I am the best! Tom is an awesome booba with big brain developer skills. Booba him!" },
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
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ],
        appendDots: dots => (
            <div>
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
    };

    return (
        <div className="bg-tommy-background flex flex-col items-center justify-center text-center h-screen overflow-hidden border-b-4">
            <h2 className="text-4xl text-gray-800 mb-10 overflow-hidden">What Other People Say</h2>
            <div className="w-1/2">
                <Slider {...settings} className="custom-dots">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="p-4 h-full">
                            <div className="bg-gray-900 text-white border border-gray-700 rounded-2xl shadow-md p-6 h-full flex flex-col justify-between items-center">
                                <div className="flex flex-col items-center">
                                    <h3 className="text-md font-bold mb-2">{testimonial.name}</h3>
                                    <h4 className="text-sm text-gray-400 mb-4">{testimonial.role}</h4>
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
}

export default Testimonials;
