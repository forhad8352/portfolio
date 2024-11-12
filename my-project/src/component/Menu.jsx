import Container from "./Container";
import Logo from "../assets/logo.png";
import { GoHome } from "react-icons/go";
import { VscAccount } from "react-icons/vsc";
import { GrContact } from "react-icons/gr";
import { GoProjectSymlink } from "react-icons/go";

const Menu = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume_Forhad.pdf";
    link.download = "Resume_Forhad.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container className="">
      <div className="py-[30px]">
        <header className="flex justify-between items-center ">
          <div className="w-[30%] ml-2 lg:ml-0">
            <img src={Logo} alt="" className="w-[200px]" />
          </div>
          <div className="w-[40%] fixed z-10 top-[33px] left-0 translate-x-[75%]  ">
            <div className="lg:flex justify-around text-center hidden  items-center px-3 py-1 bg-[#3f3c3c63]  rounded-[55px]">
              <div className="relative hover:cursor-pointer hover:bg-slate-900 p-2 rounded-full transition-all duration-500 ">
                <a href="#about">
                  <GoHome className="w-[50px] h-7 text-[#d6cece]" />
                </a>
              </div>
              <div className="relative group hover:cursor-pointer hover:bg-slate-900 p-2 rounded-full transition-all duration-500">
                <a href="#project">
                  <GoProjectSymlink className="w-[50px] h-[25px] text-[#d6cece] scroll-smooth duration-500" />
                </a>
              </div>

              <div className="relative group hover:cursor-pointer hover:bg-slate-900 p-2 rounded-full transition-all duration-500">
                <a href="#account">
                  <VscAccount className="w-[50px] h-[25px] text-[#d6cece]" />
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-[30%] text-end mr-[10px] lg:mr-[0px]">
            <button
              onClick={handleDownload}
              type="button"
              className="inline-block lg:px-6 px-4 py-3 mr-3 font-caslon text-[16px] font-bold lg:text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-110 hover:rotate-2 hover:bg-pink-700 hover:text-pink-200 hover:shadow-lg active:opacity-85"
            >
              Download Resume
            </button>
          </div>
        </header>
      </div>
    </Container>
  );
};

export default Menu;
