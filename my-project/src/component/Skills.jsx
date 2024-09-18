import React from 'react'
import Container from "./Container";
import Marquee from "react-fast-marquee";
const Skills = () => {
  return (
    <Container>
      {" "}
      <section className="text-center mb-12">
        <div className="pt-[70px] lg:pt-0 pb-[48px] w-[100%] flex justify-center" data-aos="fade-up">
          <h2 className="text-[#0afd98] lg:text-[50px] text-[25px] font-bold  font-caslon text-center bg-slate-800 py-5 px-14 rounded-tl-[160px] rounded-br-[160px]">
            Skills
          </h2>
        </div>
        <Marquee>
        <div className="flex justify-center lg:gap-6 gap-2 mt-6">
          <span className="lg:p-4 p-2 bg-gray-800 text-[#d6cece] font-caslon rounded-full lg:text-lg text-[14px] font-bold transition transform hover:scale-110">
            Html
          </span>
          <span className="lg:p-4 p-2 bg-gray-800 text-[#d6cece] font-caslon rounded-full lg:text-lg text-[14px] font-bold transition transform hover:scale-110">
            CSS
          </span>
          <span className="lg:p-4 p-2 bg-gray-800 text-[#d6cece] font-caslon rounded-full lg:text-lg text-[14px] font-bold transition transform hover:scale-110">
            Tailwind CSS
          </span>
          <span className="lg:p-4 p-2 bg-gray-800 text-[#d6cece] font-caslon rounded-full lg:text-lg text-[14px] font-bold transition transform hover:scale-110">
            Bootstrap
          </span>
          <span className="lg:p-4 p-2 bg-gray-800 text-[#d6cece] font-caslon rounded-full lg:text-lg text-[14px] font-bold transition transform hover:scale-110">
            React
          </span>
          <span className="lg:p-4 p-2 text-[#d6cece] font-caslon bg-gray-800 rounded-full lg:text-lg text-[14px] font-bold transition transform hover:scale-110 ">
            Javascript
          </span>
          <span className="lg:p-4 p-2 text-[#d6cece] font-caslon bg-gray-800 rounded-full lg:text-lg text-[14px] font-bold transition transform hover:scale-110 ">
            Sass
          </span>
          <span className="lg:p-4 p-2 bg-gray-800 text-[#d6cece] font-caslon rounded-full lg:text-lg text-[14px] font-bold transition transform hover:scale-110">
            Html
          </span>
          <span className="lg:p-4 p-2 bg-gray-800 text-[#d6cece] font-caslon rounded-full lg:text-lg text-[14px] font-bold transition transform hover:scale-110">
            CSS
          </span>
          <span className="lg:p-4 p-2 bg-gray-800 text-[#d6cece] font-caslon rounded-full lg:text-lg text-[14px] font-bold transition transform hover:scale-110">
            Tailwind CSS
          </span>
          <span className="lg:p-4 p-2 bg-gray-800 text-[#d6cece] font-caslon rounded-full lg:text-lg text-[14px] font-bold transition transform hover:scale-110">
            Bootstrap
          </span>
          <span className="lg:p-4 p-2 bg-gray-800 text-[#d6cece] font-caslon rounded-full lg:text-lg text-[14px] font-bold transition transform hover:scale-110">
            React
          </span>
          <span className="lg:p-4 p-2 text-[#d6cece] font-caslon bg-gray-800 rounded-full lg:text-lg text-[14px] font-bold transition transform hover:scale-110 ">
            Javascript
          </span>
        </div>
        </Marquee>
      </section>
    </Container>
  );
}

export default Skills