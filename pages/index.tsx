import { NextPage } from "next";
import { fadeInUp, routeFade, stagger } from "../animations";
import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import Head from "next/head";
import GalleryLanguage from "../components/GalleryLanguage";

const About: NextPage = () => {
  return (
    <motion.div
      className="flex flex-col flex-grow md:px-6 pt-1"
      variants={routeFade}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Head>
        <title>Savio Lopes | About</title>
      </Head>

      <div className="flex-grow text-base rounded-2xl text-justify leading-loose font-medium bg-gray-100">
        <div className="p-4">
          <h2 className="text-1xl mb-5">
            Pleasure! My name is Savio Lopes, Junior Frontend Developer in
            constant evolution (with experience in Javascript and Typescript)
            and with specialization in Systems Analysis and Development.
          </h2>
          <p className="mb-5">
            I started my journey in the Development area at graduation, where I
            had the opportunity to do an internship in Web Development.
          </p>
          <p className="mb-5">
            With such experiences, I gained knowledge in the following
            technologies:
          </p>
          <ul>
            <li>
              🔹 <b>BackEnd</b>: PHP, Laravel, NodeJS, Python, MVC/MVVM
              Architecture
            </li>
            <li>
              🔹 <b>FrontEnd</b>: JavaScript, NextJS, ReactJS, HTML5, CSS3,
              Bootstrap
            </li>
          </ul>
          <p className="mb-5">
            Since then my focus on studies has never ceased, always seeking to learn new things constantly.
          </p>

          <div className="flex-grow mt-10 grid place-items-center mb-10">
            <img
              draggable="false"
              className="w-full rounded-2xl"
              src="https://github-readme-activity-graph.cyclic.app/graph?username=savio-2-lopes&theme=tokyo-night&hide_border=true&area=true"
              alt="Gráfico das contribuições recentes no GitHub"
            />
        </div>

          <p className="mb-5">
            In most of the projects I worked on I used the following technologies:
          </p>
          <ul>
            <li>
              🔹 Docker
            </li>
            <li>
              🔹 Git/Github
            </li>
            <li>
              🔹 Azure Devops
            </li>
            <li>
              🔹 Agile Methodologies: Scrum, Kanban
            </li>
          </ul>
          <p className="mb-5">
            Each team activity, for me, is an opportunity to learn new technical and human skills.
          </p>
          <p className="mb-5">
            I am open to experiences that develop me as a person and professional.
          </p>
        </div>
      </div>

      <div className="grid justify-center mb-10">
        <div className="max-w-4xl md:p-4 text-gray-800 bg-white rounded-lg shadow">
          <div className="mb-2">
            <div className="h-3 text-3xl text-left text-gray-600">“</div>
            <p className="md:px-4 text-[18px] text-center text-gray-600">
              As a person and professional, I believe in the power of
              communication and team work. Every team activity, for me, is a
              opportunity to learn new technical and human skills. I am open to
              experiences that develop me as a person and professional.
            </p>
            <div className="h-3 text-3xl text-right text-gray-600">”</div>
          </div>
        </div>
      </div>

      <div className="flex-grow rounded-xl bg-gray-100 grid place-items-center">
        <div className="p-4">
          <GalleryLanguage />
        </div>
      </div>

      <div className="flex-grow mt-12 grid place-items-center">
        <h4 className="my-3 text-2xl mb-6 font-bold tracking-wide">
          What am I doing?
        </h4>

        <motion.div
          className="grid gap-6 my-3 md:grid-cols-2"
          variants={stagger}
          animate="animate"
          initial="initial"
        >
          {services.map((service) => (
            <motion.div
              className="col-span-2 p-2 bg-gray-100 rounded-lg md:col-span-1 "
              key={service.title}
              variants={fadeInUp}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mt-10 mb-10 grid place-items-center">
        <h4 className="my-3 text-2xl mb-6 font-bold tracking-wide">
          All my contributions on GitHub
        </h4>
        <img
          className="w-full max-w-[1100px]"
          draggable="false"
          src="https://github-readme-streak-stats.herokuapp.com?user=savio-2-lopes&amp;theme=blux&amp;date_format=j%20M%5B%20Y%5D&amp;background=000000"
          alt="All contributions on GitHub"
        />
      </div>
    </motion.div>
  );
};

export default About;
