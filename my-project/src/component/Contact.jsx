import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "61d94a2d-eda7-4d94-b053-64ab5ec67c65");

    const object = Object.fromEntries(formData.entries()); 
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully!");
        event.target.reset(); 
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="py-[160px]">
      <section id="contact" className="text-center">
        <div className="lg:pb-[150px] pb-11 w-[100%] flex justify-center">
          <h2
            className="text-[#0afd98] lg:text-[50px] text-[25px] font-bold font-caslon text-center bg-slate-800 py-5 px-14 rounded-tl-[160px] rounded-br-[160px]"
            data-aos="fade-up"
          >
            Contact Me
          </h2>
        </div>
        <form onSubmit={onSubmit}>
          <div className="flex flex-col items-center gap-4" data-aos="fade-up">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-3 rounded bg-gray-800 w-full md:w-1/2 text-[#d6cece] focus:outline-none focus:ring-2 focus:ring-teal-400 font-caslon"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-3 rounded bg-gray-800 w-full md:w-1/2 text-[#d6cece] focus:outline-none focus:ring-2 focus:ring-teal-400 font-caslon"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="p-3 rounded bg-gray-800 w-full md:w-1/2 text-[#d6cece] focus:outline-none focus:ring-2 focus:ring-teal-400 font-caslon"
              rows="5"
              required
            ></textarea>
            <button
              type="submit"
              className="mt-4 px-6 py-3 bg-teal-500 hover:bg-teal-600 text-[#d6cece] font-bold rounded-full transition duration-300 font-caslon"
            >
              Send Message
            </button>
            <ToastContainer />
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
