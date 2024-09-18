import React from "react";
import Container from "./Container";
import Aboutt from "../assets/profile.png";

const About = () => {
  return (
    <section id="about" className="lg:py-[100px]">
      <Container>
        <div
          className="pb-[120px] w-[100%] flex justify-center"
          data-aos="fade-up"
        >
          <h2 className="text-[#0afd98] lg:text-[50px] text-[25px] font-bold  font-caslon text-center bg-slate-800 py-5 px-14 rounded-tl-[160px] rounded-br-[160px]">
            About Me
          </h2>
        </div>
        <div className="lg:flex justify-between">
          <div className="lg:w-[40%]" data-aos="fade-right">
            <img
              className="lg:rounded-tl-[300px] rounded-tl-[200px] rounded-br-[200px] lg:rounded-br-[300px] w-full"
              src={Aboutt}
              alt=""
            />
          </div>
          <div className="lg:w-[50%] mt-[50px] lg:mt-0">
            <div className="bg-gray-800 p-8 rounded-[20px] lg:mt-[120px] w-full">
              <h3
                className="text-[#d6cece] font-caslon font-bold text-[32px]"
                data-aos="fade-left"
              >
                {" "}
                Hello
              </h3>
              <p
                className="text-[#c9c9c9] font-play text-[14px] lg:text-[18px] font-normal lg:leading-8 leading-5 w-full"
                data-aos="fade-left"
              >
                I’m Forhad Hossen, a passionate front-end developer based in
                Dhaka Bangladesh. With a love for creating intuitive and
                engaging user experiences, I specialize in turning complex
                problems into elegant and functional solutions. My expertise
                lies in{" "}
                <span className="text-[#0afd98] font-caslon font-bold">
                  {" "}
                  HTML, CSS{" "}
                </span>
                , and{" "}
                <span className="text-[#0afd98] font-caslon font-bold">
                  {" "}
                  JavaScript
                </span>
                , with a strong focus on modern frameworks like
                <span className="text-[#0afd98] font-caslon font-bold">
                  {" "}
                  React{" "}
                </span>
                and{" "}
                <span className="text-[#0afd98] font-caslon font-bold">
                  Bootstrap TailwindCSS.
                </span>
              </p>
              <p
                className="text-[#c9c9c9] font-play text-[14px] lg:text-[18px] font-normal lg:leading-8 leading-5 pt-4 w-full"
                data-aos="fade-left"
              >
                {" "}
                I’m skilled in responsive design, cross-browser compatibility,
                and performance optimization, ensuring that the websites and
                applications I build are both beautiful and functional. If
                you’re interested in working together or just want to chat about
                the latest in web development, feel free to [contact me via
                email]. I’d love to hear from you!
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
