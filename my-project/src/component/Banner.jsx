import React from 'react'
import Container from "./Container";
import { MdWorkOutline } from "react-icons/md";
import Bannerr from "../assets/banner.png";
const Banner = () => {
  return (
    <div className="lg:py-[120px] py-[50px]">
      {" "}
      <Container>
        <div id="banner" className="">
          <div className="lg:flex justify-between">
            <div className="lg:w-[60%] w-full ">
              <div className="text-center lg:text-start">
                <p
                  className="lg:text-[64px] text-[36px] font-caslon text-[#fff] font-bold"
                  data-aos="fade-right"
                >
                  {" "}
                  <br /> Hey <br /> I'm{" "}
                  <span className="text-[#12F7D6]">
                    Forhad Hossen
                  </span> <br /> Forntend{" "}
                  <span className="text-[#12F7D6]"> Developer</span>{" "}
                </p>
              </div>
              <div className="lg:mx-0 mx-[15px]" data-aos="fade-right">
                <p className="text-[16px] font-caslon text-[#fff] font-normal lg:w-[700px] text-center lg:text-start">
                  I help business grow by crafting amazing web experiences. If
                  you’re looking for a developer that likes to get stuff done,
                  <br />{" "}
                </p>
              </div>
              <div className="lg:mx-0 mx-[15px]" data-aos="fade-right" >
                <h3 className="text-[#09ffda] text-[16px] font-caslon font-normal leading-[42px] text-center lg:text-start">
                  Let's Talk
                </h3>
              </div>
            </div>
            <div className="lg:w-[40%]" data-aos="fade-left">
              <img className="w-full h-full" src={Bannerr} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Banner