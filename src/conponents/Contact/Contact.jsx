import React, {useState} from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  console.log(name, email, message);
  return (
    <div className="flex flex-col lg:flex-row items-center justify-around p-6 md:p-10 h-auto md:h-screen bg-gray-100 border-b-4">
      {/* Contact Information Section */}
      <div className="flex flex-col items-start text-center md:text-left mb-8 md:mb-0 w-full md:w-1/2">
        <div className="flex items-center mb-6 justify-center md:justify-start">
          <svg
            className="w-6 h-6 mr-2 text-black"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M21 8.29l-9 9-4.5-4.5 1.41-1.41L12 14.17l7.59-7.59z" />
          </svg>
          <div>
            <h3 className="text-xl font-bold">Have a question?</h3>
            <p className="text-gray-600">I am here to help you</p>
            <a href="mailto:tom@ethersteelsoft.com" className="text-blue-600">
              Email Me At tom@ethersteelsoft.com
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-start">
          <svg
            className="w-6 h-6 mr-2 text-black"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z" />
          </svg>
          <div>
            <h3 className="text-xl font-bold">Current Location</h3>
            <p className="text-gray-600">Stockholm, Sweden</p>
            <p className="text-blue-600">Serving Clients Worldwide</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="w-full lg:w-1/2 p-4 md:p-8">
        <form name="contact" method="POST">
            <input type="hidden" name="form-name" value="contact" />
          <div>
            <label for="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label for="message">Message:</label>
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
            <button type="submit">Send</button>
        </form>
        {/* <form
          name="contact v1"
          netlify
        >
          <input type="hidden" name="form-name" value="contact v1" />

          <div className="mb-4">
            <label>
              Name: <br />
              <input
                type="text"
                name="Your-name"
                className="w-full p-3 md:p-4 border border-gray-300 bg-slate-300 rounded-lg"
                placeholder="Your Name"
              />
            </label>
          </div>

          <div className="mb-4">
            <label htmlFor="email">
              Email: <br />
              <input
                type="email"
                name="email"
                className="w-full p-3 md:p-4 border border-gray-300 bg-slate-300 rounded-lg"
                placeholder="Your Email"
              />
            </label>
          </div>

          <div className="mb-4">
            <label>
              Subject: <br />
              <input
                type="text"
                className="w-full p-3 md:p-4 border border-gray-300 bg-slate-300 rounded-lg"
                placeholder="Subject"
              />
            </label>
          </div>

          <div className="mb-4">
            <label>
              Message: <br />
              <textarea
                className="w-full p-3 md:p-4 border border-gray-300 bg-slate-300 rounded-lg h-32 md:h-40"
                placeholder="Your Message"
              ></textarea>
            </label>
          </div>

          <div className="flex justify-center md:justify-start">
            <button
              type="submit"
              className="w-full md:w-1/2 bg-button-color hover:bg-button-hover text-white p-3 md:p-4 rounded-lg"
            >
              Send Message
            </button>
          </div>
        </form> */}
      </div>
    </div>
  );
}

export default Contact;
