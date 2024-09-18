import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "./Container";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { MdWorkOutline } from "react-icons/md";
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult();
    const formData = new FormData(event.target);

    formData.append("access_key", "4b3550d9-82f2-4a1e-9f54-03c9a53d9337");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Sending Message!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="py-[160px]">
      <section id="contact" className="">
        <div className="lg:pb-[150px] pb-11 w-[100%] flex justify-center">
          <h2
            className="text-[#0afd98] lg:text-[50px] text-[25px] font-bold font-caslon text-center bg-slate-800 py-5 px-14 rounded-tl-[160px] rounded-br-[160px]"
            data-aos="fade-up"
          >
            Contact Me
          </h2>
        </div>
        <Container>
          <div className="lg:flex justify-between">
            <div className="lg:w-[40%]">
              <div class=" px-[50px] pb-[50px] pt-[20px] rounded-tr-[120px] rounded-bl-[120px] border-[4px] border-[#12F7D6] shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 bg-gray-800 flex flex-col items-center justify-center gap-3 transition-all duration-300 group">
                <div class="text-center">
                  <h1
                    class="lg:text-[50px] text-[35px] font-caslon font-bold text-[#d6cece]"
                    data-aos="fade-up"
                  >
                    Forhad Hossen
                  </h1>
                  <h2
                    class="lg:text-[30px] text-[20px] font-caslon font-bold text-[#d6cece]"
                    data-aos="fade-up"
                  >
                    Frontend <span className="text-[#12F7D6]">Developer</span>
                  </h2>
                </div>
                <div class="w-full flex">
                  <ul class="flex flex-col items-start gap-2  *:inline-flex *:gap-2 *:items-center *:justify-center   pb-3">
                    <li data-aos="fade-up">
                      <IoCallOutline className="text-[#12F7D6] font-caslon text-[16px]" />
                      <p className="text-[#d6cece] font-medium font-caslon text-[16px]">
                        01602762283
                      </p>
                    </li>
                    <li data-aos="fade-up">
                      <CiMail className="text-[#12F7D6] font-caslon text-[16px]" />
                      <p className="text-[#d6cece] font-caslon text-[16px]">
                        <a href="">forhadhossen328@gmail.com</a>
                      </p>
                    </li>
                    <li data-aos="fade-up">
                      <IoLocationOutline className="text-[#12F7D6] font-caslon text-[16px]" />
                      <p className="text-[#d6cece] font-caslon text-[16px]">
                        Dhaka / Bangladesh
                      </p>
                    </li>
                    <li data-aos="fade-up">
                      <MdWorkOutline className="text-[#12F7D6] font-caslon text-[16px]" />
                      <p className="text-[#d6cece] font-caslon text-[16px]">
                        Full-time / Freelencer
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:w-[60%] mt-7">
              <form onSubmit={onSubmit}>
                <div
                  className="flex flex-col items-center gap-4 lg:pl-[200px]"
                  data-aos="fade-up"
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="p-3 rounded bg-gray-800 w-full  text-[#d6cece] focus:outline-none focus:ring-2 focus:ring-teal-400 font-caslon"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="p-3 rounded bg-gray-800 w-full  text-[#d6cece] focus:outline-none focus:ring-2 focus:ring-teal-400 font-caslon"
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    className="p-3 rounded bg-gray-800 w-full text-[#d6cece] focus:outline-none focus:ring-2 focus:ring-teal-400 font-caslon"
                    rows="5"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="mt-4 px-6 py-3 bg-teal-500 hover:bg-teal-600 text-[#d6cece] font-bold rounded-full transition duration-300 font-caslon"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Container>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ToastContainer />
        <span>{result}</span>
      </section>
    </div>
  );
};

export default Contact;
