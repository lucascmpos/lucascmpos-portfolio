import React from "react";
import { LuInfo } from "react-icons/lu";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineWorkOutline } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="fixed bg-opacity-80 flex flex-row text-lg justify-around  bg-[#020216] text-gray-300 font-semibold w-full p-6 z-10">
      <Link to="home" smooth={true} duration={500}>
        <div>
          <h2 className="cursor-pointer font-bold text-purple-800">
            campos<span className="text-gray-100">.</span>dev
          </h2>
        </div>
      </Link>
      <div className="flex flex-row text-lg gap-10">
        <Link to="about" smooth={true} duration={500}>
          <h2 className="flex flex-row cursor-pointer gap-2 justify-center items-center group">
            <FaRegCircleUser
              size={20}
              className="text-gray-300 group-hover:text-purple-700 group-hover:-translate-y-0.5 transition-all duration-300"
            />
            Sobre
          </h2>
        </Link>
        <Link to="exp" smooth={true} duration={500}>
          <h2 className="flex flex-row cursor-pointer gap-2 justify-center items-center group">
            <MdOutlineWorkOutline
              size={20}
              className="text-gray-300 group-hover:text-purple-800 group-hover:-translate-y-0.5 transition-all duration-300"
            />
            Experiência
          </h2>
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          <h2 className="flex flex-row cursor-pointer gap-2 justify-center items-center group">
            <GoProjectRoadmap
              size={20}
              className="text-gray-300 group-hover:text-purple-800 group-hover:-translate-y-0.5 transition-all duration-300"
            />
            Projetos
          </h2>
        </Link>
        <h2 className="flex flex-row cursor-pointer gap-2 justify-center items-center group">
          <LuInfo
            size={20}
            className="text-gray-300 group-hover:text-purple-800 group-hover:-translate-y-0.5 transition-all duration-300"
          />
          Contato
        </h2>
      </div>
    </header>
  );
};

export default Header;
