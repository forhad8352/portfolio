import React from "react";
import Container from "./Container";
import { ImGithub } from "react-icons/im";
import { GrLinkedin } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";

const Fotter = () => {
  return (
    <Container className="">
      <div id="account" className="py-8">
        <section class="flex justify-between items-center ">
          <div className="items-center">
            <p className="font-caslon font-medium text-[#d6cece] text-[14px] lg:text-[18px] pl-[10px] lg:pl-[0px]">
              © 2024 Forhad Hossen. All rights reserved.
            </p>
          </div>
          <div className="flex">
            <div className="items-center">
              <button
                class=" group flex justify-center p-2 rounded-md drop-shadow-xl text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                href="/"
              >
                <a target="blank" href="https://github.com/forhad8352">
                  <ImGithub className="bg-transparent lg:w-[30px] w-[20px] h-8 " />
                </a>{" "}
                <span class="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                  GitHub
                </span>
              </button>
            </div>
            <div className="lg:px-10">
              <button
                class=" group flex justify-center p-2 rounded-md drop-shadow-xl text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                href="/"
              >
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/forhad-hossen835241/"
                >
                  <GrLinkedin className="bg-transparent lg:w-[30px] w-[20px] h-8 " />{" "}
                </a>
                <span class="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                  Linkedin
                </span>
              </button>
            </div>
            <div className="">
              <button
                class=" group flex justify-center p-2 rounded-md drop-shadow-xl text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                href="/"
              >
                <a
                  target="blank"
                  href="https://www.facebook.com/forhad.hossen23"
                >
                  <FaFacebook className="bg-transparent lg:w-[30px] w-[20px] h-8" />{" "}
                </a>
                <span class="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                  Facebook
                </span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default Fotter;
