import {
  AiFillGithub,
  AiOutlineCloudDownload,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import { ImStackoverflow } from "react-icons/im";
import { GoLocation } from "react-icons/go";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div>
      <Image
        src="https://github.com/savio-2-lopes.png"
        alt="avatar"
        draggable="false"
        className="mx-auto border rounded-full"
        height="145"
        width="150"
        quality="100"
      />

      <div className="mt-2 text-center leading-loose">
        <p className="my-4 tracking-wider">Hi, I'm Savio Lopes!</p>
      </div>

      <div className="md:grid flex grid-cols-2 md:grid-cols-4 justify-center gap-2">
        <a href="https://github.com/savio-2-lopes/savio-2-lopes">
          <img
            alt="Github Status Updating Brightgreen"
            src="https://img.shields.io/badge/status-updating-brightgreen.svg"
          />
        </a>
        <a href="https://github.com/savio-2-lopes/savio-2-lopes/graphs/contributors">
          <img
            alt="Github Contributors"
            src="https://img.shields.io/github/contributors/savio-2-lopes/savio-2-lopes?color=blue"
          />
        </a>
        <a href="https://github.com/savio-2-lopes">
          <img
            alt="Github Stars"
            src="https://img.shields.io/github/stars/savio-2-lopes.svg?color=blue&logo=github"
          />
        </a>
        <a href="https://github.com/savio-2-lopes/savio-2-lopes/network/members">
          <img
            alt="Github Forks"
            src="https://img.shields.io/github/forks/savio-2-lopes/savio-2-lopes.svg?color=blue&logo=github"
          />
        </a>
      </div>

      <p className="px-3 mt-8 p-5 py-1 my-3 bg-gray-100 rounded-full bg-black-500">
        Junior Developer
      </p>

      <div className="mb-8 mt-8 text-center leading-loose">
        <p className="my-4 tracking-wider">
          Here you can get to know me better and learn more about my work.
        </p>
      </div>

      <div className="px-3 mt-8 mb-8 p-5 py-1 my-3 bg-gray-100 rounded-full bg-black-500">
        <a href="/CV-Savio_Lopes.pdf" download="CV-Savio_Lopes.pdf">
          <div className="flex items-center justify-center">
            <AiOutlineCloudDownload className="w-6 h-6 mr-2" />
            <span>Download CV</span>
          </div>
        </a>
      </div>

      <div className="px-3 mt-8 p-5 py-1 my-3 bg-gray-100 rounded-full bg-black-500">
        <div className="grid place-items-center grid-cols-4 gap-4">
          <a href="https://www.instagram.com/savioaugulopes/">
            <AiFillInstagram className="w-12 h-12 cursor-pointer" />
          </a>

          <a href="https://pt.stackoverflow.com/users/304161/savio-lopes/">
            <ImStackoverflow className="w-10 h-10 cursor-pointer" />
          </a>

          <a href="https://www.linkedin.com/in/savio-lopes/">
            <AiFillLinkedin className="w-12 h-12 cursor-pointer" />
          </a>

          <a href="https://github.com/savio-2-lopes/">
            <AiFillGithub className="w-12 h-12 cursor-pointer" />
          </a>
        </div>
      </div>

      {/* Contato */}

      <div className="px-3 mt-8 p-5 py-1 my-3 bg-gray-100 rounded-full bg-black-500">
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" />
          <span>São Paulo, Brasil </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
