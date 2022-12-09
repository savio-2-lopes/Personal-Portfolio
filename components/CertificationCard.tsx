import { FunctionComponent } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { ICertification } from "../types";
import Image from "next/image";
import { fadeInUp, stagger } from "../animations";
import { motion } from "framer-motion";

const CertificationCard: FunctionComponent<{
  project: ICertification;
  showDetail: null | Number;
  setShowDetail: (id: Number | null) => void;
}> = ({
  project: { name, image_path, description, id },
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
        layout="responsive"
        height="150"
        quality={10}
        width="300"
      />

      <p className="my-2 text-center">{name}</p>

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
                className="object-cover rounded-xl  h-100 w-100 overflow-hidden"
              />
            </motion.div>
          </motion.div>

          <div className="grid place-items-center p-10">
            <motion.div variants={stagger} initial="initial" animate="animate">
              <motion.h2
                className="text-2xl mb-8 font-bold md:text-2xl"
                variants={fadeInUp}
              >
                {name}
              </motion.h2>

              <motion.h3 variants={fadeInUp} className="font-medium">
                {description}
              </motion.h3>
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

export default CertificationCard;
