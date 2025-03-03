import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="contact-section bg-[#f9f9f9] min-h-screen p-10 flex flex-col lg:flex-row items-center justify-around">
      {/* Kontaktinformation */}
      <div className="flex flex-col items-start text-center md:text-left mb-8 md:mb-0 w-full md:w-1/2 text-[#313433]">
        <div className="flex items-center mb-6 justify-center md:justify-start">
          <svg
            className="w-6 h-6 mr-2 text-[#313433]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M21 8.29l-9 9-4.5-4.5 1.41-1.41L12 14.17l7.59-7.59z" />
          </svg>
          <div>
            <h3 className="text-xl font-bold">HAR DU EN FRÅGA?</h3>
            <p>Jag hjälper gärna till!</p>
            <a
              href="mailto:tom@ethersteelsoft.com"
              className="text-[#007bff] underline"
            >
              Mejla mig på tom@ethersteelsoft.com
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-start">
          <svg
            className="w-6 h-6 mr-2 text-[#313433]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z" />
          </svg>
          <div>
            <h3 className="text-xl font-bold">NUVARANDE PLATS</h3>
            <p>Åkersberga, Sverige</p>
            <p className="text-[#007bff]">Tjänar kunder över hela världen</p>
          </div>
        </div>
      </div>

      {/* Kontaktformulär */}
      <div className="w-full lg:w-1/2 p-4 md:p-8">
        <form
          name="contact"
          method="POST"
          className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md border border-gray-300"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="mb-6">
            <label
              className="block text-[#313433] text-lg font-bold mb-2"
              htmlFor="name"
            >
              NAMN
            </label>
            <input
              className="w-full p-3 rounded bg-gray-100 text-[#313433] border border-gray-300 focus:outline-none focus:border-[#007bff]"
              type="text"
              id="name"
              name="name"
              placeholder="Ditt namn"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-[#313433] text-lg font-bold mb-2"
              htmlFor="email"
            >
              E-POST
            </label>
            <input
              className="w-full p-3 rounded bg-gray-100 text-[#313433] border border-gray-300 focus:outline-none focus:border-[#007bff]"
              type="email"
              id="email"
              name="email"
              placeholder="Din e-post"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-[#313433] text-lg font-bold mb-2"
              htmlFor="message"
            >
              MEDDELANDE
            </label>
            <textarea
              className="w-full p-3 rounded bg-gray-100 text-[#313433] border border-gray-300 focus:outline-none focus:border-[#007bff]"
              name="message"
              id="message"
              placeholder="Ditt meddelande"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="5"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full md:w-1/2 bg-[#007bff] hover:bg-[#0056b3] text-white p-3 rounded-lg transition-colors"
          >
            Skicka
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
