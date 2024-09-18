import React from "react";
import Container from "./Container";
import Hec from "../assets/hector.png";
import Oreb from "../assets/oreby.png";
import Pet from "../assets/petrol.png";
import Bwfc from "../assets/bwfc.png";
import Big from "../assets/10page.png";
import Creativ from "../assets/creative.png";
import Mah from "../assets/mah.png";
import Slider from "react-slick";
const Myproject = () => {
  const settings = {
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <Container>
      {" "}
      <section id="project">
        <div
          className="lg:py-[130px] pt-[60px] w-[100%] flex justify-center"
          data-aos="fade-up"
        >
          <h2 className="text-[#0afd98] lg:text-[50px] text-[25px] font-bold  font-caslon text-center bg-slate-800 py-5 px-14 rounded-tl-[160px] rounded-br-[160px]">
            My Project
          </h2>
        </div>

        <div className=" lg:flex justify-between flex-wrap">
          <div className="mt-10 lg:mt-0 lg:w-[32%] p-4 border border-gray-700 rounded-lg hover:bg-gray-800 transition transform hover:-translate-y-8 duration-500">
            <img
              src={Hec}
              alt=""
              className="w-full h-[200px]"
              data-aos="fade-up"
            />
            <h3
              className="text-xl font-bold mb-2 font-caslon text-[#d6cece]"
              data-aos="fade-up"
            >
              E-commerce Website
            </h3>
            <p
              className="font-caslon font-medium text-[#d6cece]"
              data-aos="fade-up"
            >
              javascript/tailwind CSS/React
            </p>
            <a
              target="blank"
              href="https://ecommerce-jmpe.vercel.app"
              className="text-teal-400 mt-4 inline-block"
              data-aos="fade-up"
            >
              View Project
            </a>
          </div>

          <div className="mt-10 lg:mt-0 lg:w-[32%] p-4 border border-gray-700 rounded-lg hover:bg-gray-800 transition transform hover:-translate-y-8 duration-500">
            <img
              src={Oreb}
              alt=""
              className="w-full h-[200px]"
              data-aos="fade-up"
            />
            <h3
              className="text-xl font-bold mb-2 font-caslon text-[#d6cece] "
              data-aos="fade-up"
            >
              E-commerce Website
            </h3>
            <p
              className="font-caslon font-medium text-[#d6cece]"
              data-aos="fade-up"
            >
              javascript/tailwind CSS/React
            </p>
            <a
              target="blank"
              href="https://symphonious-dasik-561fc0.netlify.app/"
              className="text-teal-400 mt-4 inline-block font-caslon"
              data-aos="fade-up"
            >
              View Project
            </a>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-[32%] p-4 border border-gray-700 rounded-lg hover:bg-gray-800 transition transform hover:-translate-y-8 duration-500">
            <img
              src={Big}
              alt=""
              className="w-full h-[200px]"
              data-aos="fade-up"
            />
            <h3
              className="text-xl font-bold mb-2 font-caslon text-[#d6cece]"
              data-aos="fade-up"
            >
              Bootstrap Project
            </h3>
            <p
              className="font-caslon font-medium text-[#d6cece]"
              data-aos="fade-up"
            >
              Bootstrap/css/html
            </p>
            <a
              target="blank"
              href="https://forhad8352.github.io/Bootstrap_10page_project/"
              className="text-teal-400 mt-4 inline-block font-caslon"
              data-aos="fade-up"
            >
              View Project
            </a>
          </div>
          <div className="mt-10 lg:w-[32%] p-4 border border-gray-700 rounded-lg hover:bg-gray-800 transition transform hover:-translate-y-8 duration-500">
            <img
              src={Creativ}
              alt=""
              className="w-full h-[200px]"
              data-aos="fade-up"
            />
            <h3
              className="text-xl font-bold mb-2 font-caslon text-[#d6cece]"
              data-aos="fade-up"
            >
              Bootstrap Project
            </h3>
            <p
              className="font-caslon font-medium text-[#d6cece]"
              data-aos="fade-up"
            >
              Bootstrap/css/html
            </p>
            <a
              target="blank"
              href="https://bootstrap-singlepage-project.vercel.app/"
              className="text-teal-400 mt-4 inline-block font-caslon"
              data-aos="fade-up"
            >
              View Project
            </a>
          </div>
          <div className="mt-10 lg:w-[32%] p-4 border border-gray-700 rounded-lg hover:bg-gray-800 transition transform hover:-translate-y-8 duration-500">
            <img
              src={Bwfc}
              alt=""
              className="w-full h-[200px]"
              data-aos="fade-up"
            />
            <h3
              className="text-xl font-bold mb-2 font-caslon text-[#d6cece]"
              data-aos="fade-up"
            >
              Javascript Project
            </h3>
            <p
              className="font-caslon font-medium text-[#d6cece]"
              data-aos="fade-up"
            >
              Html/CSS/Javascript
            </p>
            <a
              target="blank"
              href="https://bwfc1212.netlify.app/"
              className="text-teal-400 mt-4 inline-block font-caslon"
              data-aos="fade-up"
            >
              View Project
            </a>
          </div>
          <div className="mt-10 lg:w-[32%] p-4 border border-gray-700 rounded-lg hover:bg-gray-800 transition transform hover:-translate-y-8 duration-500">
            <img
              src={Pet}
              alt=""
              className="w-full h-[200px]"
              data-aos="fade-up"
            />
            <h3
              className="text-xl font-caslon font-bold mb-2 text-[#d6cece]"
              data-aos="fade-up"
            >
              React Project
            </h3>
            <p
              className="font-caslon font-medium text-[#d6cece]"
              data-aos="fade-up"
            >
              react/Tailwindcss
            </p>
            <a
              target="blank"
              href="https://forhad-14a721.netlify.app/"
              className="text-teal-400 mt-4 inline-block"
              data-aos="fade-up"
            >
              View Project
            </a>
          </div>
          <div className="mt-10 lg:w-[32%] p-4 border border-gray-700 rounded-lg hover:bg-gray-800 transition transform hover:-translate-y-8 duration-500">
            <img
              src={Mah}
              alt=""
              className="w-full h-[200px]"
              data-aos="fade-up"
            />
            <h3
              className="text-xl font-caslon font-bold mb-2 text-[#d6cece]"
              data-aos="fade-up"
            >
              Html Project
            </h3>
            <p
              className="font-caslon font-medium text-[#d6cece]"
              data-aos="fade-up"
            >
              Html/CSS
            </p>
            <a
              target="blank"
              href="https://forhad8352.github.io/Html_project/"
              className="text-teal-400 mt-4 inline-block"
              data-aos="fade-up"
            >
              View Project
            </a>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Myproject;
