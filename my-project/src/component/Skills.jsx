import React from 'react'
import Container from "./Container";
import Marquee from "react-fast-marquee";
import Html from "../assets/html.png"
import Tailwind from "../assets/tailwind.png"
import CSS from "../assets/css.png"
import Java from "../assets/js.png"
import Bootstrap from "../assets/bootstrap.png"
import Reactt from "../assets/reactt.png"
const Skills = () => {
  return (
    <Container>
      {" "}
      <section className="text-center mb-12">
        <div
          className="pt-[70px] lg:pt-0 pb-[48px] w-[100%] flex justify-center"
          data-aos="fade-up"
        >
          <h2 className="text-[#0afd98] lg:text-[50px] text-[25px] font-bold  font-caslon text-center bg-slate-800 py-5 px-14 rounded-tl-[160px] rounded-br-[160px]">
            Skills
          </h2>
        </div>
        <Marquee speed={120}>
          <div className="flex justify-center lg:gap-6 gap-2 mt-6">
            <div className="lg:p-4 p-2 text-[#d6cece] font-caslon lg:text-[16px] text-[14px] font-bold transition transform ">
              <img src={Html} alt="" className="lg:w-[80px] w-[60px]" />
              <span className="font-caslon text-[#E44D26]">Html</span>
            </div>
            <div className="lg:p-4 p-2 text-[#d6cece] font-caslon lg:text-[16px] text-[14px] font-bold transition transform">
              <img src={CSS} alt="" className="lg:w-[80px] w-[60px]" />
              <span className="font-caslon text-[#0277BD]">CSS</span>
            </div>
            <div className="lg:p-4 p-2 text-[#d6cece] font-caslon lg:text-[16px] text-[14px] font-bold transition transform ">
              <img src={Tailwind} alt="" className="lg:w-[80px] w-[60px]" />
              <span className="font-caslon text-[#3cdbce]">Tailwind</span>
            </div>
            <div className="lg:p-4 p-2 text-[#d6cece] font-caslon lg:text-[16px] text-[14px] font-bold transition transform ">
              <img src={Bootstrap} alt="" className="lg:w-[80px] w-[60px] " />
              <span className="font-caslon text-[#673AB7]">Bootstrap</span>
            </div>
            <div className="lg:p-4 p-2 text-[#d6cece] font-caslon lg:text-[16px] text-[14px] font-bold transition transform ">
              <img src={Java} alt="" className="lg:w-[80px] w-[60px] " />
              <span className="font-caslon text-[#FFD600]">Javascript</span>
            </div>
            <div className="lg:p-4 p-2 text-[#d6cece] font-caslon lg:text-[16px] text-[14px] font-bold transition transform">
              <img src={Reactt} alt="" className="lg:w-[80px] w-[60px] " />
              <span className="font-caslon text-[#00D8FF]">React</span>
            </div>
            <div className="lg:p-4 p-2 text-[#d6cece] font-caslon lg:text-[16px] text-[14px] font-bold transition transform ">
              <img src={Html} alt="" className="lg:w-[80px] w-[60px] " />
              <span className="font-caslon text-[#E44D26]">Html</span>
            </div>
            <div className="lg:p-4 p-2 text-[#d6cece] font-caslon lg:text-[16px] text-[14px] font-bold transition transform">
              <img src={CSS} alt="" className="lg:w-[80px] w-[60px] " />
              <span className="font-caslon text-[#0277BD]">CSS</span>
            </div>
            <div className="lg:p-4 p-2 text-[#d6cece] font-caslon ">
              <img src={Tailwind} alt="" className="lg:w-[80px] w-[60px] " />
              <span className="font-caslon text-[#3cdbce] lg:text-[16px] text-[14px] font-bold">
                Tailwind
              </span>
            </div>
            <div className="lg:p-4 p-2 text-[#d6cece] font-caslon lg:text-[16px] text-[14px] font-bold transition transform ">
              <img src={Bootstrap} alt="" className="lg:w-[80px] w-[60px] " />
              <span className="font-caslon text-[#673AB7]">Bootstrap</span>
            </div>
            <div className="lg:p-4 p-2 text-[#d6cece] font-caslon lg:text-[16px] text-[14px] font-bold transition transform">
              <img src={Java} alt="" className="lg:w-[80px] w-[60px] " />
              <span className="font-caslon text-[#FFD600]">
                Javascript
              </span>
            </div>
          </div>
        </Marquee>
      </section>
    </Container>
  );
}

export default Skills