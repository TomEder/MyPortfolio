import React, { useState } from "react";
import "./Contact.css";
import VectorBG from "../../Images/VectorBG.png";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div
      className="contact-section bg-[#181818] min-h-screen p-10 flex flex-col lg:flex-row items-center justify-around"
      style={{
        backgroundImage: `url(${VectorBG})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Contact Information Section */}
      <div className="flex flex-col items-start text-center md:text-left mb-8 md:mb-0 w-full md:w-1/2 text-[#8A8A8A]">
        <div className="flex items-center mb-6 justify-center md:justify-start">
          <svg
            className="w-6 h-6 mr-2 text-[#D35400]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M21 8.29l-9 9-4.5-4.5 1.41-1.41L12 14.17l7.59-7.59z" />
          </svg>
          <div>
            <h3 className="text-xl font-bold">HAVE A QUESTION?</h3>
            <p>I am here to help you</p>
            <a href="mailto:tom@ethersteelsoft.com" className="text-[#D35400]">
              Email Me At tom@ethersteelsoft.com
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-start">
          <svg
            className="w-6 h-6 mr-2 text-[#D35400]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z" />
          </svg>
          <div>
            <h3 className="text-xl font-bold">CURRENT LOCATION</h3>
            <p>Stockholm, Sweden</p>
            <p className="text-[#D35400]">Serving Clients Worldwide</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="w-full lg:w-1/2 p-4 md:p-8">
        <form
          name="contact"
          method="POST"
          className="w-full max-w-lg bg-[#282828] p-8 rounded-lg shadow-md"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="mb-6">
            <label
              className="block text-[#D35400] text-lg font-bold mb-2"
              htmlFor="name"
            >
              NAME
            </label>
            <input
              className="w-full p-3 rounded bg-[#383838] text-[#8A8A8A] border border-[#D35400] focus:outline-none focus:border-[#b84400]"
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-[#D35400] text-lg font-bold mb-2"
              htmlFor="email"
            >
              EMAIL
            </label>
            <input
              className="w-full p-3 rounded bg-[#383838] text-[#8A8A8A] border border-[#D35400] focus:outline-none focus:border-[#b84400]"
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-[#D35400] text-lg font-bold mb-2"
              htmlFor="message"
            >
              MESSAGE
            </label>
            <textarea
              className="w-full p-3 rounded bg-[#383838] text-[#8A8A8A] border border-[#D35400] focus:outline-none focus:border-[#b84400]"
              name="message"
              id="message"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="5"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full md:w-1/2 bg-[#D35400] hover:bg-[#b84400] text-white p-3 rounded-lg transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
