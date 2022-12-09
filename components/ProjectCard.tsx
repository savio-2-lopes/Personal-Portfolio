import { FunctionComponent } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../types";
import Image from "next/image";
import { fadeInUp, stagger } from "../animations";
import { motion } from "framer-motion";

const ProjectCard: FunctionComponent<{
  project: IProject;
  showDetail: null | Number;
  setShowDetail: (id: Number | null) => void;
}> = ({
  project: {
    name,
    image_path,
    deployed_url,
    description,
    github_url,
    key_techs,
    id,
  },
  setShowDetail,
  showDetail,
}) => {
  return (
    <>
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer rounded-lg"
        onClick={() => setShowDetail(id)}
        height="150"
        width="300"
      />

      <p className="mt-4 text-center">{name}</p>

      {showDetail === id && (
        <div className="absolute rounded-lg md:p-4 overflow-hidden top-0 left-0 z-10 grid w-full h-auto md:grid-cols-2 gap-x-12 bg-gray-400">
          <motion.div 
            variants={stagger} 
            initial="initial" 
            animate="animate"
            className="grid items-center"
          >
            <motion.div
              className="rounded-xl border-gray-100"
              variants={fadeInUp}
            >
              <img
                src={image_path}
                alt={name}
                draggable="false"
                className="object-cover rounded-xl h-100 w-100 overflow-hidden"
              />
            </motion.div>

            <motion.div
              className="my-4 grid grid-cols-1 md:grid-cols-2 gap-2 md:space-x-3"
              variants={fadeInUp}
            >
              <>
                <a
                  href={github_url}
                  target="_blank"
                  className="flex items-center rounded-xl md:px-4 py-2 space-x-3 text-lg bg-dark-200"
                >
                  <AiFillGithub />
                  <span>Github</span>
                </a>

                <a
                  href={deployed_url}
                  target="_blank"
                  className="flex items-center md:px-4 py-2 space-x-3 text-lg rounded-xl bg-dark-200"
                >
                  <AiFillProject />
                  <span>Deploy</span>
                </a>
              </>
            </motion.div>
          </motion.div>

          <div className="grid place-items-center p-10">
            <motion.div variants={stagger} initial="initial" animate="animate">
              <motion.h2
                className="text-lg mb-5 font-bold md:text-xl"
                variants={fadeInUp}
              >
                {name}
              </motion.h2>

              <motion.h3 variants={fadeInUp} className="text-sm font-medium">
                {description}
              </motion.h3>

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap mt-5 space-x-2 tracking-wider"
              >
                {key_techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 my-1 text-sm rounded-md bg-dark-200"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>

          <button
            className="absolute p-1 rounded-full top-3 right-3 focus:outline-none bg-dark-200"
            onClick={() => setShowDetail(null)}
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
